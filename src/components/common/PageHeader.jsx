import { useState } from "react";

/* ============================================================
   COMPONENT: <PageHeader />

   PURPOSE:
   Home ke alawa har page ke sabse upar ek kaali patti. Uska kaam:
     1. Page ka naam batana      -> "Our Fleet"
     2. Ek line me context dena  -> subtitle

   DESIGN: Hero jaisa hi kaala background + peela glow rakha hai,
   taaki page khulte hi brand pehchana jaaye. Lekin height jaanbujh
   kar chhoti hai - ye hero nahi hai, sirf ek label patti hai.
   Asli content neeche hai, use jaldi dikhna chahiye.

   ============================================================
   DO LAYOUT - image prop se apne aap chunta hai
   ============================================================
   image NAHI diya  -> patli patti, sirf text (Fleet, Services...)
   image DIYA       -> 2 column: BAAYEIN photo, DAAYEIN text (About)

   Mobile par dono me text pehle aata hai, photo uske baad. Kyun?
   Page khulte hi user ko pata chalna chahiye ki wo kahan hai -
   wo kaam heading karti hai, photo nahi.

   ============================================================
   PROPS
   ============================================================
     eyebrow       - chhota peela label (optional)
     title         - page ka <h1> (har page par SIRF EK h1)
     subtitle      - ek line explanation (optional)
     image         - baayein dikhne wali photo ka path (optional)
     imageAlt      - us photo ka alt text
     imageFallback - asli photo na mile to iski jagah ye dikhegi
   ============================================================ */

export default function PageHeader({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt = "",
  imageFallback,
}) {
  /* Photo missing ho to page toota hua na dikhe - wahi safety net
     jo Fleet.jsx me hai. Teen soorat:
       1. photo hai        -> photo dikhegi
       2. photo nahi mili + fallback hai -> fallback dikhegi
       3. dono nahi        -> photo column hi gayab, text poori chaudai
     Site kabhi broken image ka icon nahi dikhayegi. */
  const [failed, setFailed] = useState(false);
  const shownImage = failed ? imageFallback : image;
  const hasImage = Boolean(shownImage);

  return (
    <section className="relative overflow-hidden bg-ink-900 py-11 md:py-15">
      {/* Peela glow - flat kaale box jaisa lagne se bachata hai */}
      <div className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-brand-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-sun-500/10 blur-[120px]" />

      {/* Dotted pattern - visiting card wale pattern se */}
      <div
        className="pointer-events-none absolute right-8 top-8 hidden h-28 w-28 opacity-25 lg:block"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--color-brand-500) 1.5px, transparent 1.5px)",
          backgroundSize: "14px 14px",
        }}
        aria-hidden="true"
      />

      <div className="container-x relative">
        <div
          className={
            hasImage ? "grid items-center gap-8 lg:grid-cols-12 lg:gap-12" : ""
          }
        >
          {/* ---- PHOTO (sirf jab image prop diya ho) ----
              lg par BAAYEIN (order-1), mobile par text ke NEECHE (order-2).

              aspect-[16/10] KYUN, 4/3 KYUN NAHI?
              4:3 photo is chaudai par kaafi oonchi ho jaati hai aur
              poora header screen ghhrer leta hai - neeche ka content
              dikhta hi nahi. 16:10 chaudi-chapti hai, banner jaisi.
              object-cover upar-neeche se thoda crop kar deta hai. */}
          {hasImage && (
            <div className="order-2 lg:order-1 lg:col-span-5">
              <div className="overflow-hidden rounded-2xl shadow-2xl shadow-black/50 ring-1 ring-white/15">
                <img
                  src={shownImage}
                  alt={imageAlt}
                  /* eager: ye screen ka pehla hissa hai. Isse lazy karne
                     par photo baad me aati hai aur layout kood jaata hai. */
                  loading="eager"
                  onError={() => setFailed(true)}
                  className="aspect-[16/10] w-full object-cover"
                />
              </div>
            </div>
          )}

          {/* ---- TEXT ---- */}
          <div className={hasImage ? "order-1 lg:order-2 lg:col-span-7" : ""}>
            {/* EYEBROW */}
            {eyebrow && (
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 font-display text-xs font-bold uppercase tracking-[0.15em] text-brand-400">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                {eyebrow}
              </span>
            )}

            {/* TITLE
                Ye page ka <h1> hai. Home page ka h1 Hero me hai,
                baaki har page ka h1 YAHAN hai - kabhi do h1 nahi. */}
            <h1 className="mt-4 max-w-3xl text-3xl leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
              {title}
            </h1>

            {subtitle && (
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
                {subtitle}
              </p>
            )}

            {/* Brand underline - SectionHeading jaisa hi */}
            <div className="mt-5 flex items-center gap-1.5">
              <span className="h-1 w-10 rounded-full bg-brand-500" />
              <span className="h-1 w-3 rounded-full bg-brand-500/50" />
              <span className="h-1 w-1.5 rounded-full bg-brand-500/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
