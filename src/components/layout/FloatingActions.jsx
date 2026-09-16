import { FaPhone, FaWhatsapp } from "react-icons/fa6";
import { siteConfig } from "../../data/siteConfig";

/* ============================================================
   COMPONENT: <FloatingActions />

   PURPOSE:
   Mobile par 70% se zyada traffic aata hai, aur mobile user
   scroll karte-karte contact section tak pahunchne se pehle hi
   chala jaa sakta hai. Ye do buttons HAMESHA screen par rehte hain
   taaki call/WhatsApp kabhi bhi ek tap door ho.

   2 ALAG LAYOUTS:
   1. MOBILE (lg se chhoti screen): neeche poori chaudai ka bar.
      Angootha (thumb) aasani se pahunchta hai - "thumb zone" rule.
   2. DESKTOP (lg+): daayein kinare par ek gol WhatsApp button.
      Desktop par bada bar page ko dhak leta, isliye chhota rakha.

   PADDING NOTE: mobile bar page ke aakhri content ko dhak sakta hai,
   isliye App.jsx me <main> par pb-20 lg:pb-0 diya gaya hai.
   ============================================================ */

export default function FloatingActions() {
  const whatsappLink = `https://wa.me/${siteConfig.whatsapp}?text=Hello%20Manvi%20Tour%20%26%20Travels,%20I%20would%20like%20to%20know%20more%20about%20booking`;

  return (
    <>
      {/* ---------- MOBILE: bottom action bar ---------- */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-ink-900/10 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.08)] lg:hidden">
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          className="flex items-center justify-center gap-2 py-4 font-display text-sm font-bold text-ink-900 active:bg-brand-50"
        >
          <FaPhone className="text-brand-600" /> Call Now
        </a>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-brand-500 py-4 font-display text-sm font-bold text-ink-900 active:bg-brand-400"
        >
          <FaWhatsapp className="text-lg" /> WhatsApp
        </a>
      </div>

      {/* ---------- DESKTOP: floating WhatsApp bubble ---------- */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message us on WhatsApp"
        className="group fixed bottom-8 right-8 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl shadow-green-500/40 transition-transform hover:scale-110 lg:flex"
      >
        {/* Ping animation - dhyan kheenchne ke liye */}
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-40" />
        <FaWhatsapp className="relative text-2xl" />
      </a>
    </>
  );
}
