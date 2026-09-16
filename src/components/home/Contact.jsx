import {
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaWhatsapp,
} from "react-icons/fa6";
import SectionHeading from "../common/SectionHeading";
import EnquiryForm from "../common/EnquiryForm";
import { siteConfig } from "../../data/siteConfig";

/* ============================================================
   SECTION 11 of 12: CONTACT

   PURPOSE:
   Har visitor alag tareeke se contact karna chahta hai -
   koi call, koi WhatsApp, koi email, aur koi seedha dukaan aana.
   Isliye yahan CHAARO options ek saath diye gaye hain.

   ADDRESS + MAP KA ASLI PURPOSE:
   Local business ke liye ye sabse bada trust signal hai.
   "Iska asli office hai, bhaag nahi sakte" - ye feeling deta hai.
   Address GST certificate se hu-ba-hu liya gaya hai.

   LAYOUT: 5:7 grid - baayein contact info, daayein form.
   Form ko zyada jagah isliye ki wahi main action hai.
   ============================================================ */

/* Contact cards ka data - map() se render karne ke liye.
   Component ke bahar isliye taaki har render par dobara na bane. */
const contactMethods = [
  {
    id: 1,
    icon: FaPhone,
    label: "Call Us",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phoneRaw}`,
    note: "24x7 available",
  },
  {
    id: 2,
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: siteConfig.phone,
    href: `https://wa.me/${siteConfig.whatsapp}`,
    note: "Instant reply",
  },
  {
    id: 3,
    icon: FaEnvelope,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    note: "For corporate enquiries",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-y bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="Contact Us"
          title="Let's Plan Your Journey Together"
          subtitle="Call us, message us on WhatsApp or fill in the form below - whichever suits you best. We respond to every enquiry within 15 minutes."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* ============================================
              BAAYI TARAF: CONTACT DETAILS + MAP
              ============================================ */}
          <div className="space-y-6 lg:col-span-5">
            {/* ---- Contact method cards ---- */}
            <div className="space-y-4">
              {contactMethods.map(({ id, icon: MethodIcon, label, value, href, note }) => (
                <a
                  key={id}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 rounded-2xl border border-ink-900/10 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-500 hover:shadow-lg"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-500 text-ink-900">
                    <MethodIcon className="text-lg" />
                  </span>

                  <span className="min-w-0">
                    <span className="block font-display text-xs font-bold uppercase tracking-wider text-ink-700/60">
                      {label}
                    </span>
                    <span className="block truncate font-display text-base font-bold text-ink-900">
                      {value}
                    </span>
                    <span className="block text-xs text-ink-700/60">{note}</span>
                  </span>
                </a>
              ))}
            </div>

            {/* ---- Office address card (dark) ----
                Dark rakha taaki ye baaki cards se alag dikhe -
                ye "office ka pata" hai, sabse important info. */}
            <div className="rounded-2xl bg-ink-900 p-6 text-white">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-500 text-ink-900">
                  <FaLocationDot className="text-lg" />
                </span>

                <div>
                  <p className="font-display text-xs font-bold uppercase tracking-wider text-brand-500">
                    Our Office
                  </p>

                  {/* Address GST certificate se, line by line */}
                  <address className="mt-2 text-sm not-italic leading-relaxed text-white/80">
                    {siteConfig.address.shop},<br />
                    {siteConfig.address.building},<br />
                    {siteConfig.address.locality}, {siteConfig.address.landmark},
                    <br />
                    {siteConfig.address.city} &ndash; {siteConfig.address.pincode}
                  </address>

                  <p className="mt-3 flex items-center gap-2 text-sm text-brand-400">
                    <FaClock /> {siteConfig.workingHours}
                  </p>
                </div>
              </div>
            </div>

            {/* ---- Google Map ----
                loading="lazy" zaroori hai - map bhaari hota hai,
                bina lazy ke page speed girti hai.
                aspect-[16/10] se har screen par shape same rehta hai. */}
            <div className="overflow-hidden rounded-2xl border border-ink-900/10">
              <iframe
                src={siteConfig.mapEmbedUrl}
                title="Manvi Tour & Travels office location map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="aspect-[16/10] w-full"
                style={{ border: 0 }}
              />
            </div>
          </div>

          {/* ============================================
              DAAYI TARAF: POORA ENQUIRY FORM
              variant="full" -> message wala textarea bhi dikhega
              ============================================ */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-ink-900/10 bg-brand-50/50 p-6 sm:p-8">
              <h3 className="text-2xl">Send Us An Enquiry</h3>
              <p className="mt-2 text-sm text-ink-700/70">
                Share your details below. Our team will call you within 15 minutes
                with the best available rate.
              </p>

              <div className="mt-7">
                <EnquiryForm variant="full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
