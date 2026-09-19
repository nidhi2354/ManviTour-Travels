# Manvi Tour & Travels — Website (Frontend)

Client: **Manvi Tour & Travels**, Dwarka, New Delhi
Proprietor: Rakesh · GSTIN: `07BGLPR4415A1ZL`

Stack: **React 19 + Vite 8 + Tailwind CSS v4** (MERN ka "R" — backend baad me judega)

---

## 1. Project kaise chalayein

```bash
npm install     # sirf pehli baar
npm run dev     # http://localhost:5173
npm run build   # production build -> dist/
npm run preview # build ko locally check karne ke liye
```

> ⚠️ **Folder name me `&` hai** (`manviTour&Travels`). Windows par `&` command
> ko todh deta hai, isliye `package.json` ke scripts me `vite` ko seedha
> `node ./node_modules/vite/bin/vite.js` se call kiya gaya hai.
> **Behtar hai ki folder ka naam `manvi-tour-travels` kar diya jaaye**, phir
> scripts ko wapas normal (`"dev": "vite"`) kiya ja sakta hai.

---

## 2. Folder structure

```
src/
├── assets/                  # images, logo file (abhi khaali)
│
├── components/
│   ├── common/              # har jagah reuse hone wale chhote parts
│   │   ├── Button.jsx           # saare buttons ka ek hi design
│   │   ├── EnquiryForm.jsx      # LEAD FORM (Hero + Contact dono me)
│   │   ├── FilterChips.jsx      # filter ki chip row (Fleet + Packages)
│   │   ├── Icon.jsx             # string naam -> react-icon mapping
│   │   ├── Logo.jsx             # SVG logo (light/dark variant)
│   │   ├── PageHeader.jsx       # inner pages ka kaala banner (title + optional photo)
│   │   ├── ScrollToTop.jsx      # page badle to upar se khule (render kuch nahi karta)
│   │   └── SectionHeading.jsx   # eyebrow + title + subtitle
│   │
│   ├── layout/              # har page par same rehne wale parts
│   │   ├── TopBar.jsx           # kaali strip (phone, GSTIN, socials)
│   │   ├── Navbar.jsx           # sticky nav + mobile drawer + active link
│   │   ├── Footer.jsx           # links, address, legal info
│   │   └── FloatingActions.jsx  # mobile bottom call/WhatsApp bar
│   │
│   └── sections/            # page ke bade tukde — EK SE ZYADA PAGE PAR chalte hain
│       ├── Hero.jsx             # sirf Home
│       ├── Services.jsx         # Home + /services (card grid)
│       ├── ServiceDetails.jsx   # sirf /services (har service ka detail)
│       ├── Faq.jsx              # sirf /services (accordion, zero JS)
│       ├── OurStory.jsx         # sirf /about (kahani + photo collage)
│       ├── OwnerMessage.jsx     # sirf /about (owner ka message)
│       ├── ServiceAreas.jsx     # sirf /about (Delhi/NCR/outstation + SEO)
│       ├── Fleet.jsx            # Home + /fleet
│       ├── Packages.jsx         # Home + /packages (cards + filter)
│       ├── PackageInclusions.jsx # sirf /packages (kya hai, kya nahi)
│       ├── WhyChooseUs.jsx      # Home + /about + /fleet
│       ├── HowItWorks.jsx       # Home + /services + /packages + /about
│       ├── Testimonials.jsx     # Home + /about
│       ├── CtaBanner.jsx        # lagbhag har page
│       └── Contact.jsx          # Home + /contact
│
├── data/                    # 👈 BACKEND DEV YAHAN SE SHURU KARE
│   ├── siteConfig.js            # business info + nav links (routes)
│   ├── services.js              # 7 services
│   ├── fleet.js                 # vehicles + rate/km + filter options
│   ├── packages.js              # tour packages
│   ├── homeContent.js           # stats, why-us, booking steps
│   ├── about.js                 # story, owner message, service areas
│   ├── faqs.js                  # 8 sawaal-jawab (/services page)
│   └── testimonials.js          # customer reviews
│
├── pages/                   # ek file = ek URL
│   ├── Home.jsx                 # /
│   ├── About.jsx                # /about
│   ├── Services.jsx             # /services
│   ├── Fleet.jsx                # /fleet
│   ├── Packages.jsx             # /packages
│   ├── Contact.jsx              # /contact
│   └── NotFound.jsx             # 404
│
├── routes/
│   └── AppRoutes.jsx        # URL <-> page ka naksha
│
├── App.jsx                  # layout shell (TopBar + Nav + <AppRoutes /> + Footer)
├── main.jsx                 # React entry point + <BrowserRouter>
└── index.css                # Tailwind theme + brand colors
```

