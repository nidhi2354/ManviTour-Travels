/* ============================================================
   FILE: src/data/services.js
   PURPOSE: Client ke visiting card par likhi 7 services. Home page ke
            "Our Services" section me cards banenge.

   BACKEND DEV NOTE
        GET /api/services  ->  [ { id, slug, title, description, icon, highlight } ]
   - `slug` future me service detail page ka URL banega: /services/airport-pick-drop
   - `icon` sirf frontend ka mapping key hai (react-icons), DB me string hi rakhna
   ============================================================ */

export const services = [
  {
    id: 1,
    slug: "tour-packages",
    title: "Tour Packages",
    description:
      "Ready-made and fully customised tour packages - Golden Triangle, Char Dham, Shimla-Manali and many more. Hotel, cab and driver all included.",
    icon: "FaMapLocationDot",
    highlight: true, // card par "Popular" badge dikhega
  },
  {
    id: 2,
    slug: "outstation-travel",
    title: "Outstation Travel",
    description:
      "Travel from Delhi to any city, one-way or round trip. Fixed per-kilometre rates, no hidden charges and experienced highway drivers.",
    icon: "FaRoad",
    highlight: false,
  },
  {
    id: 3,
    slug: "luxury-car-booking",
    title: "Luxury Car Booking",
    description:
      "Innova Crysta, Fortuner, Mercedes and BMW - premium cars for weddings, corporate meetings and VIP guest pickups.",
    icon: "FaCarSide",
    highlight: false,
  },
  {
    id: 4,
    slug: "luxury-bus-booking",
    title: "Luxury Bus Booking",
    description:
      "27 to 49 seater AC and non-AC buses for school trips, corporate outings, wedding parties and group pilgrimages.",
    icon: "FaBusSimple",
    highlight: false,
  },
  {
    id: 5,
    slug: "tempo-traveller",
    title: "Tempo Traveller",
    description:
      "9, 12, 17 and 20 seater Force Tempo Travellers with push-back seats, LED TV and an ice box - perfect for family trips.",
    icon: "FaVanShuttle",
    highlight: true,
  },
  {
    id: 6,
    slug: "delhi-sightseeing",
    title: "Delhi Sightseeing",
    description:
      "Red Fort, Qutub Minar, India Gate, Akshardham and Lotus Temple - full day or half day guided Delhi city tours.",
    icon: "FaLandmarkDome",
    highlight: false,
  },
  {
    id: 7,
    slug: "airport-pick-drop",
    title: "Airport Pick & Drop",
    description:
      "On-time pickup and drop for IGI Airport T1, T2 and T3. Live flight tracking, 60 minutes free waiting and meet-and-greet service.",
    icon: "FaPlaneDeparture",
    highlight: true,
  },
];
