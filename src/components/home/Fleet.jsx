import { useState } from "react";
import { FaUsers, FaSuitcaseRolling, FaCheck, FaPhone } from "react-icons/fa6";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";
import VehicleIllustration from "../common/VehicleIllustration";
import { fleet } from "../../data/fleet";
import { siteConfig } from "../../data/siteConfig";

/* ============================================================
   SECTION 5 of 12: OUR FLEET

   PURPOSE:
   Travel website par customer ke sirf 2 hi sawaal hote hain:
     1. "Gaadi kaunsi milegi?"   -> photo + naam
     2. "Kitna lagega?"          -> rate per km
   Ye section dono ka jawab ek saath deta hai. Rate chhupane wali
   websites par log bharosa nahi karte - isliye humne rate saamne rakha.

   IMAGE PERFORMANCE:
     loading="lazy"  -> image tabhi download hogi jab user uske paas
                        scroll karega. Isse page 2-3x fast khulta hai.
     aspect-[4/3]    -> har image ka box same shape, chahe original
                        photo kisi bhi size ki ho. Layout nahi hilta.

   RATES SAMPLE HAIN - client se confirm karke fleet.js me update karein.
   ============================================================ */

/* ------------------------------------------------------------
   <VehiclePhoto /> - gaadi ki photo, ek safety net ke saath

   TEEN SOORAT ho sakti hain:
     1. photo hai aur load ho gayi      -> asli photo dikhegi
     2. fleet.js me image null hai      -> illustration dikhega
     3. photo di gayi par file missing  -> onError chalta hai,
        failed = true hota hai, aur illustration dikh jaata hai

   Teesri soorat hi asli faayda hai. Client agar 6 me se 4 hi
   photos de, ya galat naam se file daale, to customer ko toota
   hua image icon kabhi nahi dikhega - site professional rahegi.
   ------------------------------------------------------------ */
function VehiclePhoto({ vehicle }) {
  const [failed, setFailed] = useState(false);

  /* dono cases me classes same hain - isliye ek hi jagah likhi hain */
  const mediaClass =
    "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105";

  if (!vehicle.image || failed) {
    return <VehicleIllustration type={vehicle.type} className={mediaClass} />;
  }

  return (
    <img
      src={vehicle.image}
      alt={`${vehicle.name} - ${vehicle.category} booking in Delhi NCR`}
      loading="lazy"
      onError={() => setFailed(true)}
      className={mediaClass}
    />
  );
}

export default function Fleet() {
  return (
    <section id="fleet" className="section-y bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our Fleet"
          title="Clean, Modern & Well-Maintained Vehicles"
          subtitle="From a compact sedan to a 45 seater luxury coach. Every vehicle reaches you only after regular servicing and full sanitisation."
        />

        {/* ---- FLEET GRID ----
            LAYOUT: upar 4 gaadiyan, neeche 3 (total 7).

            grid ki jagah flex-wrap kyun?
            grid har row ko BAAYEIN se bharta hai. 7 cards me neeche
            wali 3 baayein sarak jaati aur daayein khaali jagah bachti -
            row adhoori lagti. flex + justify-center me neeche wali 3
            apne aap BEECH me aa jaati hain, layout santulit dikhta hai.

            w-[calc(...)] : gap ka hissa har card se ghata diya hai,
            warna cards ek row me fit nahi hote.
              2 column -> 1 gap  (1.75rem)  / 2 cards = 0.875rem
              4 column -> 3 gaps (5.25rem)  / 4 cards = 1.3125rem  */}
        <div className="mt-14 flex flex-wrap justify-center gap-7">
          {fleet.map((vehicle) => (
            <article
              key={vehicle.id}
              className="group w-full overflow-hidden rounded-2xl border border-ink-900/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-ink-900/10 sm:w-[calc(50%-0.875rem)] lg:w-[calc(25%-1.3125rem)]"
            >
              {/* ---- IMAGE AREA ----
                  Photo ya illustration - faisla <VehiclePhoto /> karta hai
                  (upar define kiya hai). Isse naam aur tasveer kabhi
                  mismatch nahi hote. */}
              <div className="relative aspect-[4/3] overflow-hidden bg-ink-900/5">
                <VehiclePhoto vehicle={vehicle} />

                {/* Category chip - upar baayein */}
                <span className="absolute left-4 top-4 rounded-full bg-ink-900/85 px-3 py-1.5 font-display text-[10px] font-bold uppercase tracking-wider text-brand-500 backdrop-blur-sm">
                  {vehicle.category}
                </span>

                {/* Rate chip - upar daayein. SABSE ZAROORI INFORMATION,
                    isliye sabse zyada contrast (peela) diya gaya hai. */}
                <span className="absolute right-4 top-4 rounded-full bg-brand-500 px-3 py-1.5 font-display text-xs font-extrabold text-ink-900">
                  &#8377;{vehicle.ratePerKm}/km
                </span>
              </div>

              {/* ---- CONTENT AREA ---- */}
              <div className="p-6">
                <h3 className="text-lg">{vehicle.name}</h3>

                {/* Seats + luggage - icons ke saath, padhne me aasaan */}
                <div className="mt-3 flex items-center gap-5 text-sm text-ink-700/80">
                  <span className="flex items-center gap-2">
                    <FaUsers className="text-brand-600" />
                    {vehicle.seats} Seats
                  </span>
                  <span className="flex items-center gap-2">
                    <FaSuitcaseRolling className="text-brand-600" />
                    {vehicle.luggage} Bags
                  </span>
                </div>

                {/* Features - tick marks ke saath */}
                <ul className="mt-4 flex flex-wrap gap-2">
                  {vehicle.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-ink-700"
                    >
                      <FaCheck className="text-[9px] text-brand-600" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Har card par CTA - customer ko dhoondhna na pade */}
                <Button
                  as="a"
                  href={`tel:${siteConfig.phoneRaw}`}
                  variant="outline"
                  size="sm"
                  fullWidth
                  className="mt-6"
                >
                  <FaPhone className="text-xs" /> Book {vehicle.name}
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* ---------- DISCLAIMER ----------
            Purpose: legally safe rehna. Rate toll/parking/state tax ke
            bina hai - ye pehle hi bata dena baad ke jhagde bachata hai. */}
        <p className="mt-10 text-center text-xs text-ink-700/60">
          * Rates shown are indicative. Toll, parking, state tax and driver
          allowance are charged separately. The final rate is confirmed at the
          time of booking.
        </p>
      </div>
    </section>
  );
}
