import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUsers,
  FaSuitcaseRolling,
  FaCheck,
  FaPhone,
  FaArrowRight,
  FaFilter,
  FaRotateLeft,
} from "react-icons/fa6";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";
import FilterChips from "../common/FilterChips";
import VehicleIllustration from "../common/VehicleIllustration";
import { fleet, vehicleTypes, groupSizes } from "../../data/fleet";
import { siteConfig } from "../../data/siteConfig";

/* ============================================================
   SECTION: OUR FLEET

   PURPOSE:
   Travel website par customer ke sirf 2 hi sawaal hote hain:
     1. "Gaadi kaunsi milegi?"   -> photo + naam
     2. "Kitna lagega?"          -> rate per km
   Ye section dono ka jawab ek saath deta hai. Rate chhupane wali
   websites par log bharosa nahi karte - isliye humne rate saamne rakha.

   ============================================================
   HOME AUR /fleet PAGE KA FARQ (isPage prop)
   ============================================================
   Home par   : sirf 6 gaadi, koi filter nahi, neeche "View Full
                Fleet" button. Ye ek JHALAK hai.
   /fleet par : saari gaadiyan + 2 filter + result count.
                Ye ek TOOL hai, jisse customer apni gaadi dhoondhta hai.

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

export default function Fleet({ isPage = false }) {
  /* ---- FILTER STATE - sirf /fleet page par chalti hai ----
     Do filter hain aur dono EK SAATH lagte hain (AND):
       activeType -> kis tarah ki gaadi hai
       activeSize -> kitne log hain

     Dono ki shuruaat "sab" se hoti hai. Kyun? Filter ka kaam
     CHHUPANA hai - page khulte hi kuch chhupa hua nahi hona
     chahiye, warna customer sochega itni hi gaadiyan hain. */
  const [activeType, setActiveType] = useState("all");
  const [activeSize, setActiveSize] = useState("any");

  // Chuna hua size option - isi ke andar min/max seats likhi hain
  const size = groupSizes.find((option) => option.id === activeSize);

  const filteredFleet = fleet.filter((vehicle) => {
    const typeOk = activeType === "all" || vehicle.filterGroup === activeType;

    // max: null ka matlab "koi upar ki limit nahi"
    const sizeOk =
      vehicle.seats >= size.min &&
      (size.max === null || vehicle.seats <= size.max);

    return typeOk && sizeOk;
  });

  /* Home par saari 8 gaadiyan dikhane se section bahut lamba ho
     jaata hai. Isliye home par sirf pehli 6, bina filter ke. */
  const visibleFleet = isPage ? filteredFleet : fleet.slice(0, 6);

  const isFiltered = activeType !== "all" || activeSize !== "any";

  const clearFilters = () => {
    setActiveType("all");
    setActiveSize("any");
  };

  return (
    <section id="fleet" className="section-y bg-white">
      <div className="container-x">
        {/* /fleet page par PageHeader yahi heading dikha raha hai */}
        {!isPage && (
          <SectionHeading
            eyebrow="Our Fleet"
            title="Clean, Modern & Well-Maintained Vehicles"
            subtitle="From a compact sedan to a 45 seater luxury coach. Every vehicle reaches you only after regular servicing and full sanitisation."
          />
        )}

        {/* ============================================================
            FILTER BAR - sirf /fleet page par
            ============================================================ */}
        {isPage && (
          <div className="rounded-2xl border border-ink-900/10 bg-brand-50/50 p-5 sm:p-6">
            <div className="flex items-center gap-2 border-b border-ink-900/10 pb-4">
              <FaFilter className="text-sm text-brand-600" />
              <h2 className="font-display text-sm font-bold uppercase tracking-wider text-ink-900">
                Find your vehicle
              </h2>
            </div>

            <div className="mt-5 grid gap-6 lg:grid-cols-2">
              <FilterChips
                label="Vehicle type"
                options={vehicleTypes}
                active={activeType}
                onChange={setActiveType}
              />

              {/* Ye filter type wale se bhi zyada kaam aata hai.
                  Customer "MPV chahiye" nahi sochta - wo sochta hai
                  "hum 6 log hain". Filter usi bhasha me poochta hai. */}
              <FilterChips
                label="How many people?"
                options={groupSizes}
                active={activeSize}
                onChange={setActiveSize}
              />
            </div>

            {/* ---- Result count + reset ----
                Count zaroori hai: filter lagane ke baad customer ko
                turant pata chale ki kitna bacha. Bina iske use lagta
                hai page adhoora load hua hai.

                aria-live="polite": filter badalne par screen reader
                naya count bol deta hai. Bina iske blind user ko pata
                hi nahi chalta ki list badli. */}
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-ink-900/10 pt-4">
              <p aria-live="polite" className="text-sm text-ink-700/80">
                Showing{" "}
                <span className="font-display font-bold text-ink-900">
                  {filteredFleet.length}
                </span>{" "}
                of {fleet.length} vehicles
              </p>

              {/* Reset button tabhi dikhta hai jab kuch reset karne
                  layak ho - warna wo bekaar jagah ghera hai */}
              {isFiltered && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="inline-flex cursor-pointer items-center gap-2 font-display text-xs font-bold text-brand-700 transition-colors hover:text-ink-900"
                >
                  <FaRotateLeft className="text-[10px]" /> Clear filters
                </button>
              )}
            </div>
          </div>
        )}

        {/* ---- FLEET GRID ----
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
          {visibleFleet.map((vehicle) => (
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

        {/* ============================================================
            EMPTY STATE - jab filter se kuch nahi bacha

            Khaali screen dikhana sabse bada nuksaan hai - customer
            ko lagta hai "inke paas hai hi nahi" aur wo chala jaata
            hai. Isliye yahan do cheezein hain: filter hatane ka
            button, aur phone number. "Nahi mila" kabhi "raasta
            khatam" nahi hona chahiye.
            ============================================================ */}
        {isPage && filteredFleet.length === 0 && (
          <div className="rounded-2xl border border-dashed border-ink-900/20 bg-brand-50/40 px-6 py-14 text-center">
            <h3 className="text-xl">No vehicle matches these filters</h3>

            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink-700/80">
              Our website list is not the whole garage. Tell us your group size
              and route - we will arrange the right vehicle for you.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Button
                type="button"
                onClick={clearFilters}
                variant="dark"
                size="lg"
              >
                <FaRotateLeft className="text-xs" /> Clear Filters
              </Button>

              <Button
                as="a"
                href={`tel:${siteConfig.phoneRaw}`}
                variant="primary"
                size="lg"
              >
                <FaPhone /> {siteConfig.phone}
              </Button>
            </div>
          </div>
        )}

        {/* ---------- HOME SE FLEET PAGE KA RAASTA ----------
            Home par sirf 6 gaadi dikhti hain. Ye button batata hai
            ki aur bhi hain, aur seedha /fleet page par le jaata hai. */}
        {!isPage && (
          <div className="mt-12 text-center">
            <Button as={Link} to="/fleet" variant="dark" size="lg">
              View Full Fleet & Rates <FaArrowRight className="text-xs" />
            </Button>
          </div>
        )}

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