**Rule 1:** component sirf `data/` se data leta hai, kabhi hard-code nahi karta.
Isi wajah se backend jodna aasan hoga — sirf `data/` files ko API call se
replace karna hoga.

**Rule 2:** page khud koi design nahi karta. Page ka kaam sirf `PageHeader` +
kuch `sections/` ko sahi order me jodna hai. Isi wajah se ek hi Services grid
Home aur `/services` dono par chalti hai — do jagah maintain nahi karni padti.

**Rule 3:** site ke andar ka link hamesha `<Link to="/fleet">`, kabhi
`<a href="/fleet">` nahi. `<a>` poora page reload karta hai. `tel:`, `mailto:`
aur `wa.me` bahar jaate hain — unke liye `<a>` hi sahi hai.

---

## 2b. Routing kaise kaam karti hai

```
main.jsx          <BrowserRouter>  ← router sabse bahar
  └── App.jsx     TopBar + Navbar + <AppRoutes /> + Footer
        └── routes/AppRoutes.jsx   <Route path="/fleet" element={<Fleet />} />
              └── pages/Fleet.jsx  PageHeader + sections
```

**Naya page add karna (3 step):**

1. `src/pages/NayaPage.jsx` banayein
2. `src/routes/AppRoutes.jsx` me import + ek `<Route>` line
3. navbar me chahiye? `src/data/siteConfig.js` ke `navLinks` me ek line

**`isPage` prop:** section components ye prop lete hain. `isPage={true}` matlab
"tu ab poora page hai" — tab section apna `SectionHeading` aur apna "View All"
button chhupa deta hai (PageHeader pehle se heading dikha raha hai, aur user
already usi page par hai).

**⚠️ Deploy karte waqt:** `BrowserRouter` ke saath `/fleet` par seedha jaane par
server 404 deta hai. Isliye `public/_redirects` file banayi gayi hai
(Netlify/Cloudflare). Vercel apne aap handle karta hai; Apache par `.htaccess`
me RewriteRule chahiye.

---

## 3. Home page ke sections aur unka purpose

| # | Section | File | Purpose (kyun banaya) |
|---|---------|------|----------------------|
| 1 | Top Bar | `layout/TopBar.jsx` | Phone + GSTIN sabse upar — instant trust. Mobile par hidden |
| 2 | Navbar | `layout/Navbar.jsx` | Logo, navigation, "Book Now" CTA. Sticky + mobile drawer |
| 3 | Hero | `sections/Hero.jsx` | 5 second me batana: kya karte hain, bharosa kyun, book kaise. Enquiry form yahin |
| 4 | Services | `sections/Services.jsx` | Card par likhi 7 services. "Mera kaam ye karte hain?" ka jawab |
| 5 | Fleet | `sections/Fleet.jsx` | Gaadi + seats + rate/km. Price chhupane se trust girta hai |
| 6 | Packages | `sections/Packages.jsx` | Ready-made tours — customer ko khud plan nahi banana padta |
| 7 | Why Choose Us | `sections/WhyChooseUs.jsx` | 6 objections ka jawab + asli GSTIN proof card |
| 8 | How It Works | `sections/HowItWorks.jsx` | 3 step booking — "process lamba hoga" wala dar khatam |
| 9 | Testimonials | `sections/Testimonials.jsx` | Social proof, form se theek pehle |
| 10 | CTA Banner | `sections/CtaBanner.jsx` | Peela block = visual interruption, action ka push |
| 11 | Contact | `sections/Contact.jsx` | Call / WhatsApp / Email / Address / Map / Form — chaaro raste |
| 12 | Footer | `layout/Footer.jsx` | Navigation + SEO keywords + legal (GSTIN, legal name) |

Section ka order ek **sales funnel** hai — `pages/Home.jsx` ke comment me
poora flow likha hai. Order badalne se pehle wo padh lein.

---

## 4. Backend developer ke liye — API contract

Frontend ne jo data shapes use kiye hain, backend ko wahi bhejne hain.
Har `src/data/*.js` file ke upar comment me detail likhi hai.

### Read APIs

| Endpoint | Response | Frontend file |
|----------|----------|---------------|
| `GET /api/site-settings` | `{ phone, email, address{}, gstin, socials{} }` | `data/siteConfig.js` |
| `GET /api/services` | `[{ id, slug, title, description, icon, highlight }]` | `data/services.js` |
| `GET /api/vehicles` | `[{ id, name, category, seats, luggage, ratePerKm, image, features[] }]` | `data/fleet.js` |
| `GET /api/packages?featured=true` | `[{ id, slug, title, route, duration, startingPrice, image, tags[], isFeatured }]` | `data/packages.js` |
| `GET /api/reviews?approved=true` | `[{ id, name, city, rating, message, tripType }]` | `data/testimonials.js` |

