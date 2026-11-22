/* =====================================================================
   js/contact.js — UrbanDrive general enquiry form (goes to the ADMIN).
   Works with Formspree. Set enquiryEndpoint in js/config.js.
   Without an endpoint the form runs in DEMO MODE and sends nothing.
   ===================================================================== */
(function () {
  "use strict";
  const cfg = window.SITE_CONFIG || {};
  const TYPES = ["Vehicle enquiry", "Driver enquiry", "Pricing enquiry", "Travel booking", "General question", "Other"];

  document.addEventListener("DOMContentLoaded", () => {
    const mount = document.getElementById("enquiryMount");
    if (!mount || !window.UD) return;
    const configured = /^https:\/\/\S+$/.test(cfg.enquiryEndpoint || "");
    const field = (id, label, input, hint) => `<div class="mb-3"><label class="form-label" for="${id}">${label}</label>${input}<div class="invalid-feedback" id="err-${id}"></div>${hint ? `<div class="form-text">${hint}</div>` : ""}</div>`;

    mount.innerHTML = `<div class="enquiry-card"><div class="row g-4 g-lg-5">
      <div class="col-lg-5">
        <h2 class="section-title">Have a question? Let's help you plan your journey.</h2>
        <p class="lead-text">Tell us what you need. Your message goes to the UrbanDrive team, not to individual drivers. To reach a driver directly, open their profile and use Call or WhatsApp.</p>
        <p class="fine-print"><i class="bi bi-info-circle"></i> Sending an enquiry does not confirm a booking.</p>
      </div>
      <div class="col-lg-7"><form id="enquiryForm" novalidate>
        <div id="demoBanner" class="notice mb-3" ${configured ? "hidden" : ""}><i class="bi bi-exclamation-triangle"></i><span><strong>Demo mode.</strong> Messages are not sent yet. To receive real enquiries, add your Formspree form URL as <code>enquiryEndpoint</code> in <code>js/config.js</code>.</span></div>
        <div id="enquiryContext" class="context-chip" hidden></div>
        <div class="row g-3">
          <div class="col-md-6">${field("name", "Your name", '<input class="form-control" id="name" name="name" autocomplete="name" required>')}</div>
          <div class="col-md-6">${field("phone", "Phone number", '<input class="form-control" id="phone" name="phone" type="tel" inputmode="tel" autocomplete="tel" required>')}</div>
        </div>
        ${field("email", "Email (optional)", '<input class="form-control" id="email" name="email" type="email" autocomplete="email">')}
        ${field("type", "Enquiry type", `<select class="form-select" id="type" name="enquiryType" required><option value="">Choose a type</option>${TYPES.map((t) => `<option>${t}</option>`).join("")}</select>`)}
        ${field("message", "Your message", '<textarea class="form-control" id="message" name="message" rows="5" required></textarea>', "Include dates, pickup and drop locations, and number of passengers if you can.")}
        <input type="hidden" id="selDriver" name="selectedDriver"><input type="hidden" id="selVehicle" name="selectedVehicle">
        <div class="hp" aria-hidden="true"><label>Leave this empty<input type="text" name="_gotcha" tabindex="-1" autocomplete="off"></label></div>
        <button class="btn btn-ud btn-lg w-100" type="submit" id="enquirySubmit"><span class="btn-label">Send Enquiry</span></button>
        <div id="formStatus" class="mt-3" role="status" aria-live="polite"></div>
      </form></div></div></div>`;

    const form = document.getElementById("enquiryForm");
    const $ = (id) => document.getElementById(id);

    // Prefill when coming from a vehicle page: contact.html?driver=driver-01&vehicle=vehicle-01
    const p = UD.params(), d = UD.getDriver(p.get("driver")), v = UD.getVehicle(d, p.get("vehicle"));
    if (d) {
      $("selDriver").value = d.name;
      let ctx = "Driver: " + d.name;
      let msg = "I would like to enquire about a vehicle operated by " + d.name + ".";
      $("type").value = "Driver enquiry";
      if (v) {
        $("selVehicle").value = v.name;
        ctx += " · Vehicle: " + v.name;
        msg = "I would like to enquire about " + v.name + " operated by " + d.name + ".";
        $("type").value = "Vehicle enquiry";
      }
      $("message").value = msg + " ";
      const chip = $("enquiryContext");
      chip.hidden = false;
      chip.innerHTML = `<i class="bi bi-car-front"></i><span>${UD.esc(ctx)}</span>`;
    }

    const rules = {
      name: (x) => (x.trim().length < 2 ? "Please enter your name (at least 2 characters)." : ""),
      phone: (x) => (!x.trim() ? "Please enter your phone number." : UD.normalizePhone(x) ? "" : "Enter a valid phone number, for example 98765 43210 or +91 98765 43210."),
      email: (x) => (x.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(x.trim()) ? "Enter a valid email address, or leave this empty." : ""),
      type: (x) => (!x ? "Please choose an enquiry type." : ""),
      message: (x) => (x.trim().length < 10 ? "Please write at least 10 characters so we can help you properly." : ""),
    };
    const check = (id) => {
      const el = $(id), msg = rules[id](el.value);
      el.classList.toggle("is-invalid", !!msg);
      el.setAttribute("aria-invalid", !!msg);
      if (msg) el.setAttribute("aria-describedby", "err-" + id); else el.removeAttribute("aria-describedby");
      $("err-" + id).textContent = msg;
      return !msg;
    };
    Object.keys(rules).forEach((id) => {
      $(id).addEventListener("blur", () => check(id));
      $(id).addEventListener("input", () => $(id).classList.contains("is-invalid") && check(id));
    });

    const status = (type, icon, html) => ($("formStatus").innerHTML = `<div class="alert alert-${type} d-flex gap-2 mb-0"><i class="bi ${icon}"></i><div>${html}</div></div>`);
    const setLoading = (on) => {
      const b = $("enquirySubmit");
      b.disabled = on;
      b.innerHTML = on ? '<span class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>Sending…' : '<span class="btn-label">Send Enquiry</span>';
    };

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      $("formStatus").innerHTML = "";
      const results = Object.keys(rules).map(check);
      if (results.includes(false)) {
        const firstBad = form.querySelector(".is-invalid");
        if (firstBad) firstBad.focus();
        status("danger", "bi-exclamation-triangle", "Please fix the highlighted fields and try again.");
        return;
      }
      if (form.querySelector('[name="_gotcha"]').value) return; // spam trap

      if (!configured) {
        status("info", "bi-info-circle", "<strong>Demo mode: your message was not sent.</strong> The site owner needs to add a Formspree URL in <code>js/config.js</code> to receive enquiries.");
        return;
      }
      setLoading(true);
      const payload = {
        name: $("name").value.trim(), phone: $("phone").value.trim(), email: $("email").value.trim(),
        enquiryType: $("type").value, message: $("message").value.trim(),
        selectedDriver: $("selDriver").value, selectedVehicle: $("selVehicle").value,
        _subject: "UrbanDrive enquiry: " + $("type").value,
      };
      try {
        const res = await fetch(cfg.enquiryEndpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(payload) });
        if (res.ok) {
          status("success", "bi-check-circle", "<strong>Thank you. Your enquiry has been sent to UrbanDrive.</strong> We will get back to you using the details you gave. This is not a booking confirmation.");
          form.reset();
          $("enquiryContext").hidden = true; $("selDriver").value = ""; $("selVehicle").value = "";
        } else {
          let detail = "";
          try { const j = await res.json(); detail = j.errors ? j.errors.map((x) => x.message).join(" ") : ""; } catch (_) {}
          status("danger", "bi-x-circle", "<strong>We could not send your enquiry.</strong> " + UD.esc(detail) + " Please try again in a moment.");
        }
      } catch (err) {
        status("danger", "bi-x-circle", "<strong>We could not send your enquiry.</strong> Please check your internet connection and try again.");
      } finally { setLoading(false); }
    });
  });
})();
