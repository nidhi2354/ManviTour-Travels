import { siteConfig } from "../../data/siteConfig";

/* ============================================================
   COMPONENT: <Logo />
  

   
   

   AGAR CLIENT ASLI LOGO FILE (PNG/SVG) DE DE:
     1. file ko  src/assets/logo.png  me rakhein
     2. upar likhein:  import logoImg from "../../assets/logo.png";
     3. neeche <svg>...</svg> ki jagah:  <img src={logoImg} alt="Manvi Tour & Travels" className="h-12 w-auto" />

   
   ============================================================ */

export default function Logo({ variant = "dark", className = "" }) {
  const isLight = variant === "light";

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* ---------- LOGO MARK (suraj + gaadi) ---------- */}
      <svg
        viewBox="0 0 130 86"
        className="h-11 w-auto shrink-0 sm:h-12"
        role="img"
        aria-label="Manvi Tour and Travels logo"
      >
        <defs>
          {/* Suraj ka gradient - upar halka orange, neeche gehra */}
          <linearGradient id="sunGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFD166" />
            <stop offset="100%" stopColor="#F5A623" />
          </linearGradient>
        </defs>

        {/* 1. Suraj - gaadi ke peeche ka golden circle */}
        <circle cx="65" cy="36" r="27" fill="url(#sunGradient)" />

        {/* 2. Speed lines - suraj ke aar-paar, "raftaar" ka ehsaas dete hain */}
        <g stroke={isLight ? "#0D0D0D" : "#FFFFFF"} strokeWidth="3" strokeLinecap="round" opacity="0.9">
          <line x1="40" y1="26" x2="66" y2="26" />
          <line x1="48" y1="34" x2="78" y2="34" />
        </g>

        {/* 3. Gaadi ki silhouette - brand ka main element */}
        <path
          d="M12 62c0-10 8-15 20-16l15-13c5-4 11-6 18-6h18c9 0 17 3 24 9l10 9c8 2 11 7 10 13-1 4-4 5-8 5H18c-4 0-6-2-6-6z"
          fill={isLight ? "#FFFFFF" : "#0D0D0D"}
        />

        {/* 4. Pahiye - bahar kaala tyre, andar golden rim */}
        <g>
          <circle cx="41" cy="64" r="11" fill={isLight ? "#FFFFFF" : "#0D0D0D"} />
          <circle cx="41" cy="64" r="4.5" fill="#F5A623" />
          <circle cx="103" cy="64" r="11" fill={isLight ? "#FFFFFF" : "#0D0D0D"} />
          <circle cx="103" cy="64" r="4.5" fill="#F5A623" />
        </g>

        {/* 5. Road swoosh - gaadi ke neeche ki sadak */}
        <path
          d="M6 78c24-7 94-7 118 0-24 6-94 6-118 0z"
          fill="#F5A623"
          opacity="0.85"
        />
      </svg>

      {/* ---------- LOGO TEXT ---------- */}
      <div className="leading-none">
        <span
          className={`block font-display text-xl font-extrabold tracking-tight sm:text-2xl ${isLight ? "text-white" : "text-ink-900"
            }`}
        >
          {siteConfig.brandName}
        </span>
        <span className="block font-display text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-600 sm:text-[11px]">
          {siteConfig.brandSuffix}
        </span>
      </div>
    </div>
  );
}
