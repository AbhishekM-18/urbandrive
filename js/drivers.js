/* =====================================================================
   js/drivers.js — (1) search + filters + driver/vehicle results
                   (2) the driver profile page (driver-details.html)
   ===================================================================== */
(function () {
  "use strict";
  document.addEventListener("DOMContentLoaded", () => {
    if (!window.UD) return;
    if (document.getElementById("discover")) initDiscovery();
    if (document.getElementById("driverProfile")) initProfile();
  });

  const norm = (s) => String(s == null ? "" : s).toLowerCase();
  const SEAT_BUCKETS = {
    upto4: { label: "Up to 4 seats", test: (n) => n <= 4 },
    "5to7": { label: "5 to 7 seats", test: (n) => n >= 5 && n <= 7 },
    "8plus": { label: "8 or more seats", test: (n) => n >= 8 },
  };
  const sortVehicles = (list, mode) => {
    const l = list.slice();
    const seats = (x) => { const n = parseInt(x.v.seats, 10); return isNaN(n) ? null : n; };
    if (mode === "name") l.sort((a, b) => String(a.v.name).localeCompare(String(b.v.name)));
    if (mode === "seatsAsc") l.sort((a, b) => (seats(a) ?? 999) - (seats(b) ?? 999));
    if (mode === "seatsDesc") l.sort((a, b) => (seats(b) ?? -1) - (seats(a) ?? -1));
    if (mode === "year") l.sort((a, b) => (parseInt(b.v.year, 10) || 0) - (parseInt(a.v.year, 10) || 0));
    return l;
  };

  /* ---------------- discovery: search + filters ---------------- */
  function initDiscovery() {
    const $ = (id) => document.getElementById(id);
    const state = { q: "", cat: "", seats: "", sort: "default", view: UD.params().get("view") === "vehicles" ? "vehicles" : "drivers" };

    // demo notice while data.js still holds placeholders
    if (UD.drivers.every((d) => !UD.isReal(d.name))) {
      $("demoNotice").innerHTML = '<div class="notice"><i class="bi bi-info-circle"></i><span><strong>Demo content.</strong> These driver and vehicle slots are placeholders. Add real details in <code>js/data.js</code>.</span></div>';
    }

    // category options come from data.js, so new categories appear automatically
    const cats = [...new Set(UD.drivers.flatMap((d) => (d.vehicles || []).map((v) => v.category)).filter(UD.isReal))].sort();
    $("fCategory").innerHTML = '<option value="">All categories</option>' + cats.map((c) => `<option>${UD.esc(c)}</option>`).join("");
    $("fSeats").innerHTML = '<option value="">Any capacity</option>' + Object.entries(SEAT_BUCKETS).map(([k, b]) => `<option value="${k}">${b.label}</option>`).join("");

    const vehMatches = (v, d) => {
      if (state.q && !norm([v.name, v.brand, v.model, v.category, v.year, d.name].join(" ")).includes(state.q)) return false;
      if (state.cat && v.category !== state.cat) return false;
      if (state.seats) { const n = parseInt(v.seats, 10); if (isNaN(n) || !SEAT_BUCKETS[state.seats].test(n)) return false; }
      return true;
    };

    function render() {
      const active = !!(state.q || state.cat || state.seats);
      const dList = [], vList = [];
      UD.drivers.forEach((d) => {
        const matched = (d.vehicles || []).filter((v) => vehMatches(v, d));
        matched.forEach((v) => vList.push({ v, d }));
        const nameOnly = !state.cat && !state.seats && norm(d.name).includes(state.q);
        if (!active || matched.length || nameOnly) dList.push({ d, matched });
      });
      const sorted = sortVehicles(vList, state.sort);

      $("countDrivers").textContent = dList.length;
      $("countVehicles").textContent = sorted.length;
      ["Drivers", "Vehicles"].forEach((n) => {
        const on = state.view === n.toLowerCase();
        $("tab" + n).classList.toggle("active", on);
        $("tab" + n).setAttribute("aria-selected", on);
      });
      $("sortWrap").hidden = state.view !== "vehicles";
      $("clearFilters").hidden = !active;

      const showing = state.view === "drivers" ? dList : sorted;
      const grid = $("resultGrid");
      if (!showing.length) {
        grid.innerHTML = "";
        $("emptyState").hidden = false;
      } else {
        $("emptyState").hidden = true;
        grid.innerHTML = state.view === "drivers"
          ? dList.map((x) => UD.driverCard(x.d, { matchCount: active ? x.matched.length : null })).join("")
          : sorted.map((x) => UD.vehicleCard(x.v, x.d)).join("");
        UD.revealCards(grid, false);
      }
      $("resultSummary").textContent = `Showing ${showing.length} ${state.view === "drivers" ? "driver(s)" : "vehicle(s)"}` + (active ? " for your search" : "");
    }

    $("fSearch").addEventListener("input", (e) => { state.q = norm(e.target.value.trim()); render(); });
    $("fCategory").addEventListener("change", (e) => { state.cat = e.target.value; render(); });
    $("fSeats").addEventListener("change", (e) => { state.seats = e.target.value; render(); });
    $("fSort").addEventListener("change", (e) => { state.sort = e.target.value; render(); });
    $("filterForm").addEventListener("submit", (e) => e.preventDefault());
    const clear = () => {
      state.q = state.cat = state.seats = ""; state.sort = "default";
      $("filterForm").reset(); render();
    };
    $("clearFilters").addEventListener("click", clear);
    $("emptyClear").addEventListener("click", clear);
    $("tabDrivers").addEventListener("click", () => { state.view = "drivers"; render(); });
    $("tabVehicles").addEventListener("click", () => { state.view = "vehicles"; render(); });

    render();
    // first load: use the scroll-triggered reveal for the visible grid
    UD.revealCards($("resultGrid"), true);
  }

  /* ---------------- driver profile page ---------------- */
  function initProfile() {
    const root = document.getElementById("driverProfile");
    const d = UD.getDriver(UD.params().get("id"));
    if (!d) {
      root.innerHTML = '<div class="empty-state"><i class="bi bi-person-x"></i><h1 class="h3">Driver not found</h1><p>This driver link is not valid. Browse all drivers to find the right profile.</p><a class="btn btn-ud" href="drivers.html">View all drivers</a></div>';
      UD.setMeta("Driver not found — UrbanDrive");
      return;
    }
    const name = UD.isReal(d.name) ? d.name : d.name;
    UD.setMeta(name + " — Drivers — UrbanDrive", "Explore the vehicles operated by " + name + " on UrbanDrive.");
    document.getElementById("crumbs").innerHTML = UD.breadcrumb([{ label: "Home", href: "index.html" }, { label: "Our Drivers", href: "drivers.html" }, { label: name }]);

    const langs = UD.list(d.languages), areas = UD.list(d.serviceAreas);
    const fact = (icon, label, val) => `<div class="fact"><i class="bi ${icon}"></i><div><span class="fact-label">${label}</span><span class="fact-value">${val}</span></div></div>`;
    root.innerHTML = `<div class="row g-4 g-lg-5 align-items-start">
      <div class="col-md-5 col-lg-4"><div class="profile-photo">${UD.media(d.photo, name, "media-profile", UD.driverPh(d))}</div></div>
      <div class="col-md-7 col-lg-8">
        <h1 class="profile-name">${UD.esc(name)}</h1>
        <p class="profile-bio">${UD.isReal(d.shortBio) ? UD.esc(d.shortBio) : UD.soon}</p>
        <div class="facts">
          ${fact("bi-briefcase", "Experience", UD.isReal(d.experience) ? UD.esc(d.experience) : UD.soon)}
          ${fact("bi-translate", "Languages", langs.length ? UD.esc(langs.join(", ")) : UD.soon)}
          ${fact("bi-geo-alt", "Service areas", areas.length ? UD.esc(areas.join(", ")) : UD.soon)}
          ${UD.isReal(d.availabilityStatus) ? fact("bi-calendar-check", "Availability", UD.esc(d.availabilityStatus)) : ""}
        </div>
        <div class="contact-panel" id="contact">
          <h2 class="h5 mb-2">Contact Driver</h2>
          ${UD.contactButtons(d, null)}
          <p class="fine-print">This contacts ${UD.esc(name)} directly. Contacting a driver does not confirm a booking. For questions to UrbanDrive, <a href="contact.html">send an enquiry</a>.</p>
        </div>
      </div></div>`;

    // vehicles
    const vehicles = d.vehicles || [];
    document.getElementById("vehiclesTitle").textContent = "Vehicles operated by " + name;
    document.getElementById("vehiclesCount").textContent = vehicles.length + (vehicles.length === 1 ? " vehicle" : " vehicles");
    const cats = [...new Set(vehicles.map((v) => v.category).filter(UD.isReal))].sort();
    const catSel = document.getElementById("pCategory"), sortSel = document.getElementById("pSort"), grid = document.getElementById("vehicleGrid");
    catSel.innerHTML = '<option value="">All categories</option>' + cats.map((c) => `<option>${UD.esc(c)}</option>`).join("");
    const draw = (animate) => {
      const list = sortVehicles(vehicles.filter((v) => !catSel.value || v.category === catSel.value).map((v) => ({ v, d })), sortSel.value);
      grid.innerHTML = list.length
        ? list.map((x) => UD.vehicleCard(x.v, d, { showOwner: false })).join("")
        : `<div class="col-12"><div class="empty-state"><i class="bi bi-car-front"></i><p class="mb-0">${vehicles.length ? "No vehicles match this category." : "No vehicles have been added for this driver yet."}</p></div></div>`;
      UD.revealCards(grid, !animate);
    };
    catSel.addEventListener("change", () => draw(true));
    sortSel.addEventListener("change", () => draw(true));
    draw(false);

    // related drivers: next three profiles in the list
    const idx = UD.drivers.indexOf(d);
    const related = [1, 2, 3].map((k) => UD.drivers[(idx + k) % UD.drivers.length]).filter((x) => x && x !== d);
    const rel = document.getElementById("relatedDrivers");
    rel.innerHTML = related.map((x) => UD.driverCard(x)).join("");
    UD.revealCards(rel, true);
  }
})();
