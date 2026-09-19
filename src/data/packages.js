/* ============================================================
   FILE: src/data/packages.js
   PURPOSE: Tour packages - Delhi se sabse zyada book hone wale
            routes. Ye section direct sales laata hai.

   BACKEND DEV NOTE
        GET /api/packages?featured=true
        ->  [ { id, slug, title, route, duration, startingPrice,
                image, tags[], isFeatured, category, bestTime } ]
   - `startingPrice` NUMBER rakhna (rupee sign frontend lagayega)
   - `isFeatured` se home page par sirf 6 dikhte hain,
     /packages page par saare 8
   - `category` /packages page ke filter chips ke liye
   - `slug` aage detail page ka URL banega: /packages/shimla-tour

   ============================================================
   PHOTOS - ab public/packages/ folder se aati hain
   ============================================================
   Pehle yahan UNSPLASH ke links the (internet ki free photos).
   Do dikkat thi:
     - wo client ki apni photo nahi thi
     - link kabhi band ho jaaye to photo gayab, aur pata bhi
       nahi chalta

   Ab fleet wala hi tareeka hai: photo public/packages/ me
   rakho, yahan sirf path likho. File na ho to card apne aap
   ek brand wala background dikha deta hai - broken image ka
   icon kabhi nahi aata.

   Kaunsi file chahiye, poori list public/packages/README.txt me hai.

   ============================================================
   ⚠️ CLIENT SE CONFIRM
   ============================================================
   1. PRICES SAMPLE HAIN (4,499 se 16,999). Ye maine page khaali
      na dikhe isliye rakhe hain. Website par galat rate =
      customer ka gussa aur cancel hui booking.

   2. DURATION bhi sample hai - client apne hisaab se badlein
      (2 din ka Jaipur, 3 din ka Shimla - ye unka faisla hai).

   3. bestTime general jaankari hai (Taj ka Friday band hona,
      pahaad ka season). Client apne experience se behtar
      bata sakte hain.
   ============================================================ */

export const packages = [
  /* ---------- EK DIN WALE (sabse zyada book hote hain) ---------- */
  {
    id: 1,
    slug: "agra-tour",
    title: "Agra Same Day Tour",
    route: "Delhi - Agra - Delhi",
    duration: "1 Day",
    startingPrice: 4499,
    category: "weekend",
    // Taj Mahal har SHUKRAVAAR band rehta hai - ye asli baat hai,
    // aur booking se pehle bata dena customer ka din bacha leta hai
    bestTime: "Year round, except Fridays (Taj Mahal closed)",
    image: "/packages/agra.jpg",
    tags: ["Taj Mahal", "Agra Fort", "AC Cab"],
    isFeatured: true,
  },
  {
    id: 2,
    slug: "mathura-vrindavan-tour",
    title: "Mathura Vrindavan Darshan",
    route: "Delhi - Mathura - Vrindavan - Delhi",
    duration: "1 Day",
    startingPrice: 4999,
    category: "pilgrimage",
    bestTime: "October to March, and during Holi and Janmashtami",
    image: "/packages/mathura.jpg",
    tags: ["Krishna Janmabhoomi", "Banke Bihari", "Prem Mandir"],
    isFeatured: true,
  },

  /* ---------- CHHOTI CHHUTTI ---------- */
  {
    id: 3,
    slug: "jaipur-tour",
    title: "Jaipur Pink City Tour",
    route: "Delhi - Jaipur - Delhi",
    duration: "2 Days / 1 Night",
    startingPrice: 7999,
    category: "heritage",
    bestTime: "October to March",
    image: "/packages/jaipur.jpg",
    tags: ["Amber Fort", "Hawa Mahal", "City Palace"],
    isFeatured: true,
  },
  {
    id: 4,
    slug: "shimla-tour",
    title: "Shimla Hill Tour",
    route: "Delhi - Shimla - Kufri - Delhi",
    duration: "3 Days / 2 Nights",
    startingPrice: 10999,
    category: "hills",
    bestTime: "March to June, and October to December",
    image: "/packages/shimla.jpg",
    tags: ["Mall Road", "Kufri", "Jakhoo Temple"],
    isFeatured: true,
  },
  {
    id: 5,
    slug: "nainital-tour",
    title: "Nainital Lake Tour",
    route: "Delhi - Nainital - Bhimtal - Delhi",
    duration: "3 Days / 2 Nights",
    startingPrice: 10499,
    category: "hills",
    bestTime: "March to June, and September to November",
    image: "/packages/nainital.jpg",
    tags: ["Naini Lake", "Snow View Point", "Bhimtal"],
    isFeatured: true,
  },

  /* ---------- LAMBI TRIP ---------- */
  {
    id: 6,
    slug: "manali-tour",
    title: "Manali Snow Tour",
    route: "Delhi - Manali - Solang - Delhi",
    duration: "4 Days / 3 Nights",
    startingPrice: 14999,
    category: "hills",
    bestTime: "March to June for pleasant weather, December to February for snow",
    image: "/packages/manali.jpg",
    tags: ["Solang Valley", "Hadimba Temple", "Mall Road"],
    isFeatured: true,
  },
  {
    id: 7,
    slug: "kasol-tour",
    title: "Kasol Parvati Valley",
    route: "Delhi - Kasol - Manikaran - Delhi",
    duration: "3 Days / 2 Nights",
    startingPrice: 11999,
    category: "hills",
    // Barsaat me Parvati valley me landslide hote hain - us
    // season me bhejna hi nahi chahiye
    bestTime: "March to June, and September to November",
    image: "/packages/kasol.jpg",
    tags: ["Parvati Valley", "Manikaran Sahib", "Riverside Stay"],
    isFeatured: false, // home par nahi, sirf /packages page par
  },
  {
    id: 8,
    slug: "udaipur-tour",
    title: "Udaipur City Of Lakes",
    route: "Delhi - Udaipur - Delhi",
    duration: "4 Days / 3 Nights",
    startingPrice: 16999,
    category: "heritage",
    bestTime: "September to March",
    image: "/packages/udaipur.jpg",
    tags: ["City Palace", "Lake Pichola", "Jag Mandir"],
    isFeatured: false, // home par nahi, sirf /packages page par
  },
];

