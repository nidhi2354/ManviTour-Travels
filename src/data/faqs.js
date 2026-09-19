/* ============================================================
   FILE: src/data/faqs.js
   PURPOSE: /services page ka FAQ section.

   FAQ KYUN ZAROORI HAI (ye sirf "extra content" nahi hai):

   1. LEAD BACHATA HAI
      Har un-answered sawaal ek ruka hua customer hai. Jo log
      "toll included hai kya?" ka jawab nahi dhoondh paate, wo
      call nahi karte - wo kisi aur ki site par chale jaate hain.

   2. OWNER KA TIME BACHATA HAI
      Wahi 8 sawaal din bhar phone par poochhe jaate hain. Yahan
      likhe hone se call seedha "booking" se shuru hoti hai.

   3. GOOGLE ISE ALAG SE DIKHATA HAI
      Sawaal-jawab format Google ke "People also ask" me aata hai.

   BACKEND DEV NOTE
        GET /api/faqs  ->  [ { id, question, answer } ]
   Client ko khud FAQ add karne dena chahiye - naye sawaal roz aate hain.

   ============================================================
   ⚠️ CLIENT SE CONFIRM KARNE WALE JAWAB
   ============================================================
   Neeche jin entries par "CONFIRM" likha hai, unka jawab maine
   site ki baaki baaton se banaya hai - client ne khud nahi bataya.
   FAQ ka jawab ek VAADA hota hai; galat jawab par customer mauke
   par ladta hai. Live jaane se pehle ye 3 zaroor confirm karein.
   ============================================================ */

export const faqs = [
  {
    id: 1,
    question: "How do I book a vehicle?",
    // Site ki baaki copy se match karta hai
    answer:
      "Call us, message on WhatsApp, or fill in the enquiry form on this website. Share your travel date, route and number of passengers - we send you our best rate within 15 minutes. Once you approve it, the booking is confirmed.",
  },
  {
    id: 2,
    question: "Are the rates per kilometre or per day?",
    // CONFIRM: per-day / package rate ka structure client se pakka karein
    answer:
      "Most vehicles are booked on a per-kilometre basis, and that rate is listed on our Fleet page. Full day city use, weddings and multi-day trips are usually quoted as a package instead. Tell us the trip and we will tell you which one works out cheaper for you.",
  },
  {
    id: 3,
    question: "Is toll, parking and state tax included in the rate?",
    // VERIFIED: Fleet section ke disclaimer se bilkul same baat
    answer:
      "No. Toll, parking, state tax and driver allowance are charged separately unless your package specifically says they are included. We tell you the full expected cost at the time of booking, so nothing is a surprise at the end of the trip.",
  },
  {
    id: 4,
    question: "Do you provide a GST invoice?",
    // VERIFIED: GST certificate se
    answer:
      "Yes. We are a GST registered proprietorship and can issue a proper GST invoice for every booking. Corporate clients who need monthly billing can tell us at the time of booking.",
  },
  {
    id: 5,
    question: "How early should I book?",
    // CONFIRM: client se pooch kar asli lead time likhein
    answer:
      "Airport transfers can often be arranged the same day. For tempo travellers, buses and outstation trips, a day or two in advance is safer. During wedding season and holidays, book as early as you can - the good vehicles go first.",
  },
  {
    id: 6,
    question: "Will I know the driver before the trip?",
    // Site ki baaki copy (WhyChooseUs) se match karta hai
    answer:
      "Yes. You receive the driver's name, phone number and vehicle number before the trip starts, so you are never guessing who is at your gate. All our drivers are police-verified and badge-holding.",
  },
  {
    id: 7,
    question: "Do you travel outside Delhi NCR?",
    // VERIFIED: services.js aur fleet.js (All India Permit) se
    answer:
      "Yes. Outstation trips across North India are a large part of what we do - Agra, Jaipur, Haridwar, Rishikesh, Shimla, Manali, Chandigarh, Nainital and more. Our vehicles carry All India Permits, so longer routes are not a problem either.",
  },
  {
    id: 8,
    question: "What happens if I need to cancel?",
    /* CONFIRM - SABSE ZAROORI:
       Cancellation policy maine JAANBUJH KAR nahi likhi. Ek galat
       cancellation term site par likh dena baad me paise ke jhagde
       me badalta hai. Client se unki asli policy lekar yahan likhein. */
    answer:
      "Call us as early as you can. The exact terms depend on the vehicle and how close it is to your travel date - we tell you those terms clearly at the time of booking, before you pay anything.",
  },
];
