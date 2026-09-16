import {
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaArrowUp,
} from "react-icons/fa6";
import Logo from "../common/Logo";
import { siteConfig, navLinks } from "../../data/siteConfig";
import { services } from "../../data/services";

/* ============================================================
   SECTION 12 of 12: FOOTER

   PURPOSE (3 kaam ek saath):
   1. NAVIGATION - jo visitor neeche tak scroll kar gaya, usse
      wapas upar jaane ke liye links mile.
   2. SEO - services ke naam aur city ka naam footer me hone se
      Google ko samajh aata hai ki ye Delhi ka travel business hai.
   3. LEGAL / TRUST - GSTIN, legal name aur address dikhana.
      Registered business ke liye ye professional practice hai.

   4 COLUMN LAYOUT:
     Mobile  -> 1 column (sab upar-neeche)
     Tablet  -> 2 column
     Desktop -> 4 column (brand thoda chauda: lg:col-span-4)
   ============================================================ */

export default function Footer() {
  // Footer ka saal apne aap update ho jaayega - har January manually
  // badalne ki zaroorat nahi
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-ink-900 text-white">
      {/* ---------- MAIN FOOTER ---------- */}
      <div className="container-x py-14 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          {/* ---- COLUMN 1: Brand + address + socials ---- */}
          <div className="lg:col-span-4">
            <Logo variant="light" />

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
              {siteConfig.tagline}. Verified drivers, spotless vehicles and fixed
              rates &mdash; {siteConfig.workingHours}.
            </p>

            {/* Social icons */}
            <div className="mt-6 flex items-center gap-3">
              {[
                { Icon: FaFacebookF, href: siteConfig.socials.facebook, label: "Facebook" },
                { Icon: FaInstagram, href: siteConfig.socials.instagram, label: "Instagram" },
                { Icon: FaYoutube, href: siteConfig.socials.youtube, label: "YouTube" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-brand-500 hover:text-ink-900"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* ---- COLUMN 2: Quick links ---- */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-brand-500">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-sm text-white/65 transition-colors hover:text-brand-500"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ---- COLUMN 3: Services (SEO ke liye important) ---- */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-brand-500">
              Our Services
            </h3>

            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="text-sm text-white/65 transition-colors hover:text-brand-500"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ---- COLUMN 4: Contact ---- */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-brand-500">
              Get In Touch
            </h3>

            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <FaLocationDot className="mt-1 shrink-0 text-brand-500" />
                <address className="not-italic leading-relaxed text-white/65">
                  {siteConfig.addressLine}
                </address>
              </li>

              <li className="flex gap-3">
                <FaPhone className="mt-1 shrink-0 text-brand-500" />
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="font-semibold text-white transition-colors hover:text-brand-500"
                >
                  {siteConfig.phone}
                </a>
              </li>

              <li className="flex gap-3">
                <FaEnvelope className="mt-1 shrink-0 text-brand-500" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="break-all text-white/65 transition-colors hover:text-brand-500"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>

            {/* GST info box - legal + trust */}
            <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs text-white/50">GSTIN</p>
              <p className="font-display text-sm font-bold text-brand-500">
                {siteConfig.gstin}
              </p>
              <p className="mt-2 text-xs text-white/50">
                {siteConfig.constitution} &middot; Proprietor:{" "}
                {siteConfig.ownerName}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- BOTTOM BAR ---------- */}
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-4 py-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/50">
            &copy; {currentYear} {siteConfig.brandName}{" "}
            {siteConfig.brandSuffix}. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a href="#home" className="text-xs text-white/50 hover:text-brand-500">
              Privacy Policy
            </a>
            <a href="#home" className="text-xs text-white/50 hover:text-brand-500">
              Terms &amp; Conditions
            </a>

            {/* Back to top button */}
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-500 text-ink-900 transition-transform hover:-translate-y-0.5"
            >
              <FaArrowUp className="text-xs" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
