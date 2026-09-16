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

export default function Fleet() {
  return (
    <section id="fleet" className="section-y bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our Fleet"
          title="Clean, Modern & Well-Maintained Vehicles"
          subtitle="From a compact sedan to a 45 seater luxury coach. Every vehicle reaches you only after regular servicing and full sanitisation."
        />

        {/* ---------- FLEET GRID ---------- */}
        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {fleet.map((vehicle) => (
            <article
              key={vehicle.id}
              className="group overflow-hidden rounded-2xl border border-ink-900/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-ink-900/10"
            >
              {/* ---- IMAGE AREA ----
                  Conditional rendering: agar client ki asli photo hai to wo
                  dikhao, warna us gaadi ke TYPE ka illustration.
                  Isse naam aur tasveer kabhi mismatch nahi hote. */}
              <div className="relative aspect-[4/3] overflow-hidden bg-ink-900/5">
                {vehicle.image ? (
                  <img
                    src={vehicle.image}
                    alt={`${vehicle.name} - ${vehicle.category} booking Delhi`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <VehicleIllustration
                    type={vehicle.type}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}

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
