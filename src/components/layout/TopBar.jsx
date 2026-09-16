import { FaPhone, FaEnvelope, FaClock, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";
import { siteConfig } from "../../data/siteConfig";

/* ============================================================
   SECTION 1 of 12: TOP BAR (sabse upar ki patli kaali strip)

   PURPOSE (client ko ye batana):
   Travel business me customer "form bharne" se zyada "phone karne"
   me comfortable hota hai. Isliye phone number website ki sabse
   upar wali line me hai - dhoondhna na pade.

   RESPONSIVE BEHAVIOUR:
   Mobile par ye bar HIDE ho jaata hai (hidden lg:block) kyunki
   chhoti screen par jagah keemti hai - wahan iski jagah neeche ek
   floating call button diya gaya hai.
   ============================================================ */

export default function TopBar() {
  return (
    <div className="hidden bg-ink-900 text-white lg:block">
      <div className="container-x flex h-11 items-center justify-between text-xs">
        {/* ---- BAAYI TARAF: contact details ---- */}
        <div className="flex items-center gap-6">
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="flex items-center gap-2 transition-colors hover:text-brand-500"
          >
            <FaPhone className="text-brand-500" />
            <span className="font-semibold">{siteConfig.phone}</span>
          </a>

          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-2 transition-colors hover:text-brand-500"
          >
            <FaEnvelope className="text-brand-500" />
            <span>{siteConfig.email}</span>
          </a>

          <span className="flex items-center gap-2 text-white/70">
            <FaClock className="text-brand-500" />
            {siteConfig.workingHours}
          </span>
        </div>

        {/* ---- DAAYI TARAF: GST number + social icons ----
             GST number dikhane ka purpose: "ye registered business hai"
             ka signal. Corporate clients isse dhoondhte hain. */}
        <div className="flex items-center gap-5">
          <span className="text-white/60">
            GSTIN: <span className="font-semibold text-white/90">{siteConfig.gstin}</span>
          </span>

          <div className="flex items-center gap-2">
            {[
              { Icon: FaFacebookF, href: siteConfig.socials.facebook, label: "Facebook" },
              { Icon: FaInstagram, href: siteConfig.socials.instagram, label: "Instagram" },
              { Icon: FaYoutube, href: siteConfig.socials.youtube, label: "YouTube" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-brand-500 hover:text-ink-900"
              >
                <Icon className="text-[11px]" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
