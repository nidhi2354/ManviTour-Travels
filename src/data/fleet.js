/* ============================================================
   FILE: src/data/fleet.js
   PURPOSE: "Our Fleet" section - kaunsi gaadi, kitni seat, kitna rate.
            Customer ka sabse bada sawaal "rate kya hai?" - yahin answer milta hai.

   BACKEND DEV NOTE
        GET /api/vehicles  ->  [ { id, name, category, type, seats, luggage,
                                   ratePerKm, image, features[] } ]
   - `ratePerKm` NUMBER rakhna (string nahi) - taaki aage fare calculator bana sakein
   - `type` fallback ILLUSTRATION chunne ke liye (sedan | mpv | suv | tempo | bus | luxury)
   - `filterGroup` /fleet page ke FILTER chips ke liye. `type` se alag
     rakha hai kyunki Wedding Car hai to Dzire (type: sedan), par
     customer usse alag category samajhta hai (filterGroup: wedding)
   - `image` null ho to component apne aap illustration dikha deta hai

   ============================================================
   IMAGES - ab CLIENT KI APNI GAADIYAN hain (stock photos nahi)
   ============================================================
   Photos  public/fleet/  folder me rakhi jaati hain. Wahan se
   browser unhe seedha "/fleet/naam.jpg" se uthata hai.

   PUBLIC FOLDER KYUN, src/assets KYUN NAHI?
     - assets se import karne par, file na mile to POORA BUILD
       fail ho jaata hai. Client ne 6 me se 4 photos di? Site band.
     - public se path string hai. File na mile to sirf wo ek image
       nahi aayegi - aur Fleet.jsx ka onError use illustration se
       badal dega. Site kabhi tooti hui nahi dikhegi.

   NAYI PHOTO LAGANI HAI?
     Bas public/fleet/ me usi naam se file replace kar dein.
     Is file me kuch badalne ki zaroorat nahi.
     (Naam ki poori list public/fleet/README.txt me hai)

   ============================================================
   RATES SAMPLE HAIN - client se confirm karke update karein.
   ============================================================ */

/* Saari photos ek hi jagah - taaki aage koi bhi developer ek
   nazar me dekh sake ki kaunsi file chahiye. */
const PHOTO = {
  dzire: "/fleet/swift-dzire.jpg",
  ertiga: "/fleet/ertiga.jpg",
  innova: "/fleet/innova-crysta.jpg",
  carens: "/fleet/kia-carens.jpg",
  tempo: "/fleet/tempo-traveller.jpg",
  miniBus: "/fleet/mini-bus.jpg",
  luxuryBus: "/fleet/luxury-bus.jpg",

  /* Client ki apni Dzire, laal ribbon se saji hui - yahi gaadi
     shaadi ki booking par jaati hai. */
  wedding: "/fleet/wedding-car.jpg",
};

