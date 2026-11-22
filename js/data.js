/* =====================================================================
   js/data.js  —  THE ONLY FILE YOU NEED TO EDIT FOR DRIVERS AND VEHICLES
   =====================================================================
   HOW TO EDIT
   1. Change a driver: edit name, shortBio, experience, languages, serviceAreas,
      phone, whatsapp, email, photo.
   2. Change a vehicle: edit the object inside that driver's  vehicles: [ ... ]  list.
   3. ADD a vehicle: copy one vehicle block { ... }, paste it after the last one
      in the same driver's list, add a comma, and give it a new id ("vehicle-06").
   4. REMOVE a vehicle or driver: delete its whole { ... } block (and its comma).
   5. Leave a field as "" (or [] for lists) if you do not know it. The website then
      shows "Details coming soon" or hides the field. Never type fake data.

   PHONE NUMBERS
   - Write the number with or without +91, e.g. "9876543210" or "+91 98765 43210".
   - Leave phone "" until you have the driver's permission to show it publicly.
   - whatsapp can be left "" — then the phone number is used for WhatsApp too.

   IMAGES (put the files in these exact places)
   - Driver photo:      assets/images/drivers/driver-01.jpg
   - Vehicle photo:     assets/images/vehicles/driver-01/vehicle-01.jpg
   - Extra gallery:     add paths to gallery: ["assets/images/vehicles/driver-01/vehicle-01-2.jpg"]
   If a photo file is missing, a clean placeholder is shown (never a broken icon).

   SAMPLE VALUES
   - category and seats are pre-filled with SAMPLE values so you can test the
     search and filters. Replace them with the real vehicle details.
   - Any text starting with "Add " is treated as a placeholder and is shown as
     "Details coming soon" on the website.
   ===================================================================== */

