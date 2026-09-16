/* ============================================================
   FILE: src/data/packages.js
   PURPOSE: "Popular Tour Packages" section - Delhi se sabse zyada
            book hone wale routes. Ye section direct sales laata hai.

   BACKEND DEV NOTE
        GET /api/packages?featured=true  ->  [ { id, slug, title, ... } ]
   - `startingPrice` NUMBER rakhna (rupee sign frontend lagayega)
   - `isFeatured` se home page par sirf 6 dikhenge, baaki /packages page par
   - PRICES SAMPLE HAIN - client se confirm karna
   ============================================================ */

export const packages = [
  {
    id: 1,
    slug: "golden-triangle-tour",
    title: "Golden Triangle Tour",
    route: "Delhi - Agra - Jaipur - Delhi",
    duration: "4 Days / 3 Nights",
    startingPrice: 12999,
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80",
    tags: ["Taj Mahal", "Amber Fort", "Hawa Mahal"],
    isFeatured: true,
  },
  {
    id: 2,
    slug: "same-day-agra-tour",
    title: "Same Day Agra Tour",
    route: "Delhi - Agra - Delhi",
    duration: "1 Day",
    startingPrice: 4499,
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80",
    tags: ["Taj Mahal", "Agra Fort", "AC Cab"],
    isFeatured: true,
  },
  {
    id: 3,
    slug: "shimla-manali-tour",
    title: "Shimla Manali Hills",
    route: "Delhi - Shimla - Manali - Delhi",
    duration: "6 Days / 5 Nights",
    startingPrice: 18999,
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80",
    tags: ["Solang Valley", "Mall Road", "Kufri"],
    isFeatured: true,
  },
  {
    id: 4,
    slug: "char-dham-yatra",
    title: "Do Dham / Char Dham Yatra",
    route: "Delhi - Haridwar - Kedarnath - Badrinath",
    duration: "9 Days / 8 Nights",
    startingPrice: 24999,
    image: "https://images.unsplash.com/photo-1600100397608-e5d07e7c93e2?w=800&q=80",
    tags: ["Pilgrimage", "Tempo Traveller", "Hotel Included"],
    isFeatured: true,
  },
  {
    id: 5,
    slug: "haridwar-rishikesh-weekend",
    title: "Haridwar Rishikesh Weekend",
    route: "Delhi - Haridwar - Rishikesh - Delhi",
    duration: "3 Days / 2 Nights",
    startingPrice: 8999,
    image: "https://images.unsplash.com/photo-1591018653367-7ab94a4f3ba0?w=800&q=80",
    tags: ["Ganga Aarti", "River Rafting", "Temples"],
    isFeatured: true,
  },
  {
    id: 6,
    slug: "royal-rajasthan-tour",
    title: "Royal Rajasthan Tour",
    route: "Delhi - Jaipur - Jodhpur - Udaipur",
    duration: "7 Days / 6 Nights",
    startingPrice: 21999,
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=80",
    tags: ["Palaces", "Desert Safari", "Lake City"],
    isFeatured: true,
  },
];
