import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import Fleet from "../components/sections/Fleet";
import Packages from "../components/sections/Packages";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import HowItWorks from "../components/sections/HowItWorks";
import Testimonials from "../components/sections/Testimonials";
import CtaBanner from "../components/sections/CtaBanner";
import Contact from "../components/sections/Contact";

/* ============================================================
   PAGE: HOME

   Ye file khud koi design nahi karti - ye sirf sections ko SAHI
   TAREEB (order) me jodti hai. Isse "composition" kehte hain.

   FAYDA: koi bhi developer ek nazar me poora page ka flow samajh
   sakta hai. Section ka order badalna ho? Bas line upar-neeche kar do.

   ============================================================
   PAGE KA FLOW - KYUN YAHI ORDER HAI (ye sales funnel hai)
   ============================================================
     1. Hero         -> ATTENTION : "ye kaun hain, kya karte hain"
     2. Services     -> INTEREST  : "mera kaam ye karte hain ya nahi"
     3. Fleet        -> EVALUATION: "gaadi kaisi, rate kitna"
     4. Packages     -> DESIRE    : "ready-made tour, khud plan nahi banana"
     5. WhyChooseUs  -> OBJECTION : "par bharosa karun kaise?"
     6. HowItWorks   -> CLARITY   : "book karna aasaan hai"
     7. Testimonials -> PROOF     : "auron ka experience accha raha"
     8. CtaBanner    -> URGENCY   : "chalo ab call kar hi lete hain"
     9. Contact      -> ACTION    : form / phone / address

   Har section pichle section ka jawab hai. Order badla to funnel
   toot jaayega - isliye badalne se pehle ye soch samajh lena.
   ============================================================ */

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Fleet />
      <Packages />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <CtaBanner />
      <Contact />
    </>
  );
}
