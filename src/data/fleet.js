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
   IMAGES - kaise chuni gayi
   ============================================================
   Har photo Unsplash par search karke, uske alt-text se VERIFY karke
   li gayi hai - taaki gaadi ka naam aur tasveer match karein:

     Swift Dzire          -> "white sedan on gray asphalt road"
     Innova Crysta        -> "silver minivan parked on the side of the road"
     Force Tempo Traveller-> "white Mercedes-Benz Sprinter" (same shape van)
     Toyota Fortuner      -> "white SUV parked on a dirt road near hills"
     Luxury Coach Bus     -> "white and black bus running near the mountain"
     Mercedes-Benz E-Class-> "a grey Mercedes-Benz sedan parked in a
                              concrete parking structure" (4-door sedan.
                              Baaki Mercedes results "coupe" the - wo 2-door
                              hote hain, E-Class ke liye galat)

   URL ke parameters ka matlab:
     w=800      -> 800px chaudi image (card ke liye kaafi, bina bhaari hue)
     q=80       -> 80% quality (aankh ko farak nahi dikhta, size aadha)
     auto=format-> browser ko WebP support hai to WebP bhejega (aur halki)
     fit=crop   -> 4:3 box me fit karne ke liye crop

   ============================================================
   CLIENT SE ASLI PHOTOS MILNE PAR (ye sabse behtar hai)
   ============================================================
   Ye stock photos hain - us type ki gaadi dikhaati hain, client ki
   APNI gaadi nahi. Jab client photos de:

     1. photos  src/assets/fleet/  me rakhein (naam README.txt me likhe hain)
     2. upar import karein:
            import swiftDzire from "../assets/fleet/swift-dzire.jpg";
     3. neeche Unsplash URL ki jagah likhein:
            image: swiftDzire,

   RATES SAMPLE HAIN - client se confirm karke update karein.
   ============================================================ */

const IMG = "https://images.unsplash.com";
const PARAMS = "?w=800&q=80&auto=format&fit=crop";

export const fleet = [
  {
    id: 1,
    name: "Swift Dzire",
    category: "Sedan",
    type: "sedan",
    seats: 4,
    luggage: 2,
    ratePerKm: 12,
    image: `${IMG}/photo-1623869675781-80aa31012a5a${PARAMS}`,
    features: ["AC", "Music System", "Comfortable Seats"],
  },
  {
    id: 2,
    name: "Toyota Innova Crysta",
    category: "SUV",
    type: "mpv",
    seats: 6,
    luggage: 4,
    ratePerKm: 18,
    image: `${IMG}/photo-1675311183084-755007dbb223${PARAMS}`,
    features: ["AC", "Push-back Seats", "Extra Leg Room"],
  },
  {
    id: 3,
    name: "Force Tempo Traveller",
    category: "Tempo Traveller",
    type: "tempo",
    seats: 17,
    luggage: 12,
    ratePerKm: 26,
    image: `${IMG}/photo-1535655685871-dc8158ff167e${PARAMS}`,
    features: ["AC", "LED TV", "Ice Box", "Pushback Seats"],
  },
  {
    id: 4,
    name: "Toyota Fortuner",
    category: "Luxury SUV",
    type: "suv",
    seats: 6,
    luggage: 4,
    ratePerKm: 40,
    image: `${IMG}/photo-1758411898152-8fcdecd6769c${PARAMS}`,
    features: ["Premium Interior", "Chauffeur Driven", "Sunroof"],
  },
  {
    id: 5,
    name: "Luxury Coach Bus",
    category: "Bus",
    type: "bus",
    seats: 45,
    luggage: 45,
    ratePerKm: 55,
    image: `${IMG}/photo-1544620347-c4fd4a3d5957${PARAMS}`,
    features: ["AC", "Recliner Seats", "Large Luggage Space"],
  },
  {
    id: 6,
    name: "Mercedes-Benz E-Class",
    category: "Premium Luxury",
    type: "luxury",
    seats: 4,
    luggage: 2,
    ratePerKm: 85,
    image: `${IMG}/photo-1609703048009-d3576872b32c${PARAMS}`,
    features: ["Wedding Ready", "Leather Seats", "Uniformed Driver"],
  },
];