export const fleet = [
  {
    id: 1,
    name: "Maruti Swift Dzire",
    category: "Sedan",
    type: "sedan",
    filterGroup: "sedan",
    seats: 4,
    luggage: 2,
    ratePerKm: 12,
    image: PHOTO.dzire,
    features: ["AC", "Music System", "Comfortable Seats"],
  },
  {
    id: 2,
    name: "Maruti Ertiga",
    category: "MPV",
    type: "mpv",
    filterGroup: "mpv",
    seats: 6,
    luggage: 3,
    ratePerKm: 16,
    image: PHOTO.ertiga,
    features: ["AC", "Extra Leg Room", "Family Friendly"],
  },
  {
    id: 3,
    name: "Toyota Innova Crysta",
    category: "Premium MPV",
    type: "mpv",
    filterGroup: "mpv",
    seats: 6,
    luggage: 4,
    ratePerKm: 20,
    image: PHOTO.innova,
    features: ["AC", "Push-back Seats", "Extra Leg Room"],
  },
  {
    id: 4,
    name: "Kia Carens",
    category: "Premium MPV",
    type: "mpv",
    filterGroup: "mpv",
    seats: 6,
    luggage: 4,
    ratePerKm: 18,
    image: PHOTO.carens,
    features: ["AC", "Push-back Seats", "Spacious Boot"],
  },
  {
    id: 5,
    name: "Force Tempo Traveller",
    category: "Tempo Traveller",
    type: "tempo",
    filterGroup: "tempo",
    seats: 17,
    luggage: 12,
    ratePerKm: 26,
    image: PHOTO.tempo,
    features: ["AC", "Pushback Seats", "Ice Box", "All India Permit"],
  },
  {
    id: 6,
    name: "26 Seater Mini Bus",
    category: "Mini Bus",
    type: "bus",
    filterGroup: "bus",
    seats: 26,
    luggage: 26,
    ratePerKm: 42,
    image: PHOTO.miniBus,
    features: ["AC", "Push-back Seats", "Music System"],
  },
  {
    id: 7,
    name: "Luxury Coach Bus",
    category: "Bus",
    type: "bus",
    filterGroup: "bus",
    seats: 45,
    luggage: 45,
    ratePerKm: 55,
    image: PHOTO.luxuryBus,
    features: ["AC", "Recliner Seats", "Large Luggage Space"],
  },
  {
    /* Shaadi ki booking per-km nahi, ZYADATAR PER DAY hoti hai.
       Card abhi sabke liye "/km" hi dikhata hai, isliye ye rate
       client se confirm karna zaroori hai. */
    id: 8,
    name: "Wedding Car",
    category: "Wedding",
    type: "sedan",
    filterGroup: "wedding",
    seats: 4,
    luggage: 2,
    ratePerKm: 35,
    image: PHOTO.wedding,
    /* Ye teeno CLIENT SE CONFIRM karne hain - jo de na sakein
       wo yahan se hata dein. Jhoothi baat card par nahi honi chahiye. */
    features: ["Ribbon & Flower Decor", "Uniformed Driver", "Doorstep Pickup"],
  },
];

/* ============================================================
   FILTER OPTIONS - sirf /fleet page ke chips ke liye

   YE YAHAN KYUN HAIN, COMPONENT ME KYUN NAHI?
   Kyunki ye DATA hain, DESIGN nahi. Kal client ek nayi category
   (jaise "Luxury SUV") jodega, to usse sirf yahan aur upar wali
   list me ek line likhni hogi - Fleet.jsx chhune ki zaroorat
   nahi padegi. Component ka kaam sirf dikhana hai, jaanna nahi.

   BACKEND DEV NOTE
        GET /api/vehicle-filters -> { vehicleTypes[], groupSizes[] }
   `max: null` ka matlab "koi upar ki limit nahi". Infinity
   jaanbujh kar nahi likha - wo JSON me survive nahi karta
   (JSON.stringify use null bana deta hai), to shuru se hi
   null rakh liya taaki API aur frontend ek jaisa bolein.
   ============================================================ */

/* Gaadi ka type - har vehicle ke `filterGroup` se match hota hai */
export const vehicleTypes = [
  { id: "all", label: "All Vehicles" },
  { id: "sedan", label: "Sedan" },
  { id: "mpv", label: "MPV / SUV" },
  { id: "tempo", label: "Tempo Traveller" },
  { id: "bus", label: "Bus" },
  { id: "wedding", label: "Wedding Car" },
];

/* Kitne log hain - customer isi bhasha me sochta hai.
   Wo "MPV chahiye" nahi sochta, wo sochta hai "hum 6 log hain".
   Isliye ye filter type wale se bhi zyada kaam aata hai. */
export const groupSizes = [
  { id: "any", label: "Any size", min: 0, max: null },
  { id: "small", label: "1 - 4 people", min: 1, max: 4 },
  { id: "family", label: "5 - 7 people", min: 5, max: 7 },
  { id: "group", label: "8 - 20 people", min: 8, max: 20 },
  { id: "large", label: "20+ people", min: 21, max: null },
];