const drivers = [

  /* ---------------------------- DRIVER 01 ---------------------------- */
  {
    id: "driver-01",                                   // keep unique, do not change after sharing links
    name: "Amrut Mathapati",               // EDIT: driver's full name
    photo: "assets/images/drivers/driver-01.jpg",      // EDIT: put the photo at this path
    shortBio: "Add driver introduction",                // EDIT: 1–2 sentences about the driver
    experience: "5 Years",                       // EDIT: e.g. "8 years of driving experience"
    languages: ["Kannada,Hindi "],                        // EDIT: e.g. ["Kannada", "Hindi", "English"]
    serviceAreas: ["Anywhere"],                 // EDIT: e.g. ["Hubballi", "Dharwad"]
    phone: "7411241589",                                          // EDIT: real number only, e.g. "9876543210"
    whatsapp: "7411241589",                                       // EDIT: optional, falls back to phone
    email: "",                                          // optional
    availabilityStatus: "available",                             // only if you know it, e.g. "Available on weekends"

    vehicles: [
      // ---- ADD MORE VEHICLES BELOW (copy a block, paste after the last one, add a comma) ----
      {
        id: "vehicle-01",                              // unique inside this driver
        name: "Tourist Bus",
        image: "assets/images/vehicles/driver-01/vehicle-01.jpg",
        gallery: ["assets/images/vehicles/driver-01/vehicle-010.jpg","assets/images/vehicles/driver-01/vehicle-011.jpg"],                                    // optional extra photo paths
        brand: "Add brand", model: "Add model", year: "",
        category: "Bus", seats: 30,                  // SAMPLE values — replace
        luggage: "", fuel: "", transmission: "", airConditioning: "",
        price: "",                                      // only add if the real rate is confirmed
        availability: "",                               // only if known
        description: "Add vehicle description",
        features: ["Music System"]                                    // e.g. ["Music system", "USB charging"]
      },
      {
        id: "vehicle-02",                              // unique inside this driver
        name: "Cruiser",
        image: "assets/images/vehicles/driver-01/vehicle-02.jpg",
        gallery: ["assets/images/vehicles/driver-01/vehicle-020.jpg","assets/images/vehicles/driver-01/vehicle-021.jpg","assets/images/vehicles/driver-01/vehicle-022.jpg","assets/images/vehicles/driver-01/vehicle-023.jpg"],                                    // optional extra photo paths
        brand: "Add brand", model: "Add model", year: "",
        category: "Sedan", seats: 10,                  // SAMPLE values — replace
        luggage: "", fuel: "", transmission: "", airConditioning: "",
        price: "",                                      // only add if the real rate is confirmed
        availability: "",                               // only if known
        description: "Add vehicle description",
        features: []                                    // e.g. ["Music system", "USB charging"]
      },
      /*{
        id: "vehicle-03",                              // unique inside this driver
        name: "Add Vehicle Name",
        image: "assets/images/vehicles/driver-01/vehicle-03.jpg",
        gallery: [],                                    // optional extra photo paths
        brand: "Add brand", model: "Add model", year: "",
        category: "SUV", seats: 6,                  // SAMPLE values — replace
        luggage: "", fuel: "", transmission: "", airConditioning: "",
        price: "",                                      // only add if the real rate is confirmed
        availability: "",                               // only if known
        description: "Add vehicle description",
        features: []                                    // e.g. ["Music system", "USB charging"]
      },
      {
        id: "vehicle-04",                              // unique inside this driver
        name: "Add Vehicle Name",
        image: "assets/images/vehicles/driver-01/vehicle-04.jpg",
        gallery: [],                                    // optional extra photo paths
        brand: "Add brand", model: "Add model", year: "",
        category: "MUV", seats: 7,                  // SAMPLE values — replace
        luggage: "", fuel: "", transmission: "", airConditioning: "",
        price: "",                                      // only add if the real rate is confirmed
        availability: "",                               // only if known
        description: "Add vehicle description",
        features: []                                    // e.g. ["Music system", "USB charging"]
      },
      {
        id: "vehicle-05",                              // unique inside this driver
        name: "Add Vehicle Name",
        image: "assets/images/vehicles/driver-01/vehicle-05.jpg",
        gallery: [],                                    // optional extra photo paths
        brand: "Add brand", model: "Add model", year: "",
        category: "Tempo Traveller", seats: 12,                  // SAMPLE values — replace
        luggage: "", fuel: "", transmission: "", airConditioning: "",
        price: "",                                      // only add if the real rate is confirmed
        availability: "",                               // only if known
        description: "Add vehicle description",
        features: []                                    // e.g. ["Music system", "USB charging"]
      },*/
    ]
  },

  /* ---------------------------- DRIVER 02 ---------------------------- */
  {
    id: "driver-02",                                   // keep unique, do not change after sharing links
    name: "Kiran Menasinkai",               // EDIT: driver's full name
    photo: "assets/images/drivers/Driver-02.jpg",      // EDIT: put the photo at this path
    shortBio: "Add driver introduction",                // EDIT: 1–2 sentences about the driver
    experience: "10",                       // EDIT: e.g. "8 years of driving experience"
    languages: ["kannada","Hindi"],                        // EDIT: e.g. ["Kannada", "Hindi", "English"]
    serviceAreas: ["Anywhere"],                 // EDIT: e.g. ["Hubballi", "Dharwad"]
    phone: "8296755572",                                          // EDIT: real number only, e.g. "9876543210"
    whatsapp: "9742488119",                                       // EDIT: optional, falls back to phone
    email: "",                                          // optional
    availabilityStatus: "Available",                             // only if you know it, e.g. "Available on weekends"

    vehicles: [
      // ---- ADD MORE VEHICLES BELOW (copy a block, paste after the last one, add a comma) ----
      {
        id: "vehicle-01",                              // unique inside this driver
        name: "Innova-Crysta",
        image: "assets/images/vehicles/driver-02/vehicle-01.jpg",
        gallery: ["assets/images/vehicles/driver-02/vehicle-010.jpg","assets/images/vehicles/driver-02/vehicle-011.jpg","assets/images/vehicles/driver-02/vehicle-012.jpg"],                                    // optional extra photo paths
        brand: "Toyota", model: "Innova", year: "2023",
        category: "MPV", seats: 7,                  // SAMPLE values — replace
        luggage: "4", fuel: "Deisel", transmission: "", airConditioning: "Yes",
        price: "",                                      // only add if the real rate is confirmed
        availability: "Available",                               // only if known
        description: "Add vehicle description",
        features: ["Music System","USB Charging"]                                    // e.g. ["Music system", "USB charging"]
      },
      {
        id: "vehicle-02",                              // unique inside this driver
        name: "Toyota-Etios",
        image: "assets/images/vehicles/driver-02/vehicle-02.jpg",
        gallery: ["assets/images/vehicles/driver-02/vehicle-020.jpg","assets/images/vehicles/driver-02/vehicle-021.jpg","assets/images/vehicles/driver-02/vehicle-022.jpg"],                                    // optional extra photo paths
        brand: "Toyota", model: "Add model", year: "",
        category: "SUV", seats: 5,                  // SAMPLE values — replace
        luggage: "", fuel: "Deisel", transmission: "", airConditioning: "Yes",
        price: "",                                      // only add if the real rate is confirmed
        availability: "Yes",                               // only if known
        description: "Add vehicle description",
        features: []                                    // e.g. ["Music system", "USB charging"]
      },
      {
        id: "vehicle-03",                              // unique inside this driver
        name: "Force-Traveller",
        image: "assets/images/vehicles/driver-02/vehicle-03.jpg",
        gallery: ["assets/images/vehicles/driver-02/vehicle-030.jpg","assets/images/vehicles/driver-02/vehicle-031.jpg"],                                    // optional extra photo paths
        brand: "Add brand", model: "Add model", year: "",
        category: "Tourist-Vehicle", seats: 15,                  // SAMPLE values — replace
        luggage: "", fuel: "", transmission: "", airConditioning: "",
        price: "",                                      // only add if the real rate is confirmed
        availability: "",                               // only if known
        description: "Add vehicle description",
        features: []                                    // e.g. ["Music system", "USB charging"]
      },
      /*{
        id: "vehicle-04",                              // unique inside this driver
        name: "Add Vehicle Name",
        image: "assets/images/vehicles/driver-02/vehicle-04.jpg",
        gallery: [],                                    // optional extra photo paths
        brand: "Add brand", model: "Add model", year: "",
        category: "Tempo Traveller", seats: 12,                  // SAMPLE values — replace
        luggage: "", fuel: "", transmission: "", airConditioning: "",
        price: "",                                      // only add if the real rate is confirmed
        availability: "",                               // only if known
        description: "Add vehicle description",
        features: []                                    // e.g. ["Music system", "USB charging"]
      },
      {
        id: "vehicle-05",                              // unique inside this driver
        name: "Add Vehicle Name",
        image: "assets/images/vehicles/driver-02/vehicle-05.jpg",
        gallery: [],                                    // optional extra photo paths
        brand: "Add brand", model: "Add model", year: "",
        category: "Hatchback", seats: 4,                  // SAMPLE values — replace
        luggage: "", fuel: "", transmission: "", airConditioning: "",
        price: "",                                      // only add if the real rate is confirmed
        availability: "",                               // only if known
        description: "Add vehicle description",
        features: []                                    // e.g. ["Music system", "USB charging"]
      },*/
    ]
  },

  /* ---------------------------- DRIVER 03 ---------------------------- */
  {
    id: "driver-03",                                   // keep unique, do not change after sharing links
    name: "Krishna M Gollar",               // EDIT: driver's full name
    photo: "assets/images/drivers/driver-03.jpg",      // EDIT: put the photo at this path
    shortBio: "Add driver introduction",                // EDIT: 1–2 sentences about the driver
    experience: "6",                       // EDIT: e.g. "8 years of driving experience"
    languages: ["Kannada"],                        // EDIT: e.g. ["Kannada", "Hindi", "English"]
    serviceAreas: ["Anywhere"],                 // EDIT: e.g. ["Hubballi", "Dharwad"]
    phone: "7975742340",                                          // EDIT: real number only, e.g. "9876543210"
    whatsapp: "7975742340",                                       // EDIT: optional, falls back to phone
    email: "",                                          // optional
    availabilityStatus: "Available",                             // only if you know it, e.g. "Available on weekends"

    vehicles: [
      // ---- ADD MORE VEHICLES BELOW (copy a block, paste after the last one, add a comma) ----
      {
        id: "vehicle-01",                              // unique inside this driver
        name: "Force-Traveller",
        image: "assets/images/vehicles/driver-03/vehicle-01.jpg",
        gallery: ["assets/images/vehicles/driver-03/vehicle-010.jpg","assets/images/vehicles/driver-03/vehicle-011.jpg","assets/images/vehicles/driver-03/vehicle-012.jpg","assets/images/vehicles/driver-03/vehicle-013.jpg"],                                    // optional extra photo paths
        brand: "Add brand", model: "Add model", year: "",
        category: "SUV", seats: 6,                  // SAMPLE values — replace
        luggage: "", fuel: "", transmission: "", airConditioning: "",
        price: "",                                      // only add if the real rate is confirmed
        availability: "",                               // only if known
        description: "Add vehicle description",
        features: []                                    // e.g. ["Music system", "USB charging"]
      },
      /*{
        id: "vehicle-02",                              // unique inside this driver
        name: "Add Vehicle Name",
        image: "assets/images/vehicles/driver-03/vehicle-02.jpg",
        gallery: [],                                    // optional extra photo paths
        brand: "Add brand", model: "Add model", year: "",
        category: "MUV", seats: 7,                  // SAMPLE values — replace
        luggage: "", fuel: "", transmission: "", airConditioning: "",
        price: "",                                      // only add if the real rate is confirmed
        availability: "",                               // only if known
        description: "Add vehicle description",
        features: []                                    // e.g. ["Music system", "USB charging"]
      },
      {
        id: "vehicle-03",                              // unique inside this driver
        name: "Add Vehicle Name",
        image: "assets/images/vehicles/driver-03/vehicle-03.jpg",
        gallery: [],                                    // optional extra photo paths
        brand: "Add brand", model: "Add model", year: "",
        category: "Tempo Traveller", seats: 12,                  // SAMPLE values — replace
        luggage: "", fuel: "", transmission: "", airConditioning: "",
        price: "",                                      // only add if the real rate is confirmed
        availability: "",                               // only if known
        description: "Add vehicle description",
        features: []                                    // e.g. ["Music system", "USB charging"]
      },
      {
        id: "vehicle-04",                              // unique inside this driver
        name: "Add Vehicle Name",
        image: "assets/images/vehicles/driver-03/vehicle-04.jpg",
        gallery: [],                                    // optional extra photo paths
        brand: "Add brand", model: "Add model", year: "",
        category: "Hatchback", seats: 4,                  // SAMPLE values — replace
        luggage: "", fuel: "", transmission: "", airConditioning: "",
        price: "",                                      // only add if the real rate is confirmed
        availability: "",                               // only if known
        description: "Add vehicle description",
        features: []                                    // e.g. ["Music system", "USB charging"]
      },
      {
        id: "vehicle-05",                              // unique inside this driver
        name: "Add Vehicle Name",
        image: "assets/images/vehicles/driver-03/vehicle-05.jpg",
        gallery: [],                                    // optional extra photo paths
        brand: "Add brand", model: "Add model", year: "",
        category: "Sedan", seats: 4,                  // SAMPLE values — replace
        luggage: "", fuel: "", transmission: "", airConditioning: "",
        price: "",                                      // only add if the real rate is confirmed
        availability: "",                               // only if known
        description: "Add vehicle description",
        features: []                                    // e.g. ["Music system", "USB charging"]
      },*/
    ]
  },

  /* ---------------------------- DRIVER 04 ---------------------------- */
  {
    id: "driver-04",                                   // keep unique, do not change after sharing links
    name: "Manjunath ",               // EDIT: driver's full name
    photo: "assets/images/drivers/driver-04.jpg",      // EDIT: put the photo at this path
    shortBio: "Add driver introduction",                // EDIT: 1–2 sentences about the driver
    experience: "5",                       // EDIT: e.g. "8 years of driving experience"
    languages: ["Kannada","Hindi"],                        // EDIT: e.g. ["Kannada", "Hindi", "English"]
    serviceAreas: ["Anywhere"],                 // EDIT: e.g. ["Hubballi", "Dharwad"]
    phone: "9743384151",                                   // EDIT: real number only, e.g. "9876543210"
    whatsapp: "9743384151",                                       // EDIT: optional, falls back to phone
    email: "",                                          // optional
    availabilityStatus: "Available",                             // only if you know it, e.g. "Available on weekends"

    vehicles: [
      // ---- ADD MORE VEHICLES BELOW (copy a block, paste after the last one, add a comma) ----
      {
        id: "vehicle-01",                              // unique inside this driver
        name: "Toyota-Etios",
        image: "assets/images/vehicles/driver-04/vehicle-01.jpg",
        gallery: ["assets/images/vehicles/driver-04/vehicle-010.jpg","assets/images/vehicles/driver-04/vehicle-011.jpg","assets/images/vehicles/driver-04/vehicle-012.jpg"],                                    // optional extra photo paths
        brand: "Add brand", model: "Add model", year: "",
        category: "Sedan", seats: 5,                  // SAMPLE values — replace
        luggage: "--", fuel: "Deisel", transmission: "", airConditioning: "Available",
        price: "",                                      // only add if the real rate is confirmed
        availability: "Available",                               // only if known
        description: "Add vehicle description",
        features: ["music System","USB-Charging"]                                  // e.g. ["Music system", "USB charging"]
      },
      /*{
        id: "vehicle-02",                              // unique inside this driver
        name: "Add Vehicle Name",
        image: "assets/images/vehicles/driver-04/vehicle-02.jpg",
        gallery: [],                                    // optional extra photo paths
        brand: "Add brand", model: "Add model", year: "",
        category: "Tempo Traveller", seats: 12,                  // SAMPLE values — replace
        luggage: "", fuel: "", transmission: "", airConditioning: "",
        price: "",                                      // only add if the real rate is confirmed
        availability: "",                               // only if known
        description: "Add vehicle description",
        features: []                                    // e.g. ["Music system", "USB charging"]
      },
      {
        id: "vehicle-03",                              // unique inside this driver
        name: "Add Vehicle Name",
        image: "assets/images/vehicles/driver-04/vehicle-03.jpg",
        gallery: [],                                    // optional extra photo paths
        brand: "Add brand", model: "Add model", year: "",
        category: "Hatchback", seats: 4,                  // SAMPLE values — replace
        luggage: "", fuel: "", transmission: "", airConditioning: "",
        price: "",                                      // only add if the real rate is confirmed
        availability: "",                               // only if known
        description: "Add vehicle description",
        features: []                                    // e.g. ["Music system", "USB charging"]
      },
      {
        id: "vehicle-04",                              // unique inside this driver
        name: "Add Vehicle Name",
        image: "assets/images/vehicles/driver-04/vehicle-04.jpg",
        gallery: [],                                    // optional extra photo paths
        brand: "Add brand", model: "Add model", year: "",
        category: "Sedan", seats: 4,                  // SAMPLE values — replace
        luggage: "", fuel: "", transmission: "", airConditioning: "",
        price: "",                                      // only add if the real rate is confirmed
        availability: "",                               // only if known
        description: "Add vehicle description",
        features: []                                    // e.g. ["Music system", "USB charging"]
      },
      {
        id: "vehicle-05",                              // unique inside this driver
        name: "Add Vehicle Name",
        image: "assets/images/vehicles/driver-04/vehicle-05.jpg",
        gallery: [],                                    // optional extra photo paths
        brand: "Add brand", model: "Add model", year: "",
        category: "SUV", seats: 6,                  // SAMPLE values — replace
        luggage: "", fuel: "", transmission: "", airConditioning: "",
        price: "",                                      // only add if the real rate is confirmed
        availability: "",                               // only if known
        description: "Add vehicle description",
        features: []                                    // e.g. ["Music system", "USB charging"]
      },*/
    ]
  },

  /* ---------------------------- DRIVER 05 ---------------------------- */
  {
    id: "driver-05",                                   // keep unique, do not change after sharing links
    name: "Sannappa ",               // EDIT: driver's full name
    photo: "assets/images/drivers/driver-05.jpg",      // EDIT: put the photo at this path
    shortBio: "Add driver introduction",                // EDIT: 1–2 sentences about the driver
    experience: "5",                       // EDIT: e.g. "8 years of driving experience"
    languages: ["Kannada"],                        // EDIT: e.g. ["Kannada", "Hindi", "English"]
    serviceAreas: ["Anywhere"],                 // EDIT: e.g. ["Hubballi", "Dharwad"]
    phone: "9148251883",                                          // EDIT: real number only, e.g. "9876543210"
    whatsapp: "9148251883",                                       // EDIT: optional, falls back to phone
    email: "",                                          // optional
    availabilityStatus: "Available",                             // only if you know it, e.g. "Available on weekends"

    vehicles: [
      // ---- ADD MORE VEHICLES BELOW (copy a block, paste after the last one, add a comma) ----
      {
        id: "vehicle-01",                              // unique inside this driver
        name: "Hundai",
        image: "assets/images/vehicles/driver-05/vehicle-01.jpg",
        gallery: ["assets/images/vehicles/driver-05/vehicle-010.jpg","assets/images/vehicles/driver-05/vehicle-011.jpg"],                                    // optional extra photo paths
        brand: "Add brand", model: "Add model", year: "",
        category: "Sedan", seats: 5,                  // SAMPLE values — replace
        luggage: "", fuel: "", transmission: "", airConditioning: "",
        price: "",                                      // only add if the real rate is confirmed
        availability: "",                               // only if known
        description: "Add vehicle description",
        features: []                                    // e.g. ["Music system", "USB charging"]
      },
      /*{
        id: "vehicle-02",                              // unique inside this driver
        name: "Add Vehicle Name",
        image: "assets/images/vehicles/driver-05/vehicle-02.jpg",
        gallery: [],                                    // optional extra photo paths
        brand: "Add brand", model: "Add model", year: "",
        category: "Hatchback", seats: 4,                  // SAMPLE values — replace
        luggage: "", fuel: "", transmission: "", airConditioning: "",
        price: "",                                      // only add if the real rate is confirmed
        availability: "",                               // only if known
        description: "Add vehicle description",
        features: []                                    // e.g. ["Music system", "USB charging"]
      },
      {
        id: "vehicle-03",                              // unique inside this driver
        name: "Add Vehicle Name",
        image: "assets/images/vehicles/driver-05/vehicle-03.jpg",
        gallery: [],                                    // optional extra photo paths
        brand: "Add brand", model: "Add model", year: "",
        category: "Sedan", seats: 4,                  // SAMPLE values — replace
        luggage: "", fuel: "", transmission: "", airConditioning: "",
        price: "",                                      // only add if the real rate is confirmed
        availability: "",                               // only if known
        description: "Add vehicle description",
        features: []                                    // e.g. ["Music system", "USB charging"]
      },
      {
        id: "vehicle-04",                              // unique inside this driver
        name: "Add Vehicle Name",
        image: "assets/images/vehicles/driver-05/vehicle-04.jpg",
        gallery: [],                                    // optional extra photo paths
        brand: "Add brand", model: "Add model", year: "",
        category: "SUV", seats: 6,                  // SAMPLE values — replace
        luggage: "", fuel: "", transmission: "", airConditioning: "",
        price: "",                                      // only add if the real rate is confirmed
        availability: "",                               // only if known
        description: "Add vehicle description",
        features: []                                    // e.g. ["Music system", "USB charging"]
      },
      {
        id: "vehicle-05",                              // unique inside this driver
        name: "Add Vehicle Name",
        image: "assets/images/vehicles/driver-05/vehicle-05.jpg",
        gallery: [],                                    // optional extra photo paths
        brand: "Add brand", model: "Add model", year: "",
        category: "MUV", seats: 7,                  // SAMPLE values — replace
        luggage: "", fuel: "", transmission: "", airConditioning: "",
        price: "",                                      // only add if the real rate is confirmed
        availability: "",                               // only if known
        description: "Add vehicle description",
        features: []                                    // e.g. ["Music system", "USB charging"]
      },*/
    ]
  },

  /* ---------------------------- DRIVER 06 ---------------------------- */
  {
    id: "driver-06",                                   // keep unique, do not change after sharing links
    name: "Malatesh ",               // EDIT: driver's full name
    photo: "assets/images/drivers/driver-06.jpg",      // EDIT: put the photo at this path
    shortBio: "Add driver introduction",                // EDIT: 1–2 sentences about the driver
    experience: "4",                       // EDIT: e.g. "8 years of driving experience"
    languages: ["Kannada"],                        // EDIT: e.g. ["Kannada", "Hindi", "English"]
    serviceAreas: ["Flexible"],                 // EDIT: e.g. ["Hubballi", "Dharwad"]
    phone: "8050973863",                                          // EDIT: real number only, e.g. "9876543210"
    whatsapp: "8050973863",                                       // EDIT: optional, falls back to phone
    email: "",                                          // optional
    availabilityStatus: "",                             // only if you know it, e.g. "Available on weekends"

    vehicles: [
      // ---- ADD MORE VEHICLES BELOW (copy a block, paste after the last one, add a comma) ----
      {
        id: "vehicle-01",                              // unique inside this driver
        name: "Swift-Dzire",
        image: "assets/images/vehicles/driver-06/vehicle-01.jpg",
        gallery: ["assets/images/vehicles/driver-06/vehicle-010.jpg","assets/images/vehicles/driver-06/vehicle-011.jpg","assets/images/vehicles/driver-06/vehicle-013.jpg"],                                    // optional extra photo paths
        brand: "Maruti-Suzuki", model: "Add model", year: "2025",
        category: "Sedan", seats: 5,                  // SAMPLE values — replace
        luggage: "", fuel: "Petrol", transmission: "", airConditioning: "Yes",
        price: "",                                      // only add if the real rate is confirmed
        availability: "--",                               // only if known
        description: "Add vehicle description",
        features: []                                    // e.g. ["Music system", "USB charging"]
      },
      /*{
        id: "vehicle-02",                              // unique inside this driver
        name: "Add Vehicle Name",
        image: "assets/images/vehicles/driver-06/vehicle-02.jpg",
        gallery: [],                                    // optional extra photo paths
        brand: "Add brand", model: "Add model", year: "",
        category: "Sedan", seats: 4,                  // SAMPLE values — replace
        luggage: "", fuel: "", transmission: "", airConditioning: "",
        price: "",                                      // only add if the real rate is confirmed
        availability: "",                               // only if known
        description: "Add vehicle description",
        features: []                                    // e.g. ["Music system", "USB charging"]
      },
      {
        id: "vehicle-03",                              // unique inside this driver
        name: "Add Vehicle Name",
        image: "assets/images/vehicles/driver-06/vehicle-03.jpg",
        gallery: [],                                    // optional extra photo paths
        brand: "Add brand", model: "Add model", year: "",
        category: "SUV", seats: 6,                  // SAMPLE values — replace
        luggage: "", fuel: "", transmission: "", airConditioning: "",
        price: "",                                      // only add if the real rate is confirmed
        availability: "",                               // only if known
        description: "Add vehicle description",
        features: []                                    // e.g. ["Music system", "USB charging"]
      },
      {
        id: "vehicle-04",                              // unique inside this driver
        name: "Add Vehicle Name",
        image: "assets/images/vehicles/driver-06/vehicle-04.jpg",
        gallery: [],                                    // optional extra photo paths
        brand: "Add brand", model: "Add model", year: "",
        category: "MUV", seats: 7,                  // SAMPLE values — replace
        luggage: "", fuel: "", transmission: "", airConditioning: "",
        price: "",                                      // only add if the real rate is confirmed
        availability: "",                               // only if known
        description: "Add vehicle description",
        features: []                                    // e.g. ["Music system", "USB charging"]
      },
      {
        id: "vehicle-05",                              // unique inside this driver
        name: "Add Vehicle Name",
        image: "assets/images/vehicles/driver-06/vehicle-05.jpg",
        gallery: [],                                    // optional extra photo paths
        brand: "Add brand", model: "Add model", year: "",
        category: "Tempo Traveller", seats: 12,                  // SAMPLE values — replace
        luggage: "", fuel: "", transmission: "", airConditioning: "",
        price: "",                                      // only add if the real rate is confirmed
        availability: "",                               // only if known
        description: "Add vehicle description",
        features: []                                    // e.g. ["Music system", "USB charging"]
      },*/
    ]
  },

  /* ---------------------------- DRIVER 07 ---------------------------- */
  {
    id: "driver-07",                                   // keep unique, do not change after sharing links
    name: "Sagar Hosamani",               // EDIT: driver's full name
    photo: "assets/images/drivers/driver-07.jpg",      // EDIT: put the photo at this path
    shortBio: "Add driver introduction",                // EDIT: 1–2 sentences about the driver
    experience: "3",                       // EDIT: e.g. "8 years of driving experience"
    languages: ["Kannada","Hindi"],                        // EDIT: e.g. ["Kannada", "Hindi", "English"]
    serviceAreas: ["Flexible"],                 // EDIT: e.g. ["Hubballi", "Dharwad"]
    phone: "8722773931",                                          // EDIT: real number only, e.g. "9876543210"
    whatsapp: "8722773931",                                       // EDIT: optional, falls back to phone
    email: "---",                                          // optional
    availabilityStatus: "---",                             // only if you know it, e.g. "Available on weekends"

    vehicles: [
      // ---- ADD MORE VEHICLES BELOW (copy a block, paste after the last one, add a comma) ----
      {
        id: "vehicle-01",                              // unique inside this driver
        name: "Sedan-Aura",
        image: "assets/images/vehicles/driver-07/vehicle-01.jpg",
        gallery: ["assets/images/vehicles/driver-07/vehicle-010.jpg","assets/images/vehicles/driver-07/vehicle-011.jpg","assets/images/vehicles/driver-07/vehicle-012.jpg","assets/images/vehicles/driver-07/vehicle-013.jpg"],                                    // optional extra photo paths
        brand: "Add brand", model: "Add model", year: "",
        category: "Sedan", seats: 4,                  // SAMPLE values — replace
        luggage: "", fuel: "", transmission: "", airConditioning: "",
        price: "",                                      // only add if the real rate is confirmed
        availability: "",                               // only if known
        description: "Add vehicle description",
        features: []                                    // e.g. ["Music system", "USB charging"]
      },
      /*{
        id: "vehicle-02",                              // unique inside this driver
        name: "Add Vehicle Name",
        image: "assets/images/vehicles/driver-07/vehicle-02.jpg",
        gallery: [],                                    // optional extra photo paths
        brand: "Add brand", model: "Add model", year: "",
        category: "SUV", seats: 6,                  // SAMPLE values — replace
        luggage: "", fuel: "", transmission: "", airConditioning: "",
        price: "",                                      // only add if the real rate is confirmed
        availability: "",                               // only if known
        description: "Add vehicle description",
        features: []                                    // e.g. ["Music system", "USB charging"]
      },
      {
        id: "vehicle-03",                              // unique inside this driver
        name: "Add Vehicle Name",
        image: "assets/images/vehicles/driver-07/vehicle-03.jpg",
        gallery: [],                                    // optional extra photo paths
        brand: "Add brand", model: "Add model", year: "",
        category: "MUV", seats: 7,                  // SAMPLE values — replace
        luggage: "", fuel: "", transmission: "", airConditioning: "",
        price: "",                                      // only add if the real rate is confirmed
        availability: "",                               // only if known
        description: "Add vehicle description",
        features: []                                    // e.g. ["Music system", "USB charging"]
      },
      {
        id: "vehicle-04",                              // unique inside this driver
        name: "Add Vehicle Name",
        image: "assets/images/vehicles/driver-07/vehicle-04.jpg",
        gallery: [],                                    // optional extra photo paths
        brand: "Add brand", model: "Add model", year: "",
        category: "Tempo Traveller", seats: 12,                  // SAMPLE values — replace
        luggage: "", fuel: "", transmission: "", airConditioning: "",
        price: "",                                      // only add if the real rate is confirmed
        availability: "",                               // only if known
        description: "Add vehicle description",
        features: []                                    // e.g. ["Music system", "USB charging"]
      },
      {
        id: "vehicle-05",                              // unique inside this driver
        name: "Add Vehicle Name",
        image: "assets/images/vehicles/driver-07/vehicle-05.jpg",
        gallery: [],                                    // optional extra photo paths
        brand: "Add brand", model: "Add model", year: "",
        category: "Hatchback", seats: 4,                  // SAMPLE values — replace
        luggage: "", fuel: "", transmission: "", airConditioning: "",
        price: "",                                      // only add if the real rate is confirmed
        availability: "",                               // only if known
        description: "Add vehicle description",
        features: []                                    // e.g. ["Music system", "USB charging"]
      },*/
    ]
  },

  /* ---------------------------- DRIVER 08 ---------------------------- */
  {
    id: "driver-08",                                   // keep unique, do not change after sharing links
    name: "Kishan Pawar ",               // EDIT: driver's full name
    photo: "assets/images/drivers/driver-08.jpg",      // EDIT: put the photo at this path
    shortBio: "Add driver introduction",                // EDIT: 1–2 sentences about the driver
    experience: "5",                       // EDIT: e.g. "8 years of driving experience"
    languages: ["Kannada","Hindi"],                        // EDIT: e.g. ["Kannada", "Hindi", "English"]
    serviceAreas: ["Add service area"],                 // EDIT: e.g. ["Hubballi", "Dharwad"]
    phone: "9353268491",                                          // EDIT: real number only, e.g. "9876543210"
    whatsapp: "9353268491",                                       // EDIT: optional, falls back to phone
    email: "",                                          // optional
    availabilityStatus: "----",                             // only if you know it, e.g. "Available on weekends"

    vehicles: [
      // ---- ADD MORE VEHICLES BELOW (copy a block, paste after the last one, add a comma) ----
      {
        id: "vehicle-01",                              // unique inside this driver
        name: "Sedan Aura",
        image: "assets/images/vehicles/driver-08/vehicle-01.jpg",
        gallery: ["assets/images/vehicles/driver-08/vehicle-010.jpg"],                                    // optional extra photo paths
        brand: "Hundyai", model: "Add model", year: "",
        category: "SUV", seats: 4,                  // SAMPLE values — replace
        luggage: "", fuel: "", transmission: "", airConditioning: "Available",
        price: "5500",                                      // only add if the real rate is confirmed
        availability: "",                               // only if known
        description: "Add vehicle description",
        features: []                                    // e.g. ["Music system", "USB charging"]
      },
      /*{
        id: "vehicle-02",                              // unique inside this driver
        name: "Add Vehicle Name",
        image: "assets/images/vehicles/driver-08/vehicle-02.jpg",
        gallery: [],                                    // optional extra photo paths
        brand: "Add brand", model: "Add model", year: "",
        category: "MUV", seats: 7,                  // SAMPLE values — replace
        luggage: "", fuel: "", transmission: "", airConditioning: "",
        price: "",                                      // only add if the real rate is confirmed
        availability: "",                               // only if known
        description: "Add vehicle description",
        features: []                                    // e.g. ["Music system", "USB charging"]
      },
      {
        id: "vehicle-03",                              // unique inside this driver
        name: "Add Vehicle Name",
        image: "assets/images/vehicles/driver-08/vehicle-03.jpg",
        gallery: [],                                    // optional extra photo paths
        brand: "Add brand", model: "Add model", year: "",
        category: "Tempo Traveller", seats: 12,                  // SAMPLE values — replace
        luggage: "", fuel: "", transmission: "", airConditioning: "",
        price: "",                                      // only add if the real rate is confirmed
        availability: "",                               // only if known
        description: "Add vehicle description",
        features: []                                    // e.g. ["Music system", "USB charging"]
      },
      {
        id: "vehicle-04",                              // unique inside this driver
        name: "Add Vehicle Name",
        image: "assets/images/vehicles/driver-08/vehicle-04.jpg",
        gallery: [],                                    // optional extra photo paths
        brand: "Add brand", model: "Add model", year: "",
        category: "Hatchback", seats: 4,                  // SAMPLE values — replace
        luggage: "", fuel: "", transmission: "", airConditioning: "",
        price: "",                                      // only add if the real rate is confirmed
        availability: "",                               // only if known
        description: "Add vehicle description",
        features: []                                    // e.g. ["Music system", "USB charging"]
      },
      {
        id: "vehicle-05",                              // unique inside this driver
        name: "Add Vehicle Name",
        image: "assets/images/vehicles/driver-08/vehicle-05.jpg",
        gallery: [],                                    // optional extra photo paths
        brand: "Add brand", model: "Add model", year: "",
        category: "Sedan", seats: 4,                  // SAMPLE values — replace
        luggage: "", fuel: "", transmission: "", airConditioning: "",
        price: "",                                      // only add if the real rate is confirmed
        availability: "",                               // only if known
        description: "Add vehicle description",
        features: []                                    // e.g. ["Music system", "USB charging"]
      },*/
    ]
  },

  /* ---------------------------- DRIVER 09 ---------------------------- */
  {
    id: "driver-09",                                   // keep unique, do not change after sharing links
    name: "Driver 09 — Add Driver Name",               // EDIT: driver's full name
    photo: "assets/images/drivers/driver-09.jpg",      // EDIT: put the photo at this path
    shortBio: "Add driver introduction",                // EDIT: 1–2 sentences about the driver
    experience: "Add experience",                       // EDIT: e.g. "8 years of driving experience"
    languages: ["Add language"],                        // EDIT: e.g. ["Kannada", "Hindi", "English"]
    serviceAreas: ["Add service area"],                 // EDIT: e.g. ["Hubballi", "Dharwad"]
    phone: "",                                          // EDIT: real number only, e.g. "9876543210"
    whatsapp: "",                                       // EDIT: optional, falls back to phone
    email: "",                                          // optional
    availabilityStatus: "",                             // only if you know it, e.g. "Available on weekends"

    vehicles: [
      // ---- ADD MORE VEHICLES BELOW (copy a block, paste after the last one, add a comma) ----
      {
        id: "vehicle-01",                              // unique inside this driver
        name: "Add Vehicle Name",
        image: "assets/images/vehicles/driver-09/vehicle-01.jpg",
        gallery: [],                                    // optional extra photo paths
        brand: "Add brand", model: "Add model", year: "",
        category: "MUV", seats: 7,                  // SAMPLE values — replace
        luggage: "", fuel: "", transmission: "", airConditioning: "",
        price: "",                                      // only add if the real rate is confirmed
        availability: "",                               // only if known
        description: "Add vehicle description",
        features: []                                    // e.g. ["Music system", "USB charging"]
      },
      /*{
        id: "vehicle-02",                              // unique inside this driver
        name: "Add Vehicle Name",
        image: "assets/images/vehicles/driver-09/vehicle-02.jpg",
        gallery: [],                                    // optional extra photo paths
        brand: "Add brand", model: "Add model", year: "",
        category: "Tempo Traveller", seats: 12,                  // SAMPLE values — replace
        luggage: "", fuel: "", transmission: "", airConditioning: "",
        price: "",                                      // only add if the real rate is confirmed
        availability: "",                               // only if known
        description: "Add vehicle description",
        features: []                                    // e.g. ["Music system", "USB charging"]
      },
      {
        id: "vehicle-03",                              // unique inside this driver
        name: "Add Vehicle Name",
        image: "assets/images/vehicles/driver-09/vehicle-03.jpg",
        gallery: [],                                    // optional extra photo paths
        brand: "Add brand", model: "Add model", year: "",
        category: "Hatchback", seats: 4,                  // SAMPLE values — replace
        luggage: "", fuel: "", transmission: "", airConditioning: "",
        price: "",                                      // only add if the real rate is confirmed
        availability: "",                               // only if known
        description: "Add vehicle description",
        features: []                                    // e.g. ["Music system", "USB charging"]
      },
      {
        id: "vehicle-04",                              // unique inside this driver
        name: "Add Vehicle Name",
        image: "assets/images/vehicles/driver-09/vehicle-04.jpg",
        gallery: [],                                    // optional extra photo paths
        brand: "Add brand", model: "Add model", year: "",
        category: "Sedan", seats: 4,                  // SAMPLE values — replace
        luggage: "", fuel: "", transmission: "", airConditioning: "",
        price: "",                                      // only add if the real rate is confirmed
        availability: "",                               // only if known
        description: "Add vehicle description",
        features: []                                    // e.g. ["Music system", "USB charging"]
      },
      {
        id: "vehicle-05",                              // unique inside this driver
        name: "Add Vehicle Name",
        image: "assets/images/vehicles/driver-09/vehicle-05.jpg",
        gallery: [],                                    // optional extra photo paths
        brand: "Add brand", model: "Add model", year: "",
        category: "SUV", seats: 6,                  // SAMPLE values — replace
        luggage: "", fuel: "", transmission: "", airConditioning: "",
        price: "",                                      // only add if the real rate is confirmed
        availability: "",                               // only if known
        description: "Add vehicle description",
        features: []                                    // e.g. ["Music system", "USB charging"]
      },*/
    ]
  },

  /* ---------------------------- DRIVER 10 ---------------------------- */
  {
    id: "driver-10",                                   // keep unique, do not change after sharing links
    name: "Driver 10 — Add Driver Name",               // EDIT: driver's full name
    photo: "assets/images/drivers/driver-10.jpg",      // EDIT: put the photo at this path
    shortBio: "Add driver introduction",                // EDIT: 1–2 sentences about the driver
    experience: "Add experience",                       // EDIT: e.g. "8 years of driving experience"
    languages: ["Add language"],                        // EDIT: e.g. ["Kannada", "Hindi", "English"]
    serviceAreas: ["Add service area"],                 // EDIT: e.g. ["Hubballi", "Dharwad"]
    phone: "",                                          // EDIT: real number only, e.g. "9876543210"
    whatsapp: "",                                       // EDIT: optional, falls back to phone
    email: "",                                          // optional
    availabilityStatus: "",                             // only if you know it, e.g. "Available on weekends"

    vehicles: [
      // ---- ADD MORE VEHICLES BELOW (copy a block, paste after the last one, add a comma) ----
      {
        id: "vehicle-01",                              // unique inside this driver
        name: "Add Vehicle Name",
        image: "assets/images/vehicles/driver-10/vehicle-01.jpg",
        gallery: [],                                    // optional extra photo paths
        brand: "Add brand", model: "Add model", year: "",
        category: "Tempo Traveller", seats: 12,                  // SAMPLE values — replace
        luggage: "", fuel: "", transmission: "", airConditioning: "",
        price: "",                                      // only add if the real rate is confirmed
        availability: "",                               // only if known
        description: "Add vehicle description",
        features: []                                    // e.g. ["Music system", "USB charging"]
      },
      /*{
        id: "vehicle-02",                              // unique inside this driver
        name: "Add Vehicle Name",
        image: "assets/images/vehicles/driver-10/vehicle-02.jpg",
        gallery: [],                                    // optional extra photo paths
        brand: "Add brand", model: "Add model", year: "",
        category: "Hatchback", seats: 4,                  // SAMPLE values — replace
        luggage: "", fuel: "", transmission: "", airConditioning: "",
        price: "",                                      // only add if the real rate is confirmed
        availability: "",                               // only if known
        description: "Add vehicle description",
        features: []                                    // e.g. ["Music system", "USB charging"]
      },
      {
        id: "vehicle-03",                              // unique inside this driver
        name: "Add Vehicle Name",
        image: "assets/images/vehicles/driver-10/vehicle-03.jpg",
        gallery: [],                                    // optional extra photo paths
        brand: "Add brand", model: "Add model", year: "",
        category: "Sedan", seats: 4,                  // SAMPLE values — replace
        luggage: "", fuel: "", transmission: "", airConditioning: "",
        price: "",                                      // only add if the real rate is confirmed
        availability: "",                               // only if known
        description: "Add vehicle description",
        features: []                                    // e.g. ["Music system", "USB charging"]
      },
      {
        id: "vehicle-04",                              // unique inside this driver
        name: "Add Vehicle Name",
        image: "assets/images/vehicles/driver-10/vehicle-04.jpg",
        gallery: [],                                    // optional extra photo paths
        brand: "Add brand", model: "Add model", year: "",
        category: "SUV", seats: 6,                  // SAMPLE values — replace
        luggage: "", fuel: "", transmission: "", airConditioning: "",
        price: "",                                      // only add if the real rate is confirmed
        availability: "",                               // only if known
        description: "Add vehicle description",
        features: []                                    // e.g. ["Music system", "USB charging"]
      },
      {
        id: "vehicle-05",                              // unique inside this driver
        name: "Add Vehicle Name",
        image: "assets/images/vehicles/driver-10/vehicle-05.jpg",
        gallery: [],                                    // optional extra photo paths
        brand: "Add brand", model: "Add model", year: "",
        category: "MUV", seats: 7,                  // SAMPLE values — replace
        luggage: "", fuel: "", transmission: "", airConditioning: "",
        price: "",                                      // only add if the real rate is confirmed
        availability: "",                               // only if known
        description: "Add vehicle description",
        features: []                                    // e.g. ["Music system", "USB charging"]
      },*/
    ]
  },

];
