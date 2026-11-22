/* =====================================================================
   js/main.js — shared helpers used on every page:
   header + footer, card builders, phone/WhatsApp links, GSAP animations.
   You normally do not need to edit this file.
   ===================================================================== */
(function () {
  "use strict";
  const UD = (window.UD = {});
  const cfg = window.SITE_CONFIG || {};
  UD.drivers = typeof drivers !== "undefined" ? drivers : [];
  UD.reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- basic helpers ---------- */
  UD.esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  // A value counts as "real" when it is filled in and does not start with the word "Add " (placeholder)
  UD.isReal = (v) => (typeof v === "string" ? v.trim() !== "" && !/(^|—\s)Add\s/.test(v.trim()) : v !== undefined && v !== null && v !== "");
  UD.list = (arr) => (Array.isArray(arr) ? arr.filter(UD.isReal) : []);
  UD.params = () => new URLSearchParams(window.location.search);
  UD.getDriver = (id) => UD.drivers.find((d) => d.id === id);
  UD.getVehicle = (d, vid) => (d && d.vehicles || []).find((v) => v.id === vid);
  UD.driverUrl = (d) => "driver-details.html?id=" + encodeURIComponent(d.id);
  UD.vehicleUrl = (d, v) => "vehicle-details.html?driver=" + encodeURIComponent(d.id) + "&vehicle=" + encodeURIComponent(v.id);
  UD.soon = '<em class="soon">Details coming soon</em>';
  UD.setMeta = (title, desc) => {
    document.title = title;
    const m = document.querySelector('meta[name="description"]');
    if (m && desc) m.setAttribute("content", desc);
  };

  /* ---------- phone + WhatsApp ---------- */
  UD.normalizePhone = (raw) => {
    if (!raw) return null;
    const s = String(raw).trim();
    let d = s.replace(/\D/g, "");
    if (!d) return null;
    const cc = cfg.defaultCountryCode || "91";
    if (!s.startsWith("+")) {
      if (d.length === 10) d = cc + d;
      else if (d.length === 11 && d[0] === "0") d = cc + d.slice(1);
    }
    return d.length >= 11 && d.length <= 15 ? d : null;
  };
  UD.callNumber = (d) => UD.normalizePhone(d && (d.phone || d.whatsapp));
  UD.waNumber = (d) => UD.normalizePhone(d && (d.whatsapp || d.phone));
  UD.waLink = (d, v) => {
    const n = UD.waNumber(d);
    if (!n) return null;
    let msg = cfg.driverWhatsappMessage || "Hello, I found your profile on UrbanDrive.";
    if (v && UD.isReal(v.name)) msg += " (Vehicle: " + v.name + ")";
    return "https://wa.me/" + n + "?text=" + encodeURIComponent(msg);
  };
  UD.contactButtons = (d, v) => {
    const call = UD.callNumber(d), wa = UD.waLink(d, v);
    const callBtn = call
      ? `<a class="btn btn-ud-outline" href="tel:+${call}"><i class="bi bi-telephone"></i> Call Driver</a>`
      : `<button class="btn btn-ud-outline" type="button" disabled aria-disabled="true"><i class="bi bi-telephone"></i> Call Driver</button>`;
    const waBtn = wa
      ? `<a class="btn btn-whatsapp" href="${wa}" target="_blank" rel="noopener"><i class="bi bi-whatsapp"></i> WhatsApp Driver</a>`
      : `<button class="btn btn-whatsapp" type="button" disabled aria-disabled="true"><i class="bi bi-whatsapp"></i> WhatsApp Driver</button>`;
    return `<div class="contact-actions">${callBtn}${waBtn}</div>` + (call || wa ? "" : '<p class="soon-note">Contact details coming soon</p>');
  };

  /* ---------- images with graceful placeholders ---------- */
  // The placeholder sits under the <img>. If the file is missing the <img> removes itself.
  UD.media = (src, alt, cls, placeholderHtml) =>
    `<div class="media ${cls}"><div class="ph">${placeholderHtml}</div>${src ? `<img src="${UD.esc(src)}" alt="${UD.esc(alt)}" loading="lazy" onerror="this.remove()">` : ""}</div>`;
  UD.driverPh = (d) => (UD.isReal(d.name) ? `<span class="initial">${UD.esc(d.name.trim().charAt(0).toUpperCase())}</span><span>Photo Coming Soon</span>` : '<i class="bi bi-person-circle"></i><span>Photo Coming Soon</span>');
  UD.vehiclePh = '<i class="bi bi-car-front-fill"></i><span>Vehicle Photo Coming Soon</span>';

  UD.specChips = (v) => {
    const c = [];
    if (UD.isReal(v.seats)) c.push(`<li><i class="bi bi-people"></i>${UD.esc(v.seats)} seats</li>`);
    if (UD.isReal(v.fuel)) c.push(`<li><i class="bi bi-fuel-pump"></i>${UD.esc(v.fuel)}</li>`);
    if (UD.isReal(v.transmission)) c.push(`<li><i class="bi bi-gear"></i>${UD.esc(v.transmission)}</li>`);
    if (UD.isReal(v.year)) c.push(`<li><i class="bi bi-calendar3"></i>${UD.esc(v.year)}</li>`);
    return c.length ? `<ul class="chips">${c.join("")}</ul>` : '<p class="soon-note m-0">Specifications coming soon</p>';
  };

  /* ---------- cards (always generated from data.js) ---------- */
  UD.driverCard = (d, o) => {
    o = o || {};
    const langs = UD.list(d.languages), areas = UD.list(d.serviceAreas);
    const n = (d.vehicles || []).length;
    const count = o.matchCount != null ? `${o.matchCount} of ${n} vehicles match` : `${n} ${n === 1 ? "vehicle" : "vehicles"}`;
    const href = UD.driverUrl(d);
    const canContact = UD.callNumber(d) || UD.waNumber(d);
    const row = (icon, label, val) => `<li><i class="bi ${icon}" aria-hidden="true"></i><span><span class="visually-hidden">${label}: </span>${val}</span></li>`;
    return `<div class="col-12 col-md-6 col-xl-4"><article class="ud-card driver-card" data-card>
      <a class="media-link" href="${href}" tabindex="-1" aria-hidden="true">${UD.media(d.photo, d.name, "media-driver", UD.driverPh(d))}</a>
      <div class="card-body-ud">
        <div class="d-flex justify-content-between align-items-start gap-2 mb-2">
          <h3 class="card-title-ud"><a href="${href}">${UD.esc(d.name)}</a></h3>
          <span class="count-pill">${count}</span>
        </div>
        <p class="card-text-ud">${UD.isReal(d.shortBio) ? UD.esc(d.shortBio) : UD.soon}</p>
        <ul class="meta-list">
          ${row("bi-briefcase", "Experience", UD.isReal(d.experience) ? UD.esc(d.experience) : UD.soon)}
          ${row("bi-translate", "Languages", langs.length ? UD.esc(langs.join(", ")) : UD.soon)}
          ${row("bi-geo-alt", "Service areas", areas.length ? UD.esc(areas.join(", ")) : UD.soon)}
        </ul>
        <div class="card-actions">
          <a class="btn btn-ud" href="${href}">Explore Vehicles <i class="bi bi-arrow-right"></i></a>
          ${canContact ? `<a class="btn btn-ud-outline" href="${href}#contact">Contact</a>` : '<button class="btn btn-ud-outline" type="button" disabled>Contact soon</button>'}
        </div>
      </div></article></div>`;
  };

  UD.vehicleCard = (v, d, o) => {
    o = o || {};
    const owner = o.showOwner === false ? "" : `<a class="owner-chip" href="${UD.driverUrl(d)}"><i class="bi bi-person-badge"></i>${UD.esc(d.name)}</a>`;
    return `<div class="col-12 col-md-6 col-xl-4"><article class="ud-card vehicle-card" data-card>
      <a class="media-link" href="${UD.vehicleUrl(d, v)}" tabindex="-1" aria-hidden="true">${UD.media(v.image, v.name, "media-vehicle", UD.vehiclePh)}</a>
      <div class="card-body-ud">
        <div class="badges">
          ${UD.isReal(v.category) ? `<span class="badge-cat">${UD.esc(v.category)}</span>` : ""}
          ${UD.isReal(v.name) ? "" : '<span class="badge-sample">Sample slot</span>'}
        </div>
        <h3 class="card-title-ud"><a href="${UD.vehicleUrl(d, v)}">${UD.esc(v.name)}</a></h3>
        ${owner}
        ${UD.specChips(v)}
        <div class="card-actions align-items-center">
          <a class="btn btn-ud" href="${UD.vehicleUrl(d, v)}">View Details</a>
          ${UD.isReal(v.price) ? `<span class="price">${UD.esc(v.price)}</span>` : ""}
        </div>
      </div></article></div>`;
  };

  UD.breadcrumb = (items) =>
    `<nav aria-label="Breadcrumb"><ol class="crumbs">${items.map((it, i) => (it.href && i < items.length - 1 ? `<li><a href="${it.href}">${UD.esc(it.label)}</a></li>` : `<li aria-current="page">${UD.esc(it.label)}</li>`)).join("")}</ol></nav>`;

  /* ---------- header + footer ---------- */
  UD.renderHeader = () => {
    const mount = document.getElementById("site-header");
    if (!mount) return;
    const page = window.location.pathname.split("/").pop() || "index.html";
    const view = UD.params().get("view");
    const items = [
      ["Home", "index.html", page === "index.html" && !view],
      ["Our Drivers", "drivers.html", (page === "drivers.html" && view !== "vehicles") || page === "driver-details.html"],
      ["Our Vehicles", "drivers.html?view=vehicles#discover", (page === "drivers.html" && view === "vehicles") || page === "vehicle-details.html"],
      ["Services", "index.html#services", false],
      ["About Us", "index.html#about", false],
      ["Contact", "contact.html", page === "contact.html"],
    ];
    mount.innerHTML = `<a class="skip-link" href="#main">Skip to content</a>
    <nav class="navbar navbar-expand-lg ud-nav" aria-label="Main navigation"><div class="container">
      <a class="navbar-brand" href="index.html" aria-label="UrbanDrive home">
        <svg width="34" height="34" viewBox="0 0 34 34" aria-hidden="true"><rect width="34" height="34" rx="11" fill="#635BFF"/><path d="M10 9v10a7 7 0 0 0 14 0V9" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/><circle cx="24" cy="25" r="3" fill="#B9E8D0"/></svg>
        <span>UrbanDrive</span></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu" aria-controls="navMenu" aria-expanded="false" aria-label="Toggle navigation"><i class="bi bi-list"></i></button>
      <div class="collapse navbar-collapse" id="navMenu">
        <ul class="navbar-nav mx-auto">${items.map((i) => `<li class="nav-item"><a class="nav-link${i[2] ? " active" : ""}" ${i[2] ? 'aria-current="page"' : ""} href="${i[1]}">${i[0]}</a></li>`).join("")}</ul>
        <a class="btn btn-ud" href="drivers.html#discover">Find a Driver</a>
      </div></div></nav>`;
    mount.querySelectorAll(".nav-link").forEach((a) =>
      a.addEventListener("click", () => {
        const el = document.getElementById("navMenu");
        if (el && el.classList.contains("show") && window.bootstrap) bootstrap.Collapse.getOrCreateInstance(el).hide();
      })
    );
  };

  UD.renderFooter = () => {
    const mount = document.getElementById("site-footer");
    if (!mount) return;
    const phone = UD.normalizePhone(cfg.businessPhone);
    mount.innerHTML = `<div class="container"><div class="row g-4">
      <div class="col-lg-5"><a class="footer-brand" href="index.html">UrbanDrive</a>
        <p class="footer-text">Find a driver, explore every vehicle they operate, and contact them directly. Contacting a driver or sending an enquiry does not confirm a booking.</p></div>
      <div class="col-6 col-lg-3"><h2 class="footer-h">Explore</h2><ul class="footer-links">
        <li><a href="drivers.html">Our Drivers</a></li><li><a href="drivers.html?view=vehicles#discover">Our Vehicles</a></li>
        <li><a href="index.html#services">Services</a></li><li><a href="index.html#faq">FAQ</a></li></ul></div>
      <div class="col-6 col-lg-4"><h2 class="footer-h">Contact UrbanDrive</h2><ul class="footer-links">
        <li><a href="contact.html">Send an enquiry</a></li>
        ${phone ? `<li><a href="tel:+${phone}">${UD.esc(cfg.businessPhone)}</a></li>` : ""}
        ${UD.isReal(cfg.adminEmail) ? `<li><a href="mailto:${UD.esc(cfg.adminEmail)}">${UD.esc(cfg.adminEmail)}</a></li>` : ""}
        ${!phone && !UD.isReal(cfg.adminEmail) ? "<li>Contact details coming soon</li>" : ""}</ul></div>
    </div><p class="footer-copy">© ${new Date().getFullYear()} UrbanDrive. All rights reserved.</p></div>`;
  };

  /* ---------- floating buttons ---------- */
  UD.floatingButtons = () => {
    const wrap = document.createElement("div");
    wrap.className = "floating";
    const wa = UD.normalizePhone(cfg.businessWhatsapp);
    wrap.innerHTML =
      (wa ? `<a class="float-btn float-wa" href="https://wa.me/${wa}" target="_blank" rel="noopener" aria-label="Chat with UrbanDrive on WhatsApp"><i class="bi bi-whatsapp"></i></a>` : "") +
      '<button class="float-btn float-top" type="button" aria-label="Scroll to top"><i class="bi bi-arrow-up"></i></button>';
    document.body.appendChild(wrap);
    const top = wrap.querySelector(".float-top");
    top.addEventListener("click", () => window.scrollTo({ top: 0, behavior: UD.reduceMotion ? "auto" : "smooth" }));
    const onScroll = () => {
      top.classList.toggle("show", window.scrollY > 600);
      const nav = document.querySelector(".ud-nav");
      if (nav) nav.classList.toggle("scrolled", window.scrollY > 24);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  };

  /* ---------- animations (GSAP). Content is always visible if GSAP fails. ---------- */
  const canAnimate = () => !UD.reduceMotion && window.gsap;
  if (window.gsap && window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

  UD.revealCards = (container, scroll) => {
    if (!container || !canAnimate()) return;
    const els = container.querySelectorAll("[data-card]");
    if (!els.length) return;
    try {
      if (container._st) container._st.forEach((t) => t.kill());
      if (scroll && window.ScrollTrigger) {
        gsap.set(els, { autoAlpha: 0, y: 28 });
        container._st = ScrollTrigger.batch(els, {
          start: "top 92%", once: true,
          onEnter: (b) => gsap.to(b, { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.08, ease: "power2.out", overwrite: true, clearProps: "opacity,visibility,transform" }),
        });
      } else {
        gsap.from(els, { autoAlpha: 0, y: 16, duration: 0.4, stagger: 0.04, ease: "power2.out", clearProps: "all" });
      }
    } catch (e) { gsap.set(els, { clearProps: "all" }); }
  };

  UD.initReveals = () => {
    const els = document.querySelectorAll("[data-reveal]");
    if (!els.length || !canAnimate() || !window.ScrollTrigger) return;
    try {
      gsap.set(els, { autoAlpha: 0, y: 24 });
      ScrollTrigger.batch(els, {
        start: "top 90%", once: true,
        onEnter: (b) => gsap.to(b, { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out", overwrite: true, clearProps: "opacity,visibility,transform" }),
      });
    } catch (e) { gsap.set(els, { clearProps: "all" }); }
  };

  UD.heroIntro = () => {
    const hero = document.querySelector(".hero");
    if (!hero || !canAnimate()) return;
    try {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-visual", { clipPath: "inset(0 0 100% 0 round 32px)", duration: 1.1, clearProps: "clipPath" }, 0)
        .from(".hero-anim", { autoAlpha: 0, y: 26, duration: 0.7, stagger: 0.12, clearProps: "all" }, 0.15)
        .from(".hero-route", { autoAlpha: 0, y: 20, duration: 0.7, clearProps: "all" }, 0.8);
    } catch (e) { gsap.set(".hero-visual, .hero-anim, .hero-route", { clearProps: "all" }); }
  };

  // Counters: only real numbers taken from data.js
  UD.counters = () => {
    const nDrivers = UD.drivers.length;
    const nVehicles = UD.drivers.reduce((s, d) => s + (d.vehicles || []).length, 0);
    document.querySelectorAll("[data-count]").forEach((el) => {
      const target = el.dataset.count === "drivers" ? nDrivers : nVehicles;
      el.textContent = target;
      if (!canAnimate()) return;
      const o = { n: 0 };
      gsap.to(o, { n: target, duration: 1.2, ease: "power1.out", onUpdate: () => (el.textContent = Math.round(o.n)), onComplete: () => (el.textContent = target) });
    });
  };

  document.addEventListener("DOMContentLoaded", () => {
    UD.renderHeader();
    UD.renderFooter();
    UD.floatingButtons();
    UD.counters();
    UD.heroIntro();
    UD.initReveals();
  });
})();