### Write API (sabse zaroori)

```
POST /api/enquiries
```

```json
{
  "name":        "Rakesh Kumar",
  "phone":       "9289360999",
  "serviceType": "airport-pick-drop",
  "pickup":      "Dwarka, New Delhi",
  "drop":        "IGI Airport T3",
  "travelDate":  "2026-10-02",
  "passengers":  4,
  "message":     "2 bade suitcase hain"
}
```

Response: `{ "success": true, "enquiryId": "ENQ-1024" }`

Backend ko ye bhi chahiye:

- **Owner ko turant notification** (WhatsApp / SMS / email) — travel business me
  late reply = lead gayi
- **Server-side validation** — frontend validation sirf UX ke liye hai, usse
  bypass kiya ja sakta hai
- **Rate limiting** — spam bots se bachne ke liye
- **Admin panel** — enquiries dekhne, reviews approve karne aur rates
  update karne ke liye

Notes:
- `ratePerKm` aur `startingPrice` **number** me bhejna (string me nahi) —
  frontend `.toLocaleString("en-IN")` se format karta hai
- `icon` ek **string** hai (`"FaCarSide"`), `common/Icon.jsx` usse component
  me badalta hai. DB me string hi rakhna
- `slug` future detail pages ka URL banega (`/packages/golden-triangle-tour`)

---

## 5. Client se confirm karke update karne wali cheezein

| Cheez | Kahan | Status |
|-------|-------|--------|
| Asli logo file (PNG/SVG) | `components/common/Logo.jsx` | Abhi SVG recreation hai — swap karne ke steps file ke comment me |
| Email address | `data/siteConfig.js` → `email` | Placeholder — document me email nahi tha |
| Vehicle rates | `data/fleet.js` → `ratePerKm` | **Sample** — confirm zaroori |
| Package prices | `data/packages.js` → `startingPrice` | **Sample** — confirm zaroori |
| Stats (10+ saal, 25,000+ customers) | `data/homeContent.js` → `stats` | **Sample** — galat claim nahi karni |
| Reviews | `data/testimonials.js` | **Sample** — Google reviews se replace karein |
| Social media links | `data/siteConfig.js` → `socials` | `#` placeholder |
| **Form kahan jaaye** | `common/EnquiryForm.jsx` → `DELIVERY` | Abhi **WhatsApp** — submit par owner ka chat khulta hai. Client (a) sirf UI ya (c) email service chahe to ek line badalni hai |
| Vehicle photos | `public/fleet/` | ✅ client ki apni gaadiyan lagi hui hain |
| **Package photos** | `public/packages/` | ❌ **abhi ek bhi nahi** — 8 files chahiye, list `photos-client/README.txt` me |
| OG banner (1200×630) | `public/og-banner.jpg` | Abhi nahi hai |

---

## 6. Design system

`src/index.css` ke `@theme` block me sab define hai:

| Token | Value | Use |
|-------|-------|-----|
| `brand-500` | `#FFC61A` | Main peela (visiting card se) |
| `ink-900` | `#0D0D0D` | Main kaala (card ka background) |
| `sun-500` | `#F5A623` | Logo ka suraj |
| `font-display` | Poppins | Headings, buttons |
| `font-body` | Inter | Paragraph text |

Helper classes: `.container-x` (max-width + padding), `.section-y` (vertical spacing)

Breakpoints (Tailwind default, **mobile-first**):
`sm:` 640px · `md:` 768px · `lg:` 1024px · `xl:` 1280px

---

## 7. Aage kya banana hai (Phase 2)

Routing lag chuki hai (`src/routes/AppRoutes.jsx`). Ab ye baaki hai:

- [x] ~~Routing setup~~ — `BrowserRouter` + 6 route + 404
- [x] ~~Contact page~~ — `/contact`
- [x] ~~Fleet page~~ — `/fleet` (filter abhi baaki)
- [x] ~~Packages listing~~ — `/packages`
- [x] ~~Services listing~~ — `/services`
- [ ] **About page ka asli content** — abhi sirf trust sections hain.
      Client se chahiye: company ki kahani, owner ka photo + message,
      office/team photo, milestones
- [ ] `/services/:slug` detail page (slug `data/services.js` me ready hai)
- [ ] `/packages/:slug` detail page — client se chahiye: day-wise
      itinerary, hotel category, aur 8 destination photos
- [x] ~~Fleet page par filter~~ — type + group size (budget filter baaki)
- [ ] Privacy Policy + Terms page (footer me abhi `href="#"` placeholder)
- [ ] Fare calculator (`ratePerKm` × distance)
- [ ] Gallery (`photos-client/` me client ki photos padi hain)
- [ ] Admin panel (backend ke saath)
