/* ============================================================
   FILE: src/data/services.js
   PURPOSE: Client ke visiting card par likhi 7 services.
            Do jagah use hoti hain:
              - Home ka "Our Services" card grid (chhota text)
              - /services page ka detail block  (lamba text + includes)

   BACKEND DEV NOTE
        GET /api/services  ->  [ { id, slug, title, description, icon,
                                   highlight, longDescription, includes[],
                                   bestFor } ]
   - `slug` aage detail page ka URL banega: /services/airport-pick-drop.
     Abhi wahi slug /services page par HTML anchor (#airport-pick-drop)
     ki tarah kaam kar raha hai - card par click karo, neeche us
     service ke detail block par pahunch jaate ho.
   - `icon` sirf frontend ka mapping key hai (react-icons), DB me string hi rakhna
   - `includes` chhoti ticked list hai - 4 se zyada mat rakhna, warna
     card bhaari dikhta hai
   - `image` OPTIONAL hai. Jis service me photo ho, /services page ka
     detail panel icon ki jagah wo PHOTO dikhata hai. Photo na ho to
     icon hi chalta hai - dono ek saath sambhal liye gaye hain.
     Photo hamesha jeetegi: log gaadi ki tasveer dekh kar book karte
     hain, icon dekh kar nahi. Isliye jaise-jaise client photos de,
     waise-waise yahan `image` add karte jaana.

   ============================================================
   CONTENT KAHAN SE AAYA
   ============================================================
   Har service ka `description` client ke visiting card se hai.
   `longDescription`, `includes` aur `bestFor` maine usi baat ko
   khol kar likhe hain - koi NAYI service ya nayi suvidha nahi jodi.

   Phir bhi jahan "CONFIRM" likha hai, wo point client se pooch
   lena - wo suvidha wo de paate hain ya nahi. Website par likhi
   har baat ek vaada hai.
   ============================================================ */

