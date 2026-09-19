import { useState } from "react";
import { Link } from "react-router-dom";
import { FaCheck, FaArrowRight, FaPhone } from "react-icons/fa6";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";
import Icon from "../common/Icon";
import { services } from "../../data/services";
import { siteConfig } from "../../data/siteConfig";

/* ============================================================
   SECTION: SERVICE DETAILS  (/services page)

   PURPOSE:
   Upar wala card grid sirf ek INDEX hai - "hum ye 7 kaam karte
   hain". Lekin customer wahan se book nahi karta, kyunki do line
   me uske sawaal khatam nahi hote: "isme kya kya milega?",
   "ye mere jaise kaam ke liye sahi hai?"

   Ye section wahi khol kar batata hai. Ek service, ek block.

   ============================================================
   ANCHOR LINKS - upar ke card se yahan tak
   ============================================================
   Har block par id={service.slug} laga hai. Upar grid ka card
   href="#airport-pick-drop" karta hai, aur browser seedha us
   block par scroll kar jaata hai. Naya page load nahi hota.

   scroll-mt-28 KYUN?
   Navbar sticky hai. Bina iske block bilkul navbar ke peeche
   ja kar rukta hai aur heading dikhti hi nahi. scroll-mt us
   navbar ki jagah chhod deta hai.
   (index.css me scroll-padding-top bhi hai - dono saath kaam
   karte hain, ek hi cheez ka double bima samajhiye.)

   ============================================================
   ZIGZAG LAYOUT
   ============================================================
   Har doosre block me panel aur text aapas me jagah badal lete
   hain (lg:order-2). Saat blocks agar bilkul ek jaise hote to
   aankh 3 ke baad padhna chhod deti - zigzag usse rokta hai.
   Mobile par zigzag ka matlab nahi banta, isliye wo sirf lg par hai.
   ============================================================ */

/* ------------------------------------------------------------
   <ServiceVisual /> - panel ke upar photo, ya photo na ho to icon

   TEEN SOORAT:
     1. service me image hai aur load ho gayi -> PHOTO dikhegi
     2. service me image nahi hai             -> icon box dikhega
     3. image di gayi par file missing        -> onError chalta hai
                                                 aur icon par lautta hai

   Teesri soorat hi asli faayda hai - wahi safety net jo Fleet
   aur Packages me hai. Photo file kabhi delete ho jaaye to bhi
   customer ko toota hua image icon nahi dikhega.
   ------------------------------------------------------------ */
function ServiceVisual({ service, index }) {
  const [failed, setFailed] = useState(false);
  const showPhoto = service.image && !failed;

  /* Number dono soorat me ek jaisa dikhta hai, isliye ek hi
     jagah likha - photo par ye peeche kaali chip me baithta hai
     (warna halke aasmaan par peela number kho jaata). */
  const number = String(index + 1).padStart(2, "0");

  if (showPhoto) {
    return (
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={service.image}
          alt={`${service.title} - Manvi Tour & Travels, Delhi NCR`}
          loading="lazy"
          onError={() => setFailed(true)}
          className="aspect-[16/9] w-full object-cover"
        />

        <span
          aria-hidden="true"
          className="absolute right-3 top-3 rounded-lg bg-ink-900/80 px-2.5 py-1 font-display text-lg font-extrabold leading-none text-brand-500 backdrop-blur-sm"
        >
          {number}
        </span>
      </div>
    );
  }

  return (
    <div className="flex items-start justify-between gap-4">
      <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-ink-900 text-brand-500">
        <Icon name={service.icon} className="text-2xl" />
      </span>

      {/* Bada halka number - sirf sajawat, isliye screen reader se
          chhupa diya. Ye gin kar nahi padha jaata, bas rhythm deta hai. */}
      <span
        aria-hidden="true"
        className="font-display text-4xl font-extrabold leading-none text-brand-500/25"
      >
        {number}
      </span>
    </div>
  );
}

