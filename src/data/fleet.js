/* ============================================================
   FILE: src/data/fleet.js
   PURPOSE: "Our Fleet" section - kaunsi gaadi, kitni seat, kitna rate.
            Customer ka sabse bada sawaal "rate kya hai?" - yahin answer milta hai.

   BACKEND DEV NOTE
        GET /api/vehicles  ->  [ { id, name, category, type, seats, luggage,
                                   ratePerKm, image, features[] } ]
   - `ratePerKm` NUMBER rakhna (string nahi) - taaki aage fare calculator bana sakein
   - `type` fallback illustration chunne ke liye (sedan | mpv | suv | tempo | bus | luxury)
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
};

export const fleet = [
  {
    id: 1,
    name: "Maruti Swift Dzire",
    category: "Sedan",
    type: "sedan",
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
    seats: 45,
    luggage: 45,
    ratePerKm: 55,
    image: PHOTO.luxuryBus,
    features: ["AC", "Recliner Seats", "Large Luggage Space"],
  },
];
