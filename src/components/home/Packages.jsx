import { FaRoute, FaCalendarDays, FaArrowRight } from "react-icons/fa6";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";
import { packages } from "../../data/packages";

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

export default function Packages() {
  // Sirf featured wale packages home page par
  const featuredPackages = packages.filter((item) => item.isFeatured);

  return (
    <section id="packages" className="section-y bg-ink-900">
      <div className="container-x">
        <SectionHeading
          light // dark background par white text ke liye
          eyebrow="Tour Packages"
          title="Popular Tours Starting From Delhi"
          subtitle="Hotel, cab, driver and sightseeing - everything included. You just pack your bags, we will handle the rest."
        />

        {/* ---------- PACKAGE CARDS ---------- */}
        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {featuredPackages.map((pkg) => (
            <article
              key={pkg.id}
              className="group relative overflow-hidden rounded-2xl bg-ink-800"
            >
              {/* ---- BACKGROUND IMAGE ---- */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={`${pkg.title} - ${pkg.route}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

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
                  <a
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-500 px-5 py-2.5 font-display text-xs font-bold text-ink-900 transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    View Details <FaArrowRight className="text-[10px]" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ---------- SECTION FOOTER CTA ---------- */}
        <div className="mt-12 text-center">
          <p className="text-white/70">
            Did not find the destination you had in mind? We create fully
            customised packages as well.
          </p>
          <Button as="a" href="#contact" variant="primary" size="lg" className="mt-5">
            Build A Custom Package <FaArrowRight className="text-xs" />
          </Button>
        </div>
      </div>
    </section>
  );
}
