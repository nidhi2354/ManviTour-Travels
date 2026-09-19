import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaRoute,
  FaCalendarDays,
  FaArrowRight,
  FaSun,
  FaFilter,
  FaRotateLeft,
  FaLocationDot,
} from "react-icons/fa6";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";
import FilterChips from "../common/FilterChips";
import { packages, packageCategories } from "../../data/packages";

/* ============================================================
   SECTION 6 of 12: POPULAR TOUR PACKAGES

   PURPOSE:
   Services section batata hai "hum kya karte hain".
   Ye section batata hai "aap abhi kya khareed sakte hain".
   Ready-made package dekh kar customer ko khud plan banane ki
   mehnat nahi karni padti - yahi sabse zyada booking laata hai.

   FILTER LOGIC:
   Home page par sirf featured packages dikhte hain (.filter()).
   Baaki saare /packages page par jaayenge. Home page ko lamba
   karne se bounce rate badhta hai.

   IMAGE OVERLAY:
   Photo ke upar seedha safed text padhne me mushkil hota hai, isliye
   ek kaala gradient (from-ink-900 via-ink-900/60 to-transparent)
   daala gaya hai. Ye chhoti si cheez readability 10x behtar karti hai.
   ============================================================ */

/* ------------------------------------------------------------
   <PackagePhoto /> - destination ki photo, safety net ke saath

   Bilkul wahi soch jo Fleet.jsx ke <VehiclePhoto /> me hai:
   photo na mile to card TOOTA hua nahi dikhna chahiye.

   Photo missing hone par ek brand wala block dikhta hai - kaala
   background, peeli dotted pattern, aur beech me ek bada pin.
   Card ka apna text (naam, route, price) uske upar waise hi
   baith jaata hai, isliye card adhoora nahi lagta.

   "Photo coming soon" jaisa kuch jaanbujh kar NAHI likha - live
   site par wo "kaam adhoora hai" ka board lagane jaisa hai.
   ------------------------------------------------------------ */
function PackagePhoto({ pkg }) {
  const [failed, setFailed] = useState(false);

  if (!pkg.image || failed) {
    return (
      <div
        className="flex h-full w-full items-center justify-center bg-ink-800"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--color-brand-500) 1.5px, transparent 1.5px)",
          backgroundSize: "18px 18px",
        }}
        aria-hidden="true"
      >
        <FaLocationDot className="text-5xl text-brand-500/35" />
      </div>
    );
  }

  return (
    <img
      src={pkg.image}
      alt={`${pkg.title} - ${pkg.route}`}
      loading="lazy"
      onError={() => setFailed(true)}
      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
  );
}

