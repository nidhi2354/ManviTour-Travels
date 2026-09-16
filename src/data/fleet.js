/* ============================================================
   FILE: src/data/fleet.js
   PURPOSE: "Our Fleet" section - kaunsi gaadi, kitni seat, kitna rate.
            Customer ka sabse bada sawaal "rate kya hai?" - yahin answer milta hai.

   BACKEND DEV NOTE
        GET /api/vehicles  ->  [ { id, name, category, seats, luggage, ratePerKm, image, features[] } ]
   - `ratePerKm` NUMBER rakhna (string nahi) - taaki aage fare calculator bana sakein
   - `image` -> abhi Unsplash URL hai; production me apne server/CDN ka path aayega
   - RATES SAMPLE HAIN - client se confirm karke update karna zaroori hai
   ============================================================ */

export const fleet = [
  {
    id: 1,
    name: "Swift Dzire",
    category: "Sedan",
    seats: 4,
    luggage: 2,
    ratePerKm: 12,
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80",
    features: ["AC", "Music System", "Comfortable Seats"],
  },
  {
    id: 2,
    name: "Toyota Innova Crysta",
    category: "SUV",
    seats: 6,
    luggage: 4,
    ratePerKm: 18,
    image: "https://images.unsplash.com/photo-1632245889029-e406faaa34cd?w=800&q=80",
    features: ["AC", "Push-back Seats", "Extra Leg Room"],
  },
  {
    id: 3,
    name: "Force Tempo Traveller",
    category: "Tempo Traveller",
    seats: 17,
    luggage: 12,
    ratePerKm: 26,
    image: "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?w=800&q=80",
    features: ["AC", "LED TV", "Ice Box", "Pushback Seats"],
  },
  {
    id: 4,
    name: "Toyota Fortuner",
    category: "Luxury SUV",
    seats: 6,
    luggage: 4,
    ratePerKm: 40,
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80",
    features: ["Premium Interior", "Chauffeur Driven", "Sunroof"],
  },
  {
    id: 5,
    name: "Luxury Coach Bus",
    category: "Bus",
    seats: 45,
    luggage: 45,
    ratePerKm: 55,
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80",
    features: ["AC", "Recliner Seats", "Large Luggage Space"],
  },
  {
    id: 6,
    name: "Mercedes-Benz E-Class",
    category: "Premium Luxury",
    seats: 4,
    luggage: 2,
    ratePerKm: 85,
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
    features: ["Wedding Ready", "Leather Seats", "Uniformed Driver"],
  },
];
