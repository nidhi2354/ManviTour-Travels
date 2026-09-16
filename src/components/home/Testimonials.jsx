import { FaStar, FaQuoteRight } from "react-icons/fa6";
import SectionHeading from "../common/SectionHeading";
import { testimonials } from "../../data/testimonials";

/* ============================================================
   SECTION 9 of 12: TESTIMONIALS

   PURPOSE - SOCIAL PROOF.
   Company khud ko "best" bole to koi nahi maanta. Lekin dusre
   customer bolein to bharosa turant banta hai. Isliye ye section
   Contact form se THEEK PEHLE rakha hai - form bharne se pehle
   aakhri push.

   CHHOTI PAR ZAROORI BAAT:
   Har review ke saath "tripType" (Airport Pick & Drop, Wedding Car...)
   likha hai. Isse review zyada asli lagta hai, aur visitor ko apni
   situation se milta-julta review dhoondhne me aasani hoti hai.

   AVATAR:
   Asli photo nahi hai, isliye naam ka pehla akshar ek peele circle me
   dikhaya hai. Ye stock photo lagane se zyada imaandaar hai.
   ============================================================ */

export default function Testimonials() {
  return (
    <section className="section-y bg-brand-50/40">
      <div className="container-x">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Customers Say"
          subtitle="These are not just reviews - they are the experiences of people who trusted us with their family travel."
        />

        {/* ---------- REVIEW CARDS ----------
            columns-1 / sm:columns-2 / lg:columns-3 = MASONRY layout.
            Grid ke ulat, isme har card apni zaroorat ki height leta hai
            (chhota review = chhota card). Dikhne me natural lagta hai.
            break-inside-avoid zaroori hai, warna card do column me
            toot jaata hai. */}
        <div className="mt-14 columns-1 gap-6 space-y-6 sm:columns-2 lg:columns-3">
          {testimonials.map((review) => (
            <article
              key={review.id}
              className="break-inside-avoid rounded-2xl border border-ink-900/10 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-xl"
            >
              {/* Upar: rating + quote icon */}
              <div className="flex items-start justify-between">
                <div className="flex gap-0.5" aria-label={`${review.rating} out of 5 stars`}>
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={
                        i < review.rating ? "text-brand-500" : "text-ink-900/15"
                      }
                    />
                  ))}
                </div>
                <FaQuoteRight className="text-2xl text-brand-500/20" />
              </div>

              {/* Review ka text */}
              <p className="mt-4 text-sm leading-relaxed text-ink-700">
                &ldquo;{review.message}&rdquo;
              </p>

              {/* Neeche: naam + sheher + trip type */}
              <div className="mt-5 flex items-center gap-3 border-t border-ink-900/10 pt-5">
                {/* Initial avatar */}
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-500 font-display text-base font-extrabold text-ink-900">
                  {review.name.charAt(0)}
                </span>

                <div className="min-w-0">
                  <p className="truncate font-display text-sm font-bold text-ink-900">
                    {review.name}
                  </p>
                  <p className="truncate text-xs text-ink-700/60">{review.city}</p>
                </div>
              </div>

              {/* Trip type chip */}
              <span className="mt-4 inline-block rounded-full bg-brand-50 px-3 py-1 text-[11px] font-semibold text-brand-700">
                {review.tripType}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
