/* =====================================================================
   js/config.js — site settings. Edit the values between the quotes.
   ===================================================================== */
const SITE_CONFIG = {
  businessName: "UrbanDrive",

  // ---- ENQUIRY FORM (goes to YOU, the UrbanDrive admin — not to drivers) ----
  // Simplest option: Formspree (free plan available).
  //  1. Create an account at https://formspree.io and make a new form.
  //  2. Formspree gives you a form URL like  https://formspree.io/f/abcdwxyz
  //  3. Paste that URL below. Enquiries are emailed to the address you registered there.
  // The URL is public by design, it is NOT a secret key. Never paste passwords or private keys here.
  // Leave empty to keep the form in DEMO MODE (nothing is sent).
  enquiryEndpoint: "https://formspree.io/f/myewnkdd",

  // Shown in the footer (optional). Leave "" to hide.
  adminEmail: "",

  // ---- BUSINESS CONTACT (optional) ----
  businessPhone: "",        // e.g. "9876543210"
  businessWhatsapp: "",     // a valid number turns on the floating WhatsApp button
  defaultCountryCode: "91", // added to 10-digit numbers

  // Message pre-filled when a customer opens WhatsApp with a driver
  driverWhatsappMessage: "Hello, I found your profile on UrbanDrive. I am interested in your vehicle. Could you please share more details?"
};
