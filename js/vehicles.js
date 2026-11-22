/* =====================================================================
   js/vehicles.js — the vehicle details page (vehicle-details.html)
   ===================================================================== */
(function () {
  "use strict";
  document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("vehicleDetail");
    if (!root || !window.UD) return;
    const p = UD.params();
    const d = UD.getDriver(p.get("driver"));
    const v = UD.getVehicle(d, p.get("vehicle"));
    if (!d || !v) {
      root.innerHTML = '<div class="empty-state"><i class="bi bi-car-front"></i><h1 class="h3">Vehicle not found</h1><p>This vehicle link is not valid. Browse drivers to find the right vehicle.</p><a class="btn btn-ud" href="drivers.html">View all drivers</a></div>';
      UD.setMeta("Vehicle not found — UrbanDrive");
      return;
    }
    const vName = v.name;
    UD.setMeta(vName + " — " + d.name + " — UrbanDrive", "Vehicle details for " + vName + ", operated by " + d.name + " on UrbanDrive.");
    document.getElementById("crumbs").innerHTML = UD.breadcrumb([
      { label: "Home", href: "index.html" }, { label: "Our Drivers", href: "drivers.html" },
      { label: d.name, href: UD.driverUrl(d) }, { label: vName },
    ]);

    // gallery: main image + any extra images from data.js
    const images = [v.image].concat(Array.isArray(v.gallery) ? v.gallery : []).filter(Boolean);
    const thumbs = images.length > 1
      ? `<div class="thumbs" role="list">${images.map((src, i) => `<button type="button" class="thumb${i === 0 ? " active" : ""}" data-src="${UD.esc(src)}" aria-label="Show photo ${i + 1}">${UD.media(src, "", "media-thumb", '<i class="bi bi-image"></i>')}</button>`).join("")}</div>` : "";

    const spec = (label, val) => `<div class="spec"><dt>${label}</dt><dd>${UD.isReal(val) ? UD.esc(val) : UD.soon}</dd></div>`;
    const features = UD.list(v.features);
    root.innerHTML = `<div class="row g-4 g-lg-5">
      <div class="col-lg-7">
        <div class="gallery-main" id="galleryMain">${UD.media(images[0], vName, "media-gallery", UD.vehiclePh)}</div>${thumbs}
      </div>
      <div class="col-lg-5">
        <div class="badges">${UD.isReal(v.category) ? `<span class="badge-cat">${UD.esc(v.category)}</span>` : ""}${UD.isReal(v.name) ? "" : '<span class="badge-sample">Sample slot</span>'}</div>
        <h1 class="profile-name">${UD.esc(vName)}</h1>
        <a class="owner-card" href="${UD.driverUrl(d)}">
          <span class="owner-avatar">${UD.media(d.photo, d.name, "media-avatar", UD.isReal(d.name) ? UD.esc(d.name.trim().charAt(0).toUpperCase()) : '<i class="bi bi-person-fill"></i>')}</span>
          <span><span class="fact-label">Operated by</span><span class="fact-value">${UD.esc(d.name)}</span>
          <span class="owner-link">View driver profile</span></span></a>
        ${UD.isReal(v.price) ? `<p class="price-line">${UD.esc(v.price)}</p>` : '<p class="fine-print">Pricing is not listed. Ask the driver or send an enquiry.</p>'}
        ${UD.isReal(v.availability) ? `<p class="fine-print"><i class="bi bi-calendar-check"></i> ${UD.esc(v.availability)}</p>` : ""}
        <div class="contact-panel">
          <h2 class="h5 mb-2">Contact Driver</h2>
          ${UD.contactButtons(d, v)}
          <a class="btn btn-ud w-100 mt-3" href="contact.html?driver=${encodeURIComponent(d.id)}&vehicle=${encodeURIComponent(v.id)}#enquiry"><i class="bi bi-envelope"></i> Send an Enquiry to UrbanDrive</a>
          <p class="fine-print">Contacting a driver or sending an enquiry does not confirm a booking. The enquiry goes to UrbanDrive, not to the driver.</p>
        </div>
      </div></div>
      <div class="row g-4 g-lg-5 mt-1">
        <div class="col-lg-7">
          <h2 class="h4">About this vehicle</h2>
          <p class="profile-bio">${UD.isReal(v.description) ? UD.esc(v.description) : UD.soon}</p>
          <h2 class="h4 mt-4">Features</h2>
          ${features.length ? `<ul class="feature-list">${features.map((f) => `<li><i class="bi bi-check2-circle"></i>${UD.esc(f)}</li>`).join("")}</ul>` : `<p>${UD.soon}</p>`}
        </div>
        <div class="col-lg-5"><h2 class="h4">Specifications</h2>
          <dl class="specs">${spec("Brand", v.brand)}${spec("Model", v.model)}${spec("Year", v.year)}${spec("Category", v.category)}${spec("Seating capacity", v.seats)}${spec("Luggage capacity", v.luggage)}${spec("Fuel type", v.fuel)}${spec("Transmission", v.transmission)}${spec("Air conditioning", v.airConditioning)}</dl>
        </div></div>`;

    // thumbnail switching
    root.querySelectorAll(".thumb").forEach((b) =>
      b.addEventListener("click", () => {
        root.querySelectorAll(".thumb").forEach((t) => t.classList.remove("active"));
        b.classList.add("active");
        document.getElementById("galleryMain").innerHTML = UD.media(b.dataset.src, vName, "media-gallery", UD.vehiclePh);
      })
    );

    // more from this driver
    const others = (d.vehicles || []).filter((x) => x.id !== v.id);
    const moreWrap = document.getElementById("moreVehicles");
    document.getElementById("moreTitle").textContent = "More vehicles from " + d.name;
    moreWrap.innerHTML = others.length ? others.map((x) => UD.vehicleCard(x, d, { showOwner: false })).join("") : '<div class="col-12"><p class="soon-note">This driver has no other vehicles listed yet.</p></div>';
    UD.revealCards(moreWrap, true);

    // related drivers
    const idx = UD.drivers.indexOf(d);
    const rel = [1, 2, 3].map((k) => UD.drivers[(idx + k) % UD.drivers.length]).filter((x) => x && x !== d);
    const relWrap = document.getElementById("relatedDrivers");
    relWrap.innerHTML = rel.map((x) => UD.driverCard(x)).join("");
    UD.revealCards(relWrap, true);

    if (window.gsap && !UD.reduceMotion) gsap.from("#vehicleDetail", { autoAlpha: 0, y: 14, duration: 0.5, clearProps: "all" });
  });
})();
