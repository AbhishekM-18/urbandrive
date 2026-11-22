# UrbanDrive — driver-first vehicle and travel website

Plain HTML, CSS, Bootstrap 5, vanilla JavaScript and GSAP. No build step, no backend.

## Run it
1. Open the `UrbanDrive` folder in VS Code.
2. Install the **Live Server** extension, right-click `index.html`, choose **Open with Live Server**.
   (Double-clicking `index.html` also works, but Live Server is more reliable.)
3. You need internet once per visit: Bootstrap, icons, fonts and GSAP load from CDNs.

## What to edit
| What | File |
|---|---|
| Drivers and vehicles (names, phones, specs, photo paths) | `js/data.js` |
| Enquiry form address, business phone/WhatsApp | `js/config.js` |
| Colours and fonts | top of `css/style.css` (`:root`) |

### Add a vehicle
Open `js/data.js`, find the driver, copy one `{ ... }` vehicle block, paste it after the last vehicle in that driver's `vehicles: [ ]`, add a comma, give it a new `id` (for example `"vehicle-06"`). It shows up automatically.

### Remove a driver or vehicle
Delete its whole `{ ... }` block. No HTML changes needed.

### Photos
- Hero (optional): `assets/images/hero/hero.jpg`
- Drivers: `assets/images/drivers/driver-01.jpg` … `driver-10.jpg`
- Vehicles: `assets/images/vehicles/driver-01/vehicle-01.jpg` … `driver-10/vehicle-05.jpg`
- Extra gallery photos: list their paths in a vehicle's `gallery: [ ]`

Use JPG, about 1200 px wide, under 300 KB. Missing photos show a placeholder automatically.

### Phone numbers
Enter real numbers only, with permission. Leave `phone: ""` to show "Contact details coming soon" and keep the Call and WhatsApp buttons disabled.

## Receive enquiries (Formspree)
1. Sign up at https://formspree.io and create a form.
2. Copy the form URL (looks like `https://formspree.io/f/abcdwxyz`).
3. Paste it into `enquiryEndpoint` in `js/config.js`.
Until you do, the form shows a **demo mode** notice and sends nothing. The URL is public by design; never put passwords or secret keys in these files.

## How the pages connect
- `index.html` — home, search, drivers, services, FAQ, enquiry form
- `drivers.html` — drivers and vehicles browser (tabs, filters, sorting)
- `driver-details.html?id=driver-01` — one driver and only their vehicles
- `vehicle-details.html?driver=driver-01&vehicle=vehicle-01` — one vehicle with its driver
- `contact.html` — enquiry form (can be pre-filled from a vehicle page)

Two separate contact paths: Call/WhatsApp goes to the driver; the enquiry form goes to UrbanDrive admin.

## Needs a backend or service later
Real enquiry delivery (Formspree/EmailJS), online booking, payments, driver login, and saving edits from a web page. None of these are faked.

## Notes
- Values in `data.js` starting with "Add " are treated as placeholders and shown as "Details coming soon".
- `category` and `seats` hold sample values so you can test filters. Replace them.
- The header and footer are written by `js/main.js`, so edit them in one place.
