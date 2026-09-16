/* ============================================================
   FILE: src/data/testimonials.js
   PURPOSE: "What Our Customers Say" section.
            Purpose = SOCIAL PROOF. Log dusre logon ki baat par
            company ki apni baat se zyada bharosa karte hain.

   BACKEND DEV NOTE
        GET  /api/reviews?approved=true  ->  [ { id, name, city, rating, message, tripType } ]
        POST /api/reviews                ->  naya review (admin approve karega, tabhi dikhega)
   - `rating` 1-5 ka NUMBER
   - Review moderation zaroori hai, warna spam aa jaayega
   - NEECHE KE REVIEWS SAMPLE HAIN - client ke asli Google reviews se replace karna
   ============================================================ */

export const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    city: "Dwarka, New Delhi",
    rating: 5,
    tripType: "Airport Pick & Drop",
    message:
      "My flight was at 2 in the morning and the driver arrived 30 minutes early. The car was spotless and the driver was very polite. I book with Manvi every single time now.",
  },
  {
    id: 2,
    name: "Rohit Verma",
    city: "Janakpuri, New Delhi",
    rating: 5,
    tripType: "Golden Triangle Tour",
    message:
      "We did a 4 day Agra and Jaipur trip with the family. The Innova felt brand new and they charged exactly what was quoted - not a single rupee extra.",
  },
  {
    id: 3,
    name: "Anjali Gupta",
    city: "Uttam Nagar, New Delhi",
    rating: 4,
    tripType: "Tempo Traveller",
    message:
      "We booked a 17 seater tempo for Haridwar. The push-back seats and the AC were both perfect. We got slightly delayed because of traffic, but everything else was excellent.",
  },
  {
    id: 4,
    name: "Mohammed Faisal",
    city: "Gurugram, Haryana",
    rating: 5,
    tripType: "Corporate Booking",
    message:
      "We book monthly for our company guests. GST invoices always arrive on time and the billing is completely transparent. Highly professional team.",
  },
  {
    id: 5,
    name: "Sunita Rani",
    city: "Palam, New Delhi",
    rating: 5,
    tripType: "Wedding Car Booking",
    message:
      "We booked a Mercedes for my daughter's wedding. The car arrived fully decorated and the driver was in uniform. Every guest asked us where we had hired it from.",
  },
  {
    id: 6,
    name: "Amit Chauhan",
    city: "Najafgarh, New Delhi",
    rating: 5,
    tripType: "Delhi Sightseeing",
    message:
      "I took my out-of-town relatives around Delhi. The driver knew every location and explained the history like a proper guide. Completely worth the money.",
  },
];