export default function ServiceDetails() {
  return (
    <section className="section-y bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="In Detail"
          title="What You Actually Get With Each Service"
          subtitle="No vague promises - here is exactly what is covered, and who each service works best for."
        />

        {/* space-y-14 => har block ke beech barabar ki doori */}
        <div className="mt-14 space-y-14">
          {services.map((service, index) => {
            // 0, 2, 4, 6 -> seedha | 1, 3, 5 -> ulta (zigzag)
            const isReversed = index % 2 === 1;

            return (
              <article
                key={service.id}
                id={service.slug}
                className="scroll-mt-28 border-t border-ink-900/10 pt-14 first:border-t-0 first:pt-0"
              >
                <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
                  {/* ============================================
                      PANEL - number, icon, naam, kiske liye
                      ============================================ */}
                  <div
                    className={`lg:col-span-5 ${isReversed ? "lg:order-2" : ""}`}
                  >
                    <div className="h-full rounded-2xl border border-ink-900/10 bg-brand-50/60 p-7">
                      {/* Photo hai to photo, warna icon - faisla
                          <ServiceVisual /> karta hai (upar define hai) */}
                      <ServiceVisual service={service} index={index} />

                      <h3 className="mt-5 text-xl">{service.title}</h3>

                      {/* "Popular" badge wahi hai jo home ke card par hai */}
                      {service.highlight && (
                        <span className="mt-3 inline-block rounded-full bg-brand-500 px-3 py-1 font-display text-[10px] font-bold uppercase tracking-wider text-ink-900">
                          Most Booked
                        </span>
                      )}

                      {/* bestFor - "ye mere kaam ki cheez hai ya nahi"
                          ka jawab ek line me */}
                      <p className="mt-5 border-t border-ink-900/10 pt-4 text-sm leading-relaxed text-ink-700/80">
                        <span className="font-display font-bold text-brand-700">
                          Best for:{" "}
                        </span>
                        {service.bestFor}
                      </p>
                    </div>
                  </div>

                  {/* ============================================
                      TEXT - lamba description + includes + CTA
                      ============================================ */}
                  <div
                    className={`lg:col-span-7 ${isReversed ? "lg:order-1" : ""}`}
                  >
                    <p className="text-base leading-relaxed text-ink-700/85">
                      {service.longDescription}
                    </p>

                    {/* ---- INCLUDES ----
                        Tick list hi kyun, paragraph kyun nahi?
                        Paragraph padhna padta hai, list SCAN hoti hai.
                        Customer 3 second me dekh leta hai ki jo cheez
                        usse chahiye wo is list me hai ya nahi. */}
                    <p className="mt-6 font-display text-xs font-bold uppercase tracking-wider text-ink-700">
                      What is included
                    </p>

                    <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                      {service.includes.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm text-ink-700/85"
                        >
                          <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-500">
                            <FaCheck className="text-[8px] text-ink-900" />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* ---- CTA ----
                        Har block ke aakhir me ek raasta. Customer jis
                        service par ruka hai, wahin se book kar sake -
                        usse neeche tak scroll na karna pade. */}
                    <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                      <Button as={Link} to="/contact" variant="dark" size="sm">
                        Get A Quote <FaArrowRight className="text-[10px]" />
                      </Button>

                      <Button
                        as="a"
                        href={`tel:${siteConfig.phoneRaw}`}
                        variant="outline"
                        size="sm"
                      >
                        <FaPhone className="text-xs" /> {siteConfig.phone}
                      </Button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* ---------- IMAANDARI KA NOTE ----------
            Fleet section me bhi bilkul yahi disclaimer hai. Ye
            baat pehle bata dena baad ke jhagde bachata hai -
            aur legally bhi surakshit rakhta hai. */}
        <p className="mt-12 rounded-xl border border-ink-900/10 bg-brand-50/60 px-5 py-4 text-center text-xs leading-relaxed text-ink-700/70">
          * Toll, parking, state tax and driver allowance are charged separately
          unless your package specifically includes them. Monument entry tickets
          are not part of any sightseeing rate. The final amount is always
          confirmed with you at the time of booking.
        </p>
      </div>
    </section>
  );
}
