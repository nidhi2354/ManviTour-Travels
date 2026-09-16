import SectionHeading from "../common/SectionHeading";
import Icon from "../common/Icon";
import { bookingSteps } from "../../data/homeContent";

/* ============================================================
   SECTION 8 of 12: HOW IT WORKS (3-Step Booking)

   PURPOSE:
   Bahut se log isliye book nahi karte kyunki unhe lagta hai
   "process lamba hoga, documents maangenge, jhanjhat hoga".
   Ye section dikhata hai: bas 3 step, 15 minute, ho gaya.

   DESIGN DETAIL - CONNECTING LINE:
   Desktop par teeno cards ke beech ek dashed line hai jo batati hai
   ki ye ek SEQUENCE hai, alag-alag cheezein nahi. Mobile par ye line
   hide kar di gayi hai (hidden lg:block) kyunki wahan cards
   upar-neeche hote hain, line ka matlab hi nahi banta.
   ============================================================ */

export default function HowItWorks() {
  return (
    <section className="section-y bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="How It Works"
          title="Book In Just 3 Easy Steps"
          subtitle="No long forms and no paperwork queues. One call or one message is all it takes."
        />

        {/* ---------- STEPS ---------- */}
        <div className="relative mt-16">
          {/* Connecting dashed line - sirf desktop par */}
          <div
            className="absolute left-0 right-0 top-12 hidden h-px lg:block"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to right, var(--color-brand-500) 0 10px, transparent 10px 20px)",
            }}
            aria-hidden="true"
          />

          <div className="relative grid gap-10 lg:grid-cols-3 lg:gap-8">
            {bookingSteps.map((step) => (
              <div key={step.id} className="text-center">
                {/* Number circle - line ke upar baithta hai (relative + bg-white) */}
                <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-500 text-ink-900 shadow-xl shadow-brand-500/30">
                    <Icon name={step.icon} className="text-3xl" />
                  </div>

                  {/* Step number badge */}
                  <span className="absolute -right-1 -top-1 flex h-9 w-9 items-center justify-center rounded-full bg-ink-900 font-display text-xs font-extrabold text-brand-500 ring-4 ring-white">
                    {step.step}
                  </span>
                </div>

                <h3 className="mt-6 text-lg">{step.title}</h3>

                <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-ink-700/80">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
