import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";
import Icon from "../common/Icon";
import { whyChooseUs } from "../../data/homeContent";
import { siteConfig } from "../../data/siteConfig";

/* ============================================================
   SECTION 7 of 12: WHY CHOOSE US

   PURPOSE - ye section "OBJECTION HANDLING" ka kaam karta hai.

   Customer ke dimaag me booking se pehle 6 dar hote hain:
     "paise zyada le lenge"     -> Transparent Pricing
     "driver safe hoga?"        -> Verified Drivers
     "flight chhut jayegi"      -> Always On Time
     "company fake to nahi?"    -> GST Registered
     "gaadi kharab hogi"        -> Well-Maintained Fleet
     "raat me kaun uthayega?"   -> 24x7 Support

   Har card ek dar ko khatam karta hai. Isliye ye section Services ke
   BAAD aur Contact ke PEHLE hai - decision lene se just pehle.

   LAYOUT:
   Baayein ek "sticky" heading + GST proof card, daayein 6 points.
   Desktop par scroll karte waqt heading rukhi rehti hai (lg:sticky),
   jisse context nahi khota.
   ============================================================ */

export default function WhyChooseUs({ isPage = false }) {
  return (
    <section id="why-us" className="section-y bg-brand-50/40">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          {/* ---------- BAAYI TARAF: heading + proof ---------- */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              {/* Heading har jagah dikhti hai - ye section apni alag
                  baat kehta hai, PageHeader ki baat dohraata nahi. */}
              <SectionHeading
                align="left"
                eyebrow="Why Choose Us"
                title="Why People Trust Manvi Tour & Travels"
                subtitle="We do not just hand over a vehicle - we take responsibility for your entire journey. That is the difference."
              />

              {/* ---- GST PROOF CARD ----
                  Purpose: "GST Registered" sirf keh dena kaafi nahi.
                  Asli number dikhane se claim verify ho jaata hai.
                  Ye document (GST certificate) se liya gaya hai.

                  isPage (yaani /about) par ye card CHHUPA dete hain -
                  us page par GSTIN pehle hi do jagah aa chuka hai
                  (OurStory ka badge aur OwnerMessage ki legal line).
                  Ek hi number teen baar = page bharosa nahi, shak
                  paida karta hai. */}
              {!isPage && (
              <div className="mt-10 rounded-2xl border-2 border-dashed border-brand-500/40 bg-white p-6">
                <p className="font-display text-xs font-bold uppercase tracking-wider text-brand-700">
                  Government Registered Business
                </p>

                <dl className="mt-4 space-y-3 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-ink-700/70">GSTIN</dt>
                    <dd className="text-right font-display font-bold text-ink-900">
                      {siteConfig.gstin}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-ink-700/70">Legal Name</dt>
                    <dd className="text-right font-semibold text-ink-900">
                      {siteConfig.legalName}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-ink-700/70">Constitution</dt>
                    <dd className="text-right font-semibold text-ink-900">
                      {siteConfig.constitution}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-ink-700/70">Registered Since</dt>
                    <dd className="text-right font-semibold text-ink-900">
                      {siteConfig.gstRegisteredOn}
                    </dd>
                  </div>
                </dl>

                <p className="mt-4 border-t border-ink-900/10 pt-3 text-xs text-ink-700/60">
                  Proper GST invoices are available for corporate clients.
                </p>
              </div>
              )}

              {/* ---------- HOME SE ABOUT PAGE KA RAASTA ----------
                  "Why Us" ka apna koi page nahi hai - ye About page ka
                  hissa hai. Isliye ye button /about par le jaata hai. */}
              {!isPage && (
                <Button
                  as={Link}
                  to="/about"
                  variant="outline"
                  size="md"
                  className="mt-6"
                >
                  More About Us <FaArrowRight className="text-xs" />
                </Button>
              )}
            </div>
          </div>

          {/* ---------- DAAYI TARAF: 6 reason cards ---------- */}
          <div className="lg:col-span-7">
            <div className="grid gap-5 sm:grid-cols-2">
              {whyChooseUs.map((item) => (
                <div
                  key={item.id}
                  className="group rounded-2xl border border-ink-900/10 bg-white p-6 transition-all duration-300 hover:border-brand-500 hover:shadow-xl hover:shadow-brand-500/10"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/15 text-brand-700 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-ink-900">
                    <Icon name={item.icon} className="text-xl" />
                  </div>

                  <h3 className="mt-4 text-base">{item.title}</h3>

                  <p className="mt-2 text-sm leading-relaxed text-ink-700/80">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