export default function Packages({ isPage = false }) {
  /* ---- CATEGORY FILTER - sirf /packages page par ----
     Chips "kis tarah ki trip" ke hisaab se hain, jagah ke hisaab
     se nahi. Customer aise hi sochta hai: "pahaad jaana hai",
     "darshan karne hain", "do din ki chhutti hai". */
  const [activeCategory, setActiveCategory] = useState("all");

  /* Home par sirf FEATURED package - page lamba na ho.
     /packages page par poori list, filter ke hisaab se chhanti hui. */
  const visiblePackages = isPage
    ? packages.filter(
        (item) => activeCategory === "all" || item.category === activeCategory
      )
    : packages.filter((item) => item.isFeatured);

  const isFiltered = activeCategory !== "all";

  return (
    <section id="packages" className="section-y bg-ink-900">
      <div className="container-x">
        {/* /packages page par PageHeader yahi heading dikha raha hai */}
        {!isPage && (
          <SectionHeading
            light // dark background par white text ke liye
            eyebrow="Tour Packages"
            title="Popular Tours Starting From Delhi"
            subtitle="Hotel, cab, driver and sightseeing - everything included. You just pack your bags, we will handle the rest."
          />
        )}

        {/* ============================================================
            FILTER BAR - sirf /packages page par

            light prop KYUN? Is section ka background kaala hai.
            FilterChips ke default (safed) chips yahan gayab ho
            jaate - isliye usme light variant banaya gaya hai,
            bilkul SectionHeading ki tarah.
            ============================================================ */}
        {isPage && (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
            <div className="flex items-center gap-2 border-b border-white/10 pb-4">
              <FaFilter className="text-sm text-brand-500" />
              <h2 className="font-display text-sm font-bold uppercase tracking-wider text-white">
                What kind of trip?
              </h2>
            </div>

            <div className="mt-5">
              <FilterChips
                light
                label="Trip type"
                options={packageCategories}
                active={activeCategory}
                onChange={setActiveCategory}
              />
            </div>

            {/* aria-live: filter badalne par screen reader naya
                count bol deta hai. Bina iske blind user ko pata
                hi nahi chalta ki list badal gayi. */}
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
              <p aria-live="polite" className="text-sm text-white/70">
                Showing{" "}
                <span className="font-display font-bold text-brand-500">
                  {visiblePackages.length}
                </span>{" "}
                of {packages.length} packages
              </p>

              {isFiltered && (
                <button
                  type="button"
                  onClick={() => setActiveCategory("all")}
                  className="inline-flex cursor-pointer items-center gap-2 font-display text-xs font-bold text-brand-500 transition-colors hover:text-white"
                >
                  <FaRotateLeft className="text-[10px]" /> Clear filter
                </button>
              )}
            </div>
          </div>
        )}

        {/* ---------- PACKAGE CARDS ---------- */}
        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {visiblePackages.map((pkg) => (
            <article
              key={pkg.id}
              className="group relative overflow-hidden rounded-2xl bg-ink-800"
            >
              {/* ---- BACKGROUND IMAGE ---- */}
              <div className="relative h-80 overflow-hidden">
                <PackagePhoto pkg={pkg} />

                {/* Readability gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/55 to-transparent" />

                {/* Price badge - upar daayein */}
                <div className="absolute right-4 top-4 rounded-xl bg-brand-500 px-3.5 py-2 text-center">
                  <span className="block font-display text-[9px] font-bold uppercase tracking-wider text-ink-900/70">
                    Starting
                  </span>
                  <span className="block font-display text-base font-extrabold leading-none text-ink-900">
                    {/* toLocaleString("en-IN") => 12999 ko 12,999 banata hai
                        (Indian comma system: 1,20,000 / 12,999) */}
                    &#8377;{pkg.startingPrice.toLocaleString("en-IN")}
                  </span>
                </div>

                {/* ---- CONTENT - image ke upar, neeche se ---- */}
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="text-xl text-white">{pkg.title}</h3>

                  <p className="mt-2 flex items-start gap-2 text-sm text-white/75">
                    <FaRoute className="mt-1 shrink-0 text-brand-500" />
                    {pkg.route}
                  </p>

                  <p className="mt-1.5 flex items-center gap-2 text-sm text-white/75">
                    <FaCalendarDays className="shrink-0 text-brand-500" />
                    {pkg.duration}
                  </p>

                  {/* ---- Best time - sirf /packages page par ----
                      Home ka card halka rakhna hai. Page par customer
                      planning ke mood me hota hai, wahan "kab jaana
                      chahiye" sabse kaam ki baat hai - aur ye ek galat
                      booking (band kapaat, band Taj) bhi rok deti hai. */}
                  {isPage && pkg.bestTime && (
                    <p className="mt-1.5 flex items-start gap-2 text-sm text-white/75">
                      <FaSun className="mt-1 shrink-0 text-brand-500" />
                      {pkg.bestTime}
                    </p>
                  )}

                  {/* Highlight tags */}
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {pkg.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[11px] text-white/85 backdrop-blur-sm"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  {/* CTA - normally chhupa hua, hover par slide-up hota hai.
                      Purpose: card saaf dikhe, par interaction par action mile.
                      Mobile par hover nahi hota, isliye max-h/opacity ko
                      sm: se upar hi limit kiya gaya hai. */}
                  {/* AAGE (Phase 2): detail page banne par ise
                      <Link to={`/packages/${pkg.slug}`}> bana dena -
                      slug data/packages.js me pehle se hai. */}
                  <Link
                    to="/contact"
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-500 px-5 py-2.5 font-display text-xs font-bold text-ink-900 transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    View Details <FaArrowRight className="text-[10px]" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ---------- EMPTY STATE ----------
            Abhi har category me kam se kam ek package hai, to ye
            screen par aayega nahi. Phir bhi likha hai: kal client
            ek package hata dega aur us chip par khaali kaala page
            reh jaayega. Khaali screen = customer chala gaya. */}
        {isPage && visiblePackages.length === 0 && (
          <div className="rounded-2xl border border-dashed border-white/20 bg-white/5 px-6 py-14 text-center">
            <h3 className="text-xl text-white">
              No ready-made package in this category yet
            </h3>

            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-white/70">
              That does not mean we cannot do the trip. Tell us where you want
              to go and we will build the package around your dates.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Button
                type="button"
                onClick={() => setActiveCategory("all")}
                variant="white"
                size="lg"
              >
                <FaRotateLeft className="text-xs" /> Show All Packages
              </Button>

              <Button as={Link} to="/contact" variant="primary" size="lg">
                Ask For A Custom Plan <FaArrowRight className="text-xs" />
              </Button>
            </div>
          </div>
        )}

        {/* ---------- SECTION FOOTER CTA ---------- */}
        <div className="mt-12 text-center">
          <p className="text-white/70">
            Did not find the destination you had in mind? We create fully
            customised packages as well.
          </p>
          <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {/* Home par pehle poore Packages page ka raasta dete hain */}
            {!isPage && (
              <Button as={Link} to="/packages" variant="white" size="lg">
                View All Packages <FaArrowRight className="text-xs" />
              </Button>
            )}

            <Button as={Link} to="/contact" variant="primary" size="lg">
              Build A Custom Package <FaArrowRight className="text-xs" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
