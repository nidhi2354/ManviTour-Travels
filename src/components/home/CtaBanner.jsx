import { FaPhone, FaWhatsapp, FaClock } from "react-icons/fa6";
import Button from "../common/Button";
import { siteConfig } from "../../data/siteConfig";

/* ============================================================
   SECTION 10 of 12: CTA BANNER (peeli patti)

   PURPOSE:
   Ab tak visitor ne services, rates, packages aur reviews - sab dekh
   liya hai. Uske dimaag me decision ban chuka hai. Ye banner uss
   decision ko ACTION me badalne ka kaam karta hai.

   YE SECTION PEELA KYUN HAI?
   Poore page par ab tak safed aur kaala background tha. Achanak
   ek pura peela block aata hai - aankh apne aap yahan rukti hai.
   Isse "visual interruption" kehte hain. Ye CTA ko miss hone se
   bachata hai.

   Isme 2 CTA hain - Call aur WhatsApp. Kyunki har customer phone
   par baat karna pasand nahi karta, khaas kar young users.
   ============================================================ */

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-brand-500">
      {/* Decorative dots - visiting card wale pattern se inspired */}
      <div
        className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--color-ink-900) 2px, transparent 2px)",
          backgroundSize: "18px 18px",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-10 -left-10 h-56 w-56 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--color-ink-900) 2px, transparent 2px)",
          backgroundSize: "18px 18px",
        }}
        aria-hidden="true"
      />

      <div className="container-x relative py-14 md:py-16">
        <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
          {/* ---- Message ---- */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-ink-900/10 px-4 py-1.5 font-display text-xs font-bold uppercase tracking-wider text-ink-900">
              <FaClock /> {siteConfig.workingHours}
            </span>

            <h2 className="mt-4 max-w-2xl text-3xl leading-tight sm:text-4xl">
              Start Planning Your Journey &mdash; Call Us Today
            </h2>

            <p className="mt-3 max-w-xl text-ink-900/70">
              Getting a quote is completely free. Make one call and receive the
              best rate for your trip within 15 minutes.
            </p>
          </div>

          {/* ---- Buttons ---- */}
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:shrink-0">
            <Button as="a" href={`tel:${siteConfig.phoneRaw}`} variant="dark" size="lg">
              <FaPhone /> {siteConfig.phone}
            </Button>

            <Button
              as="a"
              href={`https://wa.me/${siteConfig.whatsapp}?text=Hello%20Manvi%20Tour%20%26%20Travels,%20mujhe%20quote%20chahiye`}
              target="_blank"
              rel="noopener noreferrer"
              variant="white"
              size="lg"
            >
              <FaWhatsapp className="text-lg text-green-600" /> WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