export const services = [
  {
    id: 1,
    slug: "tour-packages",
    title: "Tour Packages",
    description:
      "Ready-made and fully customised tour packages - Golden Triangle, Char Dham, Shimla-Manali and many more. Hotel, cab and driver all included.",
    longDescription:
      "You tell us the dates and the budget, we plan the rest. Golden Triangle, Char Dham, Shimla-Manali, Rajasthan, Haridwar-Rishikesh - all of them run regularly from Delhi. Nothing on the list fits? We build the itinerary around your plan instead.",
    includes: [
      "Hotel, cab and driver together",
      "Day-wise sightseeing plan",
      "All India permit vehicles",
      "Fully customisable dates and route",
    ],
    bestFor: "Families and groups planning a multi-day trip",
    icon: "FaMapLocationDot",
    highlight: true, // card par "Popular" badge dikhega
  },
  {
    id: 2,
    slug: "outstation-travel",
    title: "Outstation Travel",
    description:
      "Travel from Delhi to any city, one-way or round trip. Fixed per-kilometre rates, no hidden charges and experienced highway drivers.",
    longDescription:
      "Delhi to any city in North India - Agra, Jaipur, Chandigarh, Dehradun, Nainital and beyond. The per-kilometre rate is agreed before the vehicle leaves, so the number you hear at booking is the number you pay. Our drivers run these highways every week.",
    includes: [
      "One way or round trip",
      "Per-km rate fixed before the trip",
      "Experienced highway drivers",
      "All India permit vehicles",
    ],
    bestFor: "Weekend trips, weddings and out-of-town work",
    icon: "FaRoad",
    highlight: false,
  },
  {
    id: 3,
    slug: "luxury-car-booking",
    title: "Luxury Car Booking",
    description:
      "Innova Crysta, Fortuner, Mercedes and BMW - premium cars for weddings, corporate meetings and VIP guest pickups.",
    longDescription:
      "When the car itself is part of the occasion. Premium sedans and SUVs with a uniformed driver, arriving at your doorstep on time and looking the part - for a wedding entry, a client pickup or a guest who should not be kept waiting.",
    includes: [
      "Uniformed, well-presented driver",
      "Doorstep pickup", // CONFIRM: har ilaake me doorstep possible hai?
      "Ribbon and flower decor on request", // fleet.js ke Wedding Car se
      "Airport and hotel pickups for guests",
    ],
    bestFor: "Weddings, corporate meetings and VIP guest pickups",
    icon: "FaCarSide",
    /* Client ki APNI Innova Crysta - fleet ki sabse premium gaadi.
       Stock photo nahi li: customer jo tasveer dekhta hai, wahi gaadi
       uske darwaze par aani chahiye.
       Photo badalni ho to bas ye path badal dein. */
    image: "/fleet/innova-crysta.jpg",
    highlight: false,
  },
  {
    id: 4,
    slug: "luxury-bus-booking",
    title: "Luxury Bus Booking",
    description:
      "27 to 49 seater AC and non-AC buses for school trips, corporate outings, wedding parties and group pilgrimages.",
    longDescription:
      "For when the whole group has to move together. 27 to 49 seater buses, AC and non-AC, with enough luggage space for a multi-day trip. One vehicle, one driver, one bill - instead of five cars and five sets of instructions.",
    includes: [
      "27 to 49 seater, AC and non-AC",
      "Push-back seats",
      "Large luggage space",
      "Single-day or multi-day trips",
    ],
    bestFor: "School trips, corporate outings, weddings and pilgrimages",
    icon: "FaBusSimple",
    highlight: false,
  },
  {
    id: 5,
    slug: "tempo-traveller",
    title: "Tempo Traveller",
    description:
      "9, 12, 17 and 20 seater Force Tempo Travellers with push-back seats, LED TV and an ice box - perfect for family trips.",
    longDescription:
      "The most booked vehicle for family trips, and for good reason. Everybody travels together, the seats push back for long highway stretches, and there is room for the luggage that a hill trip always ends up carrying.",
    includes: [
      "9, 12, 17 and 20 seater options",
      "Push-back seats",
      "LED TV and ice box",
      "All India permit",
    ],
    bestFor: "Families and groups of 8 to 20 people",
    icon: "FaVanShuttle",
    highlight: true,
  },
  {
    id: 6,
    slug: "delhi-sightseeing",
    title: "Delhi Sightseeing",
    description:
      "Red Fort, Qutub Minar, India Gate, Akshardham and Lotus Temple - full day or half day guided Delhi city tours.",
    longDescription:
      "Relatives visiting and no time to take them around yourself? We run full day and half day Delhi tours covering the monuments people actually want to see, with a driver who knows which gate to use and when the crowd is thinnest.",
    includes: [
      "Full day or half day",
      "Red Fort, Qutub Minar, India Gate, Akshardham, Lotus Temple",
      "AC vehicle with driver",
      "Pickup from your home or hotel",
    ],
    // Imaandari: monument ki entry ticket rate me nahi hoti - ye
    // ServiceDetails section ke neeche wale note me saaf likha hai.
    bestFor: "Out-of-town guests and first-time visitors to Delhi",
    icon: "FaLandmarkDome",
    highlight: false,
  },
  {
    id: 7,
    slug: "airport-pick-drop",
    title: "Airport Pick & Drop",
    description:
      "On-time pickup and drop for IGI Airport T1, T2 and T3. Live flight tracking, 60 minutes free waiting and meet-and-greet service.",
    longDescription:
      "A 3 AM flight is not the time to be refreshing a cab app. Book the night before and the vehicle is outside your gate before you are ready. For arrivals we track the flight, so a delayed landing does not mean a cancelled ride.",
    includes: [
      "IGI Airport T1, T2 and T3",
      "Live flight tracking for arrivals",
      "60 minutes free waiting", // CONFIRM: waiting ka time client se pakka karein
      "Meet and greet at the gate",
    ],
    bestFor: "Early morning flights and guest arrivals",
    icon: "FaPlaneDeparture",
    highlight: true,
  },
];
