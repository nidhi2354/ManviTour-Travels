/* ============================================================
   FILE: src/data/homeContent.js
   PURPOSE: Home page ka "marketing content" - stats, why-choose-us
            points aur booking steps.

   BACKEND DEV NOTE
   Ye MOSTLY STATIC content hai - iske liye API zaroori nahi.
   Agar client ko khud edit karna ho (admin panel se), tab:
        GET /api/home-content -> { stats[], whyChooseUs[], bookingSteps[] }
   ============================================================ */

/* ---- 1. STATS (Hero ke neeche counter strip) ----
   Purpose: naya visitor 5 second me judge karta hai ki company "chhoti" hai
   ya "established". Numbers wo bharosa turant de dete hain.
   NOTE: numbers client se verify karwana - galat claim nahi karni chahiye. */
export const stats = [
  { id: 1, value: "10+", label: "Years of Experience" },
  { id: 2, value: "25,000+", label: "Happy Customers" },
  { id: 3, value: "50+", label: "Vehicles in Fleet" },
  { id: 4, value: "24x7", label: "Customer Support" },
];

/* ---- 2. WHY CHOOSE US ----
   Purpose: Customer ke DAR (objections) ko door karna.
   Har point ek real objection ka jawab hai - comment me likha hai kaunsa. */
export const whyChooseUs = [
  {
    id: 1,
    icon: "FaRupeeSign",
    title: "Transparent Pricing",
    // Objection: "baad me extra paise maang lenge"
    description:
      "The rate quoted at booking is the final rate. No hidden charges and no last-minute surprises.",
  },
  {
    id: 2,
    icon: "FaUserShield",
    title: "Verified Drivers",
    // Objection: "driver safe hoga ya nahi, khaas kar ladies ke liye"
    description:
      "Police-verified, badge-holding and experienced drivers. You receive the driver's details by SMS before every trip.",
  },
  {
    id: 3,
    icon: "FaClock",
    title: "Always On Time",
    // Objection: "flight/train chhut jayegi"
    description:
      "Live flight tracking for airport and railway pickups. We reach your location before you do.",
  },
  {
    id: 4,
    icon: "FaFileInvoice",
    title: "GST Registered Business",
    // Objection: "company genuine hai ya fraud" + corporate clients ko bill chahiye
    description:
      "A government registered proprietorship. Proper GST invoices are available for corporate clients.",
  },
  {
    id: 5,
    icon: "FaCarBurst",
    title: "Well-Maintained Fleet",
    // Objection: "gaadi purani/kharab hogi, raste me band ho jayegi"
    description:
      "Every vehicle goes on the road only after regular servicing, sanitisation and a full fitness check.",
  },
  {
    id: 6,
    icon: "FaHeadset",
    title: "24x7 Live Support",
    // Objection: "raat me problem hui to kaun uthayega phone"
    description:
      "Day or night, help is one call away. We stay reachable throughout your journey as well.",
  },
];

/* ---- 3. BOOKING STEPS ----
   Purpose: Booking process ko "aasaan" dikhana. Customer ko lagta hai
   travel booking complicated hai - 3 steps dekh kar wo hesitation hat jaati hai. */
export const bookingSteps = [
  {
    id: 1,
    step: "01",
    icon: "FaPhoneVolume",
    title: "Call Or Send Enquiry",
    description:
      "Call us or fill in the website form. Just share your travel date, route and number of passengers.",
  },
  {
    id: 2,
    step: "02",
    icon: "FaFileSignature",
    title: "Get Quote & Confirm",
    description:
      "We send you our best rate within 15 minutes. Once you approve it, your booking is confirmed.",
  },
  {
    id: 3,
    step: "03",
    icon: "FaCarSide",
    title: "Vehicle At Your Doorstep",
    description:
      "You receive the driver's details in advance. The vehicle arrives on time and your journey begins.",
  },
];
