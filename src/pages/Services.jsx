import PageHeader from "../components/common/PageHeader";
import ServicesSection from "../components/sections/Services";
import ServiceDetails from "../components/sections/ServiceDetails";
import Faq from "../components/sections/Faq";
import HowItWorks from "../components/sections/HowItWorks";
import CtaBanner from "../components/sections/CtaBanner";

/* ============================================================
   PAGE: /services

   IMPORT KA NAAM "ServicesSection" KYUN HAI?
   Is file ka component bhi "Services" hai aur section ka bhi.
   Ek hi file me do "Services" naam nahi ho sakte, isliye import
   ko naya naam de diya. Ye React ka normal tareeka hai.

   ============================================================
   HOME SE YE PAGE ALAG KAISE HAI
   ============================================================
   Home par services ka sirf ek card grid hai - "hum ye 7 kaam
   karte hain", bas. Wahi grid yahan bhi hai, par yahan uska kaam
   alag hai: wo ab ek INDEX hai. Card par click karo, aur neeche
   us service ke poore detail block par pahunch jaate ho (#slug).

   Yahi "page" aur "section" ka fark hai. Section jhalak deta hai,
   page jawab deta hai.

   ============================================================
   SECTION KA ORDER - kyun yahi
   ============================================================
     1. PageHeader     -> "aap Services page par hain"
     2. Services grid  -> INDEX : 7 services ek nazar me
     3. ServiceDetails -> JAWAB : har service me kya-kya milega
     4. Faq            -> BACHE HUE SHAK : toll, GST, cancel...
     5. HowItWorks     -> "theek hai, book kaise karun"
     6. CtaBanner      -> ACTION

   FAQ ko HowItWorks se PEHLE rakha hai. Wajah: booking ka tareeka
   dikhane se pehle uske DAR khatam hone chahiye. Ulta karne par
   customer process to dekh leta hai par "toll kaun dega" wala
   sawaal lekar wahin ruk jaata hai.

   ============================================================
   BACKGROUND KA RHYTHM
   ============================================================
     PageHeader      kaala
     Services grid   halka peela
     ServiceDetails  safed
     Faq             halka peela
     HowItWorks      safed
     CtaBanner       peela

   Do ek jaise background kabhi aaspaas nahi - warna do alag
   section ek hi lambe block jaise dikhte hain.
   ============================================================ */

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="One Solution For Every Journey"
        subtitle="Airport transfers, outstation trips, tempo travellers, luxury cars, buses and complete tour packages - everything under one roof."
      />

      {/* isPage -> grid apna heading aur "View All Services" button
          chhupa deta hai, aur har card ka link neeche wale detail
          block par jump karne lagta hai */}
      <ServicesSection isPage />

      <ServiceDetails />
      <Faq />
      <HowItWorks />
      <CtaBanner />
    </>
  );
}
