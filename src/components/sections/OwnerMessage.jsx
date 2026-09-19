import { FaQuoteRight, FaPhone, FaWhatsapp } from "react-icons/fa6";
import Button from "../common/Button";
import { ownerMessage } from "../../data/about";
import { siteConfig } from "../../data/siteConfig";

/* ============================================================
   SECTION: OWNER KA MESSAGE  (/about page)

   PURPOSE:
   Chhote business me sabse bada trust signal owner ka NAAM aur
   CHEHRA hota hai. Log "company" se darte hain, "aadmi" par
   bharosa karte hain. GST certificate par proprietor ka naam
   Rakesh hai - wahi naam yahan saamne rakha gaya hai.

   BACKGROUND KAALA KYUN?
   Is page par upar wala section safed hai. Achanak kaala block
   aane se aankh yahan rukti hai. Owner ka message page ka sabse
   personal hissa hai - use miss nahi hona chahiye.

   PHOTO KI JAGAH AKSHAR KYUN?
   Client ne abhi apni photo nahi di. Stock photo me kisi anjaan
   aadmi ka chehra laga dena = seedha jhooth, aur pakda bhi jaata
   hai. Isliye naam ka pehla akshar ek peele circle me - Testimonials
   wale cards jaisa. Asli photo aate hi data/about.js me
   photo: "/owner.jpg" kar dena, ye component apne aap sambhal lega.
   ============================================================ */

export default function OwnerMessage() {
  return (
    <section className="relative overflow-hidden bg-ink-900 py-16 md:py-20">
      {/* Peela glow - Hero aur PageHeader jaisa, taaki poori site ek
          hi design language me lage */}
      <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-brand-500/15 blur-[120px]" />

      <div className="container-x relative">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
          {/* ============================================
              BAAYI TARAF: kaun keh raha hai
              ============================================ */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-5 lg:flex-col lg:items-start">
              {/* Avatar - asli photo ho to wo, warna naam ka pehla akshar */}
              {ownerMessage.photo ? (
                <img
                  src={ownerMessage.photo}
                  alt={`${ownerMessage.name}, ${ownerMessage.designation} of Manvi Tour & Travels`}
                  loading="lazy"
                  className="h-20 w-20 shrink-0 rounded-2xl object-cover ring-4 ring-brand-500/30 lg:h-28 lg:w-28"
                />
              ) : (
                <span
                  aria-hidden="true"
                  className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-brand-500 font-display text-3xl font-extrabold text-ink-900 lg:h-28 lg:w-28 lg:text-4xl"
                >
                  {ownerMessage.name.charAt(0)}
                </span>
              )}

              <div className="lg:mt-5">
                <p className="font-display text-xl font-bold text-white lg:text-2xl">
                  {ownerMessage.name}
                </p>
                <p className="mt-0.5 text-sm text-brand-500">
                  {ownerMessage.designation}
                </p>

                {/* Legal name GST certificate par jo hai, wahi.
                    Corporate client isse verify karta hai. */}
                <p className="mt-3 text-xs leading-relaxed text-white/45">
                  Legal name: {siteConfig.legalName}
                  <br />
                  {siteConfig.constitution} &middot; GSTIN {siteConfig.gstin}
                </p>
              </div>
            </div>
          </div>

          {/* ============================================
              DAAYI TARAF: message
              ============================================ */}
          <div className="lg:col-span-8">
            {/* SIRF SCREEN READER KE LIYE heading.
                Aankh ko is section ka matlab bade quote se saaf dikh
                jaata hai, par screen reader ko headings ki list se hi
                page samajh aata hai - bina heading ke ye section us
                list se gayab ho jaata. sr-only = dikhta nahi, padha
                jaata hai. (design.txt ka accessibility rule: heading
                order kabhi mat todo.) */}
            <h2 className="sr-only">A message from our proprietor</h2>

            {/* Quote icon sirf sajawat hai - screen reader ise skip kare */}
            <FaQuoteRight aria-hidden="true" className="text-4xl text-brand-500/25" />

            {/* <blockquote> jaanbujh kar use kiya - ye <div> se behtar
                hai kyunki screen reader batata hai ki "ye kisi ka kaha
                hua hai". Semantic HTML ka yahi faayda hai. */}
            <blockquote className="mt-5">
              <p className="font-display text-xl font-semibold leading-relaxed text-white sm:text-2xl sm:leading-relaxed">
                {ownerMessage.message}
              </p>

              <footer className="mt-5 text-sm text-white/55">
                &mdash; {ownerMessage.name}, {ownerMessage.designation}
              </footer>
            </blockquote>

            {/* ---- Seedhi baat karne ke do raaste ----
                Owner ka message padhne ke turant baad log usse baat
                karna chahte hain. Button yahin hona chahiye, neeche
                nahi - warna wo pal nikal jaata hai. */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                as="a"
                href={`tel:${siteConfig.phoneRaw}`}
                variant="primary"
                size="lg"
              >
                <FaPhone /> {siteConfig.phone}
              </Button>

              <Button
                as="a"
                href={`https://wa.me/${siteConfig.whatsapp}?text=Hello%20Manvi%20Tour%20%26%20Travels`}
                target="_blank"
                rel="noopener noreferrer"
                variant="white"
                size="lg"
              >
                <FaWhatsapp className="text-lg text-green-600" /> WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
