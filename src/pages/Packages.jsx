import PageHeader from "../components/common/PageHeader";
import PackagesSection from "../components/sections/Packages";
import PackageInclusions from "../components/sections/PackageInclusions";
import HowItWorks from "../components/sections/HowItWorks";
import Testimonials from "../components/sections/Testimonials";
import CtaBanner from "../components/sections/CtaBanner";

/* ============================================================
   PAGE: /packages

   ============================================================
   HOME SE YE PAGE ALAG KAISE HAI
   ============================================================
   Home par sirf FEATURED package dikhte hain aur card chhota
   rehta hai - wo ek JHALAK hai. Yahan:
     - saare package, trip type ke filter ke saath
     - har card par "kab jaana chahiye" (bestTime) bhi
     - kya included hai aur KYA NAHI, poori list
     - jinka plan in packages me fit nahi baithta, unke liye
       custom package ka raasta

   ============================================================
   SECTION KA ORDER - kyun yahi
   ============================================================
     1. PageHeader        -> "aap Packages page par hain"
     2. Packages          -> CHUNAAV : filter + saare package
     3. PackageInclusions -> SAFAAI  : kya milega, kya nahi
     4. HowItWorks        -> "book kaise karun"
     5. Testimonials      -> BHAROSA : "auron ka trip accha gaya"
     6. CtaBanner         -> ACTION

   Inclusions ko package cards ke THEEK BAAD rakha hai, neeche
   nahi. Wajah: customer ne abhi-abhi price dekha hai. Uske
   dimaag me agla sawaal hai "isme kya kya aa jaayega?" - us
   sawaal ka jawab turant milna chahiye, warna wo apne hisaab
   se andaza laga lega. Aur galat andaza hi baad me jhagda banta hai.

   Testimonials yahan Home se ZYADA kaam karta hai. Package ek
   bade paise ka faisla hai (Rs 12,000+); wahan dusron ka
   experience padhna sabse zyada asar karta hai.

   ============================================================
   BACKGROUND KA RHYTHM
   ============================================================
     PageHeader        kaala
     Packages          kaala      <- dono kaale, par ye theek hai
     PackageInclusions safed
     HowItWorks        safed      <- neeche note dekhein
     Testimonials      halka peela
     CtaBanner         peela

   PageHeader aur Packages dono kaale hain - normally ye galat
   hota, par yahan sahi lagta hai: PageHeader ki patli patti
   seedha packages ke kaale section me ghul jaati hai aur ek
   bada "gallery" jaisa block ban jaata hai. Photos kaale
   background par sabse achhi dikhti hain.

   ============================================================
   AAGE (Phase 2) - DETAIL PAGES
   ============================================================
   /packages/:slug abhi nahi bana. Uske liye client se har
   package ki ye cheezein chahiye:
     [ ] Day-wise itinerary (Day 1 me kya, Day 2 me kya)
     [ ] Hotel ka naam ya category (3-star / 4-star)
     [ ] Har package ka apna inclusion/exclusion, agar alag ho
     [ ] Destination ki photos -> public/packages/ (abhi koi nahi,
         card brand wala fallback dikha raha hai)
   Ye mile bina detail page banana matlab jhooti itinerary
   likhna - wo nahi karna.
   ============================================================ */

export default function Packages() {
  return (
    <>
      <PageHeader
        eyebrow="Tour Packages"
        title="Ready-Made Tours Starting From Delhi"
        subtitle="Hotel, cab, driver and sightseeing - everything included in one price. Or tell us your plan and we will build a package around it."
      />

      {/* isPage -> trip type filter, saare package aur bestTime on */}
      <PackagesSection isPage />

      <PackageInclusions />
      <HowItWorks />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
