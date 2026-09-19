import { Link } from "react-router-dom";
import { FaCheck, FaArrowRight } from "react-icons/fa6";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";
import Icon from "../common/Icon";
import { serviceAreas } from "../../data/about";

/* ============================================================
   SECTION: SERVICE AREAS  (/about page)

   PURPOSE - ye section 2 kaam ek saath karta hai:

   1. CUSTOMER KE LIYE
      Sabse pehla sawaal hota hai "aap mere ilaake me aate ho?".
      Jab tak iska jawab na mile, wo call nahi karta. Yahan usse
      apna ilaaka apni aankhon se dikh jaata hai.

   2. GOOGLE KE LIYE (LOCAL SEO)
      Koi "taxi service Janakpuri" search kare, to Google site
      tabhi dikhata hai jab page par wo jagah likhi ho. Har
      locality ka naam yahan hone se site un saari searches me
      aane lagti hai. Ye poore page ka sabse zyada SEO wala hissa hai.

   ============================================================
   DESIGN
   ============================================================
   Teen card - Delhi / NCR / Outstation. Har card ke andar jagahon
   ki list chips me. Chips isliye (paragraph nahi) kyunki aankh
   apna sheher list me se turant dhoondh leti hai, lambi line me nahi.
   ============================================================ */

export default function ServiceAreas() {
  return (
    <section className="section-y bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="Where We Go"
          title="Serving All Of Delhi NCR And The Road Beyond"
          subtitle="Pick up from anywhere in Delhi NCR, drop anywhere in North India. If your area is not on this list, it does not mean no - just give us a call."
        />

        {/* ---------- AREA CARDS ---------- */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {serviceAreas.map((group) => (
            <article
              key={group.id}
              className="flex flex-col rounded-2xl border border-ink-900/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-500 hover:shadow-2xl hover:shadow-brand-500/15"
            >
              {/* Icon box - Services section jaisa hi, taaki poori site
                  ek jaisi dikhe. Consistency hi design system hai. */}
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-ink-900 text-brand-500">
                <Icon name={group.icon} className="text-2xl" />
              </div>

              <h3 className="mt-5 text-xl">{group.title}</h3>

              <p className="mt-2 text-sm leading-relaxed text-ink-700/70">
                {group.note}
              </p>

              {/* ---- Jagahon ke chips ----
                  flex-1 => chhote aur bade card ki height barabar rehti hai.
                  Tick mark chhota aur peela - sajawat, padhne ki cheez nahi. */}
              <ul className="mt-6 flex flex-1 flex-wrap gap-2">
                {group.areas.map((area) => (
                  <li
                    key={area}
                    className="flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1.5 text-xs font-medium text-ink-700"
                  >
                    <FaCheck className="text-[9px] text-brand-600" />
                    {area}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* ---------- SECTION FOOTER ----------
            Poori list kabhi poori nahi hoti. Jiska sheher nahi mila
            usse "na" nahi sunna chahiye - usse ek button milna chahiye. */}
        <div className="mt-12 rounded-2xl border border-dashed border-brand-500/40 bg-brand-50/60 px-6 py-8 text-center">
          <h3 className="text-lg">Do not see your city on the list?</h3>

          <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-ink-700/80">
            We run outstation trips across North India and can arrange a vehicle
            for almost any route. Tell us where you need to go and we will send
            you a rate.
          </p>

          <Button as={Link} to="/contact" variant="primary" size="lg" className="mt-6">
            Ask About Your Route <FaArrowRight className="text-xs" />
          </Button>
        </div>
      </div>
    </section>
  );
}
