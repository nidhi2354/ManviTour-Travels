import PageHeader from "../components/common/PageHeader";
import OurStory from "../components/sections/OurStory";
import OwnerMessage from "../components/sections/OwnerMessage";
import ServiceAreas from "../components/sections/ServiceAreas";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import HowItWorks from "../components/sections/HowItWorks";
import Testimonials from "../components/sections/Testimonials";
import CtaBanner from "../components/sections/CtaBanner";

/* ============================================
   PAGE: /about
   =========================================
 */

export default function About() {
  return (
    <>

      <PageHeader
        eyebrow="About Us"
        title="Delhi NCR's Trusted Travel Partner"
        subtitle="A GST registered travel business run from Dwarka, New Delhi - with verified drivers, well-maintained vehicles and rates that never change after booking."
        image="/about/manvi-showroom.jpg"
        imageFallback="/fleet/innova-crysta.jpg"
        imageAlt="Manvi Tour & Travels team taking delivery of a new vehicle at the Mahindra showroom"
      />

      <OurStory />
      <OwnerMessage />
      <ServiceAreas />


      <WhyChooseUs isPage />

      <HowItWorks />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
