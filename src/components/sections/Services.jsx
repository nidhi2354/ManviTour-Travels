import { Link } from "react-router-dom";
import { FaArrowRight, FaArrowDown } from "react-icons/fa6";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";
import Icon from "../common/Icon";
import { services } from "../../data/services";

/* ============================================================
   SECTION 4 of 12: OUR SERVICES

   PURPOSE:
   Client ke visiting card par 7 services likhi hain. Visitor ko
   turant pata chalna chahiye ki "jo mujhe chahiye wo ye log karte
   hain ya nahi". Ye section wahi confirm karta hai.

   GRID LOGIC (responsive ka dil):
     Mobile  (default)  -> 1 column   (grid-cols-1)
     Tablet  (sm: 640+) -> 2 column   (sm:grid-cols-2)
     Desktop (lg:1024+) -> 3 column   (lg:grid-cols-3)
   Tailwind mobile-first hai: bina prefix wali class mobile ke liye,
   sm:/md:/lg: wali usse BADI screen ke liye.

   HOVER EFFECT ka purpose: card "clickable" lagta hai, isse
   engagement badhta hai.
   ============================================================ */

export default function Services({ isPage = false }) {
  return (
    <section id="services" className="section-y bg-brand-50/40">
      <div className="container-x">
        {/* isPage par heading chhupa dete hain - /services page ka
            PageHeader pehle se yahi baat bada likh kar dikha raha hai.
            Ek page par do bade heading = duplicate lagta hai. */}
        {!isPage && (
          <SectionHeading
            eyebrow="Our Services"
            title="One Solution For Every Journey"
            subtitle="Whether it is a 20 minute airport drop or a 10 day family holiday, we have the right vehicle and the right package for every need."
          />
        )}

        {/* ---------- SERVICE CARDS GRID ---------- */}
        <div
          className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ${
            isPage ? "" : "mt-14"
          }`}
        >
          {services.map((service) => (
            <article
              key={service.id}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-ink-900/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-500 hover:shadow-2xl hover:shadow-brand-500/15"
            >
              {/* "Popular" badge - sirf highlight=true wali services par.
                  Purpose: visitor ko decision lene me madad (choice overload kam) */}
              {service.highlight && (
                <span className="absolute right-5 top-5 rounded-full bg-brand-500 px-3 py-1 font-display text-[10px] font-bold uppercase tracking-wider text-ink-900">
                  Popular
                </span>
              )}

              {/* Icon box - hover par kaala se peela ho jata hai */}
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-ink-900 text-brand-500 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-ink-900">
                <Icon name={service.icon} className="text-2xl" />
              </div>

              <h3 className="mt-5 text-xl">{service.title}</h3>

              {/* flex-1 => description ke baad ki khaali jagah ye le lega,
                  isse saare cards ki height barabar dikhti hai */}
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-700/80">
                {service.description}
              </p>

              {/* CARD KA LINK DO JAGAH DO ALAG KAAM KARTA HAI

                  Home par     -> "Enquire Now"  -> /contact
                     (home par sirf 2 line ka intro hai, aage jaanne
                      ke liye poochna hi padega)

                  /services par -> "See Details" -> #slug anchor
                     (usi page par neeche poora detail block hai -
                      wahan bhejna zyada kaam ka hai, contact page
                      par dhakelna jaldbaazi hogi)

                  Anchor ke liye <a> hi sahi hai, <Link> nahi. Ye site
                  ka doosra PAGE nahi hai - isi page ka hissa hai. */}
              {isPage ? (
                <a
                  href={`#${service.slug}`}
                  className="mt-6 inline-flex items-center gap-2 font-display text-sm font-bold text-ink-900 transition-colors group-hover:text-brand-600"
                >
                  See Details
                  <FaArrowDown className="text-xs transition-transform duration-300 group-hover:translate-y-0.5" />
                </a>
              ) : (
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-2 font-display text-sm font-bold text-ink-900 transition-colors group-hover:text-brand-600"
                >
                  Enquire Now
                  <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              )}
            </article>
          ))}

          {/* ---------- AAKHRI CARD: CTA CARD ----------
              7 services hain, 3-column grid me 8th jagah khaali bachti hai.
              Usse khaali chhodne ke bajaye ek CTA card daal diya -
              layout bhi balanced aur ek extra conversion point bhi. */}
          <article className="flex flex-col justify-center rounded-2xl bg-ink-900 p-7 text-center">
            <h3 className="text-xl text-white">Need Something Else?</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Cannot find what you are looking for? No problem &mdash; we build
              fully custom plans too.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-6 py-3 font-display text-sm font-bold text-ink-900 transition-transform hover:-translate-y-0.5"
            >
              Talk To Us <FaArrowRight className="text-xs" />
            </Link>
          </article>
        </div>

        {/* ---------- HOME SE SERVICES PAGE KA RAASTA ----------
            Home par ye section sirf ek jhalak hai. Jise aur dekhna
            hai wo yahan se poore Services page par chala jaata hai.
            /services page par ye button nahi chahiye (user wahin hai
            pehle se), isliye !isPage. */}
        {!isPage && (
          <div className="mt-12 text-center">
            <Button as={Link} to="/services" variant="dark" size="lg">
              View All Services <FaArrowRight className="text-xs" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