/* ============================================================
   FILTER CATEGORIES - /packages page ke chips

   Ye "kis tarah ki trip" ke hisaab se bante hain, jagah ke
   hisaab se nahi. Kyun? Kyunki customer aise hi sochta hai -
   "pahaad jaana hai", "darshan karne hain", "do din ki chhutti
   hai". Wo "Himachal package" nahi sochta.

   ⚠️ NAYA PACKAGE JODTE WAQT: uska `category` inhi id me se
   ek hona chahiye, warna wo kisi bhi chip me nahi dikhega
   (sirf "All Packages" me aayega).

   BACKEND DEV NOTE
        GET /api/package-categories -> [ { id, label } ]
   ============================================================ */
export const packageCategories = [
  { id: "all", label: "All Packages" },
  { id: "hills", label: "Hill Stations" },
  { id: "heritage", label: "Heritage & Forts" },
  { id: "pilgrimage", label: "Pilgrimage" },
  { id: "weekend", label: "Short & Weekend" },
];

/* ============================================================
   HAR PACKAGE ME KYA HAI AUR KYA NAHI

   "KYA NAHI HAI" WALI LIST SABSE ZAROORI HAI.
   Package booking me sabse zyada jhagda isi baat par hota hai -
   customer maanta hai monument ki ticket included thi, aur wahan
   jaa kar pata chalta hai ki nahi thi. Wo ek din kharab, ek
   review kharab, aur ek customer gaya.

   Isliye "Not included" ko hum chhupate nahi - barabar ki jagah
   dete hain. Jo business shuru me "nahi" bol deta hai, uspar
   log zyada bharosa karte hain.

   ⚠️ CLIENT SE CONFIRM: neeche ki dono list client ke asli
   package terms se milani hai. Ye maine aam industry practice
   se banayi hai.
   ============================================================ */
export const packageInclusions = {
  included: [
    "AC vehicle with driver for the whole trip",
    "Hotel stay as per the itinerary",
    "Day-wise sightseeing plan",
    "Pickup and drop from your address in Delhi NCR",
    "Driver's stay and food",
    "GST invoice on request",
  ],

  notIncluded: [
    "Monument and temple entry tickets",
    "Meals, unless the itinerary says otherwise",
    "Helicopter, ropeway and adventure activity charges",
    "Anything personal - shopping, tips, laundry",
    "Costs from delays outside our control (weather, roadblocks)",
  ],
};
