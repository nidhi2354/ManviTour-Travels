/* ============================================================
   COMPONENT: <VehicleIllustration type="sedan" />

   PURPOSE:
   Jab tak client apni asli gaadiyon ki photos nahi deta, tab tak
   har vehicle ke liye uske TYPE ka sahi illustration dikhana.

   Pehle yahan random stock photos thi - bus ki jagah car, Fortuner
   ki jagah koi aur SUV. Ye galat hai: customer ko lagta hai company
   dhyan nahi deti. Illustration kam se kam SAHI shape dikhata hai.

   KYUN SVG, PHOTO NAHI?
   - Specific car models ki stock photos commercial use ke liye
     licensed nahi hoti - client ko legal problem ho sakti hai
   - SVG ka size ~1KB hai, page turant load hota hai
   - Brand colours me hai, isliye poori site ek jaisi dikhti hai

   Pattern wahi hai jo <Icon /> me use kiya tha:
   data file me sirf STRING ("bus"), yahan uska shape.
   ============================================================ */

/* Har type ke liye: body ka shape, windows, aur pahiyon ki position.
   viewBox 400 x 240 sab ke liye same hai, isliye saare cards me
   gaadi ka size proportionate lagta hai. */
const shapes = {
  // ---- SEDAN (Swift Dzire) - neechi, 3-box shape ----
  sedan: {
    body: "M44 176 C44 150 62 138 90 133 L136 100 C147 92 161 88 176 88 L236 88 C253 88 267 92 279 101 L318 132 C345 137 358 150 358 176 Z",
    windows: [
      "M150 104 L180 100 L180 128 L134 128 Z",
      "M192 100 L234 100 C247 100 257 105 266 113 L282 128 L192 128 Z",
    ],
    wheels: [112, 298],
  },

  // ---- MPV (Innova Crysta) - lambi, oonchi chhat ----
  mpv: {
    body: "M40 178 C40 148 56 134 84 129 L120 88 C131 77 146 72 162 72 L258 72 C275 72 288 78 298 90 L330 129 C354 134 364 148 364 178 Z",
    windows: [
      "M134 92 L170 88 L170 122 L118 122 Z",
      "M182 88 L226 88 L226 122 L182 122 Z",
      "M238 88 L262 88 C273 88 281 92 288 100 L306 122 L238 122 Z",
    ],
    wheels: [106, 304],
  },

  // ---- SUV (Fortuner) - chaukor, oonchi, bade pahiye ----
  suv: {
    body: "M38 174 L38 130 C38 118 47 110 62 108 L104 70 C113 62 125 58 138 58 L266 58 C281 58 292 63 300 73 L330 108 C352 111 364 120 364 134 L364 174 Z",
    windows: [
      "M116 78 L156 74 L156 104 L106 104 Z",
      "M168 74 L222 74 L222 104 L168 104 Z",
      "M234 74 L262 74 C272 74 279 78 285 86 L300 104 L234 104 Z",
    ],
    wheels: [104, 300],
    rugged: true, // neeche extra ground-clearance line
  },

  // ---- TEMPO TRAVELLER - bilkul chaukor van ----
  tempo: {
    body: "M34 176 L34 82 C34 70 44 62 60 62 L296 62 C314 62 328 68 338 80 L358 106 C365 115 368 124 368 136 L368 176 Z",
    windows: [
      "M48 80 L88 80 L88 112 L48 112 Z",
      "M100 80 L140 80 L140 112 L100 112 Z",
      "M152 80 L192 80 L192 112 L152 112 Z",
      "M204 80 L244 80 L244 112 L204 112 Z",
      "M256 80 L292 80 C302 80 310 84 316 92 L330 112 L256 112 Z",
    ],
    wheels: [94, 312],
  },

  // ---- BUS - sabse bada, lamba box ----
  bus: {
    body: "M26 180 L26 74 C26 62 36 54 52 54 L346 54 C364 54 376 62 376 76 L376 180 Z",
    windows: [
      "M40 72 L82 72 L82 108 L40 108 Z",
      "M94 72 L136 72 L136 108 L94 108 Z",
      "M148 72 L190 72 L190 108 L148 108 Z",
      "M202 72 L244 72 L244 108 L202 108 Z",
      "M256 72 L298 72 L298 108 L256 108 Z",
      "M310 72 L362 72 L362 108 L310 108 Z",
    ],
    wheels: [88, 322],
  },

  // ---- LUXURY SEDAN (Mercedes E-Class) - lambi, sleek ----
  luxury: {
    body: "M38 176 C38 148 56 136 84 131 L128 96 C141 86 158 82 176 82 L246 82 C264 82 279 86 291 95 L332 130 C356 135 366 148 366 176 Z",
    windows: [
      "M142 100 L176 96 L176 126 L126 126 Z",
      "M188 96 L242 96 C254 96 263 100 271 108 L288 126 L188 126 Z",
    ],
    wheels: [108, 298],
    premium: true, // gehra kaala body colour
  },
};

export default function VehicleIllustration({ type = "sedan", className = "" }) {
  // Galat type aaye to page crash na ho - sedan par fallback
  const shape = shapes[type] ?? shapes.sedan;

  const bodyColor = shape.premium ? "#1A1A1A" : "#2B2B2B";

  return (
    <svg
      viewBox="0 0 400 240"
      className={className}
      role="img"
      aria-label={`${type} vehicle illustration`}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        {/* Background ka halka peela gradient */}
        <linearGradient id={`bg-${type}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFF3C4" />
          <stop offset="100%" stopColor="#FFE68A" />
        </linearGradient>
      </defs>

      {/* 1. Background */}
      <rect width="400" height="240" fill={`url(#bg-${type})`} />

      {/* 2. Suraj - logo se match karta hai */}
      <circle cx="320" cy="58" r="30" fill="#F5A623" opacity="0.45" />

      {/* 3. Sadak */}
      <rect x="0" y="196" width="400" height="44" fill="#0D0D0D" opacity="0.08" />
      <line
        x1="20" y1="212" x2="380" y2="212"
        stroke="#0D0D0D" strokeWidth="3" strokeDasharray="22 16"
        opacity="0.18" strokeLinecap="round"
      />

      {/* 4. Gaadi ka saaya (shadow) - zameen par tikne ka ehsaas */}
      <ellipse cx="200" cy="196" rx="168" ry="10" fill="#0D0D0D" opacity="0.14" />

      {/* 5. Body */}
      <path d={shape.body} fill={bodyColor} />

      {/* 6. Windows - map() se, kyunki har type me alag count hai */}
      <g fill="#FFC61A" opacity="0.9">
        {shape.windows.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </g>

      {/* 7. SUV ke liye extra ground-clearance strip */}
      {shape.rugged && (
        <rect x="120" y="168" width="164" height="8" rx="4" fill="#0D0D0D" opacity="0.5" />
      )}

      {/* 8. Pahiye - bahar kaala tyre, andar peela rim */}
      {shape.wheels.map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy="180" r="27" fill="#0D0D0D" />
          <circle cx={cx} cy="180" r="12" fill="#FFC61A" />
          <circle cx={cx} cy="180" r="5" fill="#0D0D0D" />
        </g>
      ))}
    </svg>
  );
}
