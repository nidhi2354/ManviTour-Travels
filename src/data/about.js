/* ============================================================
   FILE: src/data/about.js
   PURPOSE: /about page ka saara content. 

   BACKEND DEV NOTE
        GET /api/about  ->  { story, ownerMessage, serviceAreas }
   Ye content client khud admin panel se badalna chahega (story,
   owner ka message) - isliye iska API banana zaroori hai.

   ============================================================
   IMAANDARI KA NOTE - ZAROOR PADHEIN
   ============================================================
   Neeche jo bhi text "VERIFIED" comment ke saath hai, wo GST
   certificate / visiting card se aaya hai - wo pakka sach hai.

   
   ============================================================ */

import { siteConfig } from "./siteConfig";

/* ------------------------------------------------------------
   1. OUR STORY - "ye log hain kaun"
   ------------------------------------------------------------ */
export const aboutStory = {
  eyebrow: "Our Story",
  title: "A Local Travel Business, Run Like A Professional One",

  /* Har paragraph alag entry hai taaki component .map() kar sake -
     client kal ek paragraph aur jodna chahe to bas yahan add karein. */
  paragraphs: [
    /* VERIFIED - GST certificate + visiting card se */
    `Manvi Tour & Travels is a GST registered proprietorship run from
     ${siteConfig.address.locality}, ${siteConfig.address.landmark} in
     ${siteConfig.address.city}. We are not an app or a call centre - we are
     a local travel office you can actually walk into.`,

    /* VERIFIED - services.js aur fleet.js se, koi naya claim nahi */
    `From a 20 minute airport drop to a nine day Char Dham yatra, everything
     runs from one place - sedans, MPVs, tempo travellers, mini buses and
     luxury coaches, along with ready-made and fully customised tour packages.`,

    /* CLIENT SE CONFIRM - ye "kaam karne ka tareeka" hai, kahani nahi.
       Safe hai, par phir bhi client se ek baar padhwa lena. */
    `The way we work is simple. You get one rate at the time of booking and
     that rate does not change later. The driver's details reach you before
     the trip. And if anything comes up on the road, the same number you
     called is still the number that picks up.`,
  ],

  /* Chhote chips - teen sabse bade trust signals, ek nazar me */
  highlights: [
    { id: 1, icon: "FaFileInvoice", label: "GST Registered Business" }, // VERIFIED
    { id: 2, icon: "FaLandmarkDome", label: "Office in Dwarka, Delhi" }, // VERIFIED
    { id: 3, icon: "FaClock", label: siteConfig.workingHours }, // VERIFIED - visiting card
    { id: 4, icon: "FaRoad", label: "All India Permit Vehicles" }, // fleet.js se
  ],

  /* Photos: client ki APNI gaadiyan (public/fleet/ se).
     Stock photo jaanbujh kar nahi liya - About page par doosron ki
     gaadi lagana bilkul ulta kaam karta hai.
     Photo badalni ho to bas ye path badal dein. */
  photoMain: "/fleet/innova-crysta.jpg",
  photoSmall: "/fleet/tempo-traveller.jpg",
};

/* ------------------------------------------------------------
   2. OWNER KA MESSAGE
   ------------------------------------------------------------
   Chhote business me sabse bada trust signal owner ka chehra aur
   naam hota hai. "Company" se log darte hain, "aadmi" par bharosa
   karte hain.

   photo: null -> component naam ka pehla akshar ek peele circle me
   dikha dega (Testimonials jaisa). Ye stock photo lagane se bahut
   behtar hai. Client ki asli photo aaye to:
       1. public/ me owner.jpg rakhein
       2. neeche photo: "/owner.jpg" kar dein
   ------------------------------------------------------------ */
export const ownerMessage = {
  name: siteConfig.ownerName, // VERIFIED - GST certificate
  designation: siteConfig.ownerDesignation, // VERIFIED - "Proprietor"
  photo: null,


  message: `Every vehicle that leaves our office carries somebody's family.
    That is how we look at this work. We would rather lose a booking than
    send out a vehicle or a driver we are not sure about.`,
};

/* ------------------------------------------------------------
   3. SERVICE AREAS - "aap mere ilaake me aate ho?"

   ------------------------------------------------------------ */
export const serviceAreas = [
  {
    id: 1,
    icon: "FaLandmarkDome",
    title: "Across Delhi",
    note: "Pick up and drop anywhere in the city",
    areas: [
      "Dwarka",
      "Janakpuri",
      "Uttam Nagar",
      "Najafgarh",
      "Palam",
      "Vasant Kunj",
      "Rajouri Garden",
      "Karol Bagh",
      "Connaught Place",
      "IGI Airport T1 / T2 / T3",
    ],
  },
  {
    id: 2,
    icon: "FaRoad",
    title: "Delhi NCR",
    note: "Daily corporate and family bookings",
    areas: [
      "Gurugram",
      "Noida",
      "Greater Noida",
      "Faridabad",
      "Ghaziabad",
      "Manesar",
      "Sonipat",
    ],
  },
  {
    id: 3,
    icon: "FaMapLocationDot",
    title: "Popular Outstation Routes",
    note: "One way or round trip, with experienced highway drivers",
    areas: [
      "Agra",
      "Jaipur",
      "Haridwar",
      "Rishikesh",
      "Dehradun",
      "Shimla",
      "Manali",
      "Chandigarh",
      "Mathura - Vrindavan",
      "Nainital",
      "Ajmer",
      "Amritsar",
    ],
  },
];
