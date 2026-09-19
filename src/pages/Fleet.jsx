import PageHeader from "../components/common/PageHeader";
import FleetSection from "../components/sections/Fleet";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import HowItWorks from "../components/sections/HowItWorks";
import CtaBanner from "../components/sections/CtaBanner";

/* ============================================================
   PAGE: /fleet

   PURPOSE: Saari gaadiyan ek jagah - photo, seats, luggage aur
   rate per km ke saath. Customer ka sabse bada sawaal "kaunsi
   gaadi, kitne ki" - is page par poora jawab milta hai.

   ============================================================
   HOME SE YE PAGE ALAG KAISE HAI
   ============================================================
   Home par fleet ek JHALAK hai - 6 gaadi, bas dikhane ke liye.
   Yahan wahi section ek TOOL ban jaata hai: do filter lagte hain
   (gaadi ka type + kitne log), result count dikhta hai, aur kuch
   na mile to ek empty state raasta deta hai.

   Dono jagah component EK HI hai (sections/Fleet.jsx) - farq
   sirf isPage prop se aata hai. Do alag component banate to
   kal rate badalne par do jagah badalna padta.

   ============================================================
   WhyChooseUs YAHAN KYUN?
   ============================================================
   Rate dekhne ke turant baad customer ke dimaag me ek hi sawaal
   aata hai: "itna paisa dene layak hain ye log?" Us sawaal ka
   jawab theek uske neeche hona chahiye - isliye WhyChooseUs
   rates ke baad rakha hai, HowItWorks se bhi pehle.

   ============================================================
   BACKGROUND KA RHYTHM
   ============================================================
     PageHeader    kaala
     Fleet         safed
     WhyChooseUs   halka peela
     HowItWorks    safed
     CtaBanner     peela

   ============================================================
   AAGE (Phase 2)
   ============================================================
     [ ] Budget filter (rate per km ki range)
     [ ] Filter URL me save ho (?type=tempo) - taaki customer
         apne dost ko wahi filtered link bhej sake
     [ ] Fare calculator: ratePerKm x distance
   ============================================================ */

export default function Fleet() {
  return (
    <>
      <PageHeader
        eyebrow="Our Fleet"
        title="Clean, Modern & Well-Maintained Vehicles"
        subtitle="From a 4 seater sedan to a 45 seater luxury coach - pick the vehicle that fits your trip, with the rate shown upfront."
      />

      {/* isPage -> filter bar, poori list aur result count on ho jaate hain */}
      <FleetSection isPage />

      <WhyChooseUs />
      <HowItWorks />
      <CtaBanner />
    </>
  );
}
