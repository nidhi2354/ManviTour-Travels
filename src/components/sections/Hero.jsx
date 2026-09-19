import { FaPhone, FaStar, FaShieldHalved, FaWhatsapp } from "react-icons/fa6";
import Button from "../common/Button";
import EnquiryForm from "../common/EnquiryForm";
import { siteConfig } from "../../data/siteConfig";
import { stats } from "../../data/homeContent";

/* ============================================================
   SECTION 3 of 12: HERO (sabse pehli badi screen)

   PURPOSE - ye section 3 sawaalon ka jawab 5 SECOND me deta hai:
     1. "Ye kya karte hain?"      -> heading + sub-heading
     2. "Bharosemand hain kya?"   -> GST badge, rating, stats strip
     3. "Book kaise karun?"       -> Call button + Enquiry form

   LAYOUT SOCH:
     Desktop: 2 column - baayein message, daayein form (7:5 ratio)
     Mobile : ek ke neeche ek - pehle message, phir form

   BACKGROUND: kaala (ink-900) isliye rakha kyunki client ke visiting
   card ka background bhi kaala hai - brand identity match karti hai,
   aur peela text uspar sabse zyada pop karta hai.
   ============================================================ */

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-ink-900 pb-16 pt-14 md:pb-24 md:pt-20"
    >
      {/* ---------- DECORATIVE BACKGROUND ---------- */}
      {/* Peela glow - hero ko flat kaale box jaisa lagne se bachata hai */}
      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-brand-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-sun-500/10 blur-[120px]" />

      {/* Dotted pattern - card par bhi aise hi dots the */}
      <div
        className="pointer-events-none absolute right-10 top-16 hidden h-40 w-40 opacity-30 lg:block"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--color-brand-500) 1.5px, transparent 1.5px)",
          backgroundSize: "14px 14px",
        }}
      />

      <div className="container-x relative">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* ============================================
              BAAYI TARAF (7 columns) - MESSAGE + CTA
              ============================================ */}
          <div className="lg:col-span-7">
            {/* --- Trust badge --- */}
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-2">
              <FaShieldHalved className="text-brand-500" />
              <span className="font-display text-xs font-bold uppercase tracking-wider text-brand-400">
                GST Registered &middot; Delhi NCR
              </span>
            </div>

            {/* --- H1 ---
                NOTE: poore page par sirf EK <h1> hona chahiye.
                Google isi se samajhta hai ki page kis baare me hai (SEO). */}
            <h1 className="mt-6 text-4xl leading-[1.1] text-white sm:text-5xl lg:text-6xl">
              Delhi NCR&rsquo;s Most{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-brand-500">Trusted</span>
                {/* text ke peeche brush-stroke jaisa highlight */}
                <span className="absolute bottom-1 left-0 z-0 h-3 w-full -rotate-1 bg-brand-500/20" />
              </span>{" "}
              Travel Partner
            </h1>

            {/* --- Sub-heading ---
                Yahan wo saari services ek line me aa jaati hain jo
                visiting card par likhi hain. */}
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              Airport pick &amp; drop, outstation taxi, tempo travellers, luxury
              cars and tour packages across India &mdash; all in one place. Clean
              vehicles, verified drivers and fixed rates, every single time.
            </p>

            {/* --- CTA BUTTONS ---
                PRIMARY (peela) = phone call. Travel me 70% booking
                call se hoti hai, isliye usse sabse zyada prominence.
                SECONDARY = WhatsApp, un logon ke liye jo call nahi karna chahte. */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button as="a" href={`tel:${siteConfig.phoneRaw}`} variant="primary" size="lg">
                <FaPhone /> {siteConfig.phone}
              </Button>

              <Button
                as="a"
                href={`https://wa.me/${siteConfig.whatsapp}?text=Hello%20Manvi%20Tour%20%26%20Travels,%20I%20would%20like%20to%20know%20more%20about%20booking`}
                target="_blank"
                rel="noopener noreferrer"
                variant="white"
                size="lg"
              >
                <FaWhatsapp className="text-lg text-green-600" /> Chat on WhatsApp
              </Button>
            </div>

            {/* --- Rating strip - chhota sa social proof --- */}
            <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-brand-500" />
                ))}
              </div>
              <p className="text-sm text-white/60">
                <span className="font-bold text-white">4.8/5</span> rating from
                more than 2,000 satisfied customers
              </p>
            </div>
          </div>

          {/* ============================================
              DAAYI TARAF (5 columns) - ENQUIRY FORM
              Form ko hero me rakhne ka purpose: visitor ko
              scroll karne ka intezaar nahi karwana. Lead pehli
              screen par hi capture ho jaaye.
              ============================================ */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-white p-6 shadow-2xl shadow-black/40 sm:p-7">
              <div className="mb-5">
                <h2 className="text-xl sm:text-2xl">Get a Free Quote</h2>
                <p className="mt-1 text-sm text-ink-700/70">
                  Fill in the form and we will send you our best rate within 15 minutes.
                </p>
              </div>

              <EnquiryForm variant="compact" />
            </div>
          </div>
        </div>

        {/* ============================================
            STATS STRIP - hero ke bilkul neeche
            PURPOSE: numbers me baat karne se bharosa jaldi banta hai.
            Grid: mobile par 2 column, desktop par 4.
            ============================================ */}
        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-4">
          {stats.map((item) => (
            <div key={item.id} className="bg-ink-900 px-4 py-6 text-center">
              <p className="font-display text-3xl font-extrabold text-brand-500 sm:text-4xl">
                {item.value}
              </p>
              <p className="mt-1 text-xs text-white/60 sm:text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
