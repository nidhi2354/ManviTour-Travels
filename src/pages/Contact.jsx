import PageHeader from "../components/common/PageHeader";
import ContactSection from "../components/sections/Contact";

/* 
   PAGE: /contact
 */

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact Us"
        title="Let us Plan Your Journey Together"
        subtitle="Call us, message on WhatsApp or fill in the form - whichever suits you. Every enquiry gets a reply within 15 minutes."
      />

      <ContactSection isPage />
    </>
  );
}
