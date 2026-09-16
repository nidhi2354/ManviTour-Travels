import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import Fleet from "../components/home/Fleet";
import Packages from "../components/home/Packages";
import WhyChooseUs from "../components/home/WhyChooseUs";
import HowItWorks from "../components/home/HowItWorks";
import Testimonials from "../components/home/Testimonials";
import CtaBanner from "../components/home/CtaBanner";
import Contact from "../components/home/Contact";

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
     4. Packages     -> DESIRE    : "arey Agra ka package accha hai!"
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
