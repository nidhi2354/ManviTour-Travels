/* ============================================================
   COMPONENT: <SectionHeading />
   PURPOSE: Har section ka heading ek jaisa dikhe.

   DESIGN LOGIC (ye interview me bhi poocha jaata hai):
   Ek achhe section heading ke 3 hisse hote hain -
     1. EYEBROW  - chhota peela label, batata hai "ye kis baare me hai"
     2. TITLE    - bada bold heading, main message
     3. SUBTITLE - ek line explanation, doubt clear karti hai
   Teeno milkar visitor ko 2 second me context de dete hain.

   PROPS:
     eyebrow, title, subtitle  -> text
     align = "center" | "left" -> heading ka alignment
     light = true              -> dark background par white text
   ============================================================ */

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}) {
  const isCenter = align === "center";

  return (
    <div
      className={`max-w-2xl ${isCenter ? "mx-auto text-center" : "text-left"}`}
    >
      {/* 1. EYEBROW */}
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-display text-xs font-bold uppercase tracking-[0.15em] ${
            light
              ? "bg-white/10 text-brand-400"
              : "bg-brand-100 text-brand-700"
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
          {eyebrow}
        </span>
      )}

      {/* 2. TITLE */}
      <h2
        className={`mt-4 text-3xl leading-tight sm:text-4xl lg:text-[2.75rem] ${
          light ? "text-white" : "text-ink-900"
        }`}
      >
        {title}
      </h2>

      {/* 3. SUBTITLE */}
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            light ? "text-white/70" : "text-ink-700/80"
          }`}
        >
          {subtitle}
        </p>
      )}

      {/* Decorative underline - chhota sa brand touch */}
      <div
        className={`mt-6 flex items-center gap-1.5 ${
          isCenter ? "justify-center" : "justify-start"
        }`}
      >
        <span className="h-1 w-10 rounded-full bg-brand-500" />
        <span className="h-1 w-3 rounded-full bg-brand-500/50" />
        <span className="h-1 w-1.5 rounded-full bg-brand-500/30" />
      </div>
    </div>
  );
}
