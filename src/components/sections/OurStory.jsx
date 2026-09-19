import { Link } from "react-router-dom";
import { FaArrowRight, FaShieldHalved } from "react-icons/fa6";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";
import Icon from "../common/Icon";
import { aboutStory } from "../../data/about";
import { siteConfig } from "../../data/siteConfig";

/* ============================================================
   SECTION: OUR STORY  (/about page)

   PURPOSE:
   About page par visitor ek hi sawaal le kar aata hai - "ye log
   asli hain ya nahi". Ye section uska jawab 3 tareeke se deta hai:
     1. SHABD    - hum kaun hain, kahan se chalte hain (text)
     2. SABOOT   - asli GSTIN, asli pata (floating card)
     3. AANKHON DEKHA - client ki APNI gaadiyon ki photo

   Teesra sabse taakatwar hai. Stock photo yahan jaanbujh kar nahi
   lagayi - About page par doosre ki gaadi lagana ulta kaam karta hai.

   ============================================================
   LAYOUT SOCH
   ============================================================
   Desktop : 12-column grid, 6 text + 6 photo
   Mobile  : ek ke neeche ek, par PHOTO PEHLE (order-first).
             Kyun? Mobile par sabse pehle dikhne wali cheez photo ho
             to visitor rukta hai. Sirf text se wo scroll kar jaata hai.

   PHOTO COLLAGE:
   Ek badi photo, uske kone par ek chhoti photo overlap karti hui,
   aur ek floating GSTIN card. Teen alag layer = tasveer flat nahi
   lagti. Isi ko "depth" kehte hain.
   ============================================================ */

export default function OurStory() {
  return (
    <section className="section-y bg-white">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* ============================================
              PHOTO COLLAGE
              lg par DAAYIN taraf (order-2), mobile par UPAR (order-1)
              ============================================ */}
          <div className="order-1 lg:order-2 lg:col-span-6">
            {/* pb-16/pr-10 : chhoti photo aur badge bahar nikalte hain,
                unke liye pehle hi jagah chhod di - warna wo kat jaate. */}
            <div className="relative pb-16 pr-6 sm:pr-10">
              {/* ---- Badi photo ---- */}
              <div className="overflow-hidden rounded-3xl shadow-2xl shadow-ink-900/15">
                <img
                  src={aboutStory.photoMain}
                  alt="Toyota Innova Crysta from the Manvi Tour & Travels fleet"
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>

              {/* ---- Chhoti photo - neeche baayein, overlap karti hui ----
                  border-white se ye badi photo se alag "kati hui" dikhti hai.
                  Mobile par chhupa di gayi (hidden sm:block) - chhoti screen
                  par overlap ganda lagta hai. */}
              <div className="absolute bottom-0 left-0 hidden w-44 overflow-hidden rounded-2xl border-4 border-white shadow-xl sm:block lg:w-52">
                <img
                  src={aboutStory.photoSmall}
                  alt="Force Tempo Traveller from the Manvi Tour & Travels fleet"
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>

              {/* ---- Floating GSTIN card - upar daayein ----
                  Ye poore page ka sabse taakatwar element hai: ek aisa
                  number jo koi bhi Google par check kar sakta hai. */}
              <div className="absolute right-0 top-6 rounded-2xl bg-ink-900 p-4 shadow-2xl sm:top-10">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-500 text-ink-900">
                    <FaShieldHalved />
                  </span>

                  <div>
                    <p className="font-display text-[10px] font-bold uppercase tracking-wider text-white/50">
                      Govt. Registered
                    </p>
                    <p className="font-display text-xs font-bold text-brand-500">
                      {siteConfig.gstin}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ============================================
              TEXT
              ============================================ */}
          <div className="order-2 lg:order-1 lg:col-span-6">
            <SectionHeading
              align="left"
              eyebrow={aboutStory.eyebrow}
              title={aboutStory.title}
            />

            {/* Paragraphs data file se.
                space-y-4 => har paragraph ke beech barabar gap,
                har <p> par manually margin lagane ki zaroorat nahi. */}
            <div className="mt-7 space-y-4">
              {aboutStory.paragraphs.map((text, index) => (
                <p
                  key={index}
                  className="text-base leading-relaxed text-ink-700/80"
                >
                  {text}
                </p>
              ))}
            </div>

            {/* ---- Highlight chips ----
                LABEL text-ink-900 me hai, brand-500 me nahi. Kyun?
                Halke background par brand-500 ka contrast sirf ~2:1 hai -
                chhota text padhne me chubhta hai. Peela sirf ICON ke
                peeche hai (wo sajawat hai, padha nahi jaata).
                Jahan text hi peela chahiye ho wahan brand-700 lena -
                us shade par 4.9:1 milta hai, jo 4.5:1 ke minimum se upar hai. */}
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {aboutStory.highlights.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center gap-3 rounded-xl border border-ink-900/10 bg-brand-50/60 px-4 py-3"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-500 text-ink-900">
                    <Icon name={item.icon} className="text-sm" />
                  </span>
                  <span className="font-display text-sm font-semibold text-ink-900">
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>

            {/* ---- CTA ----
                About page par visitor "jaan-pehchan" ke mood me hai,
                "kharidne" ke mood me nahi. Isliye pehla button seedha
                booking nahi, balki "gaadi dekho" hai - ek halka agla kadam. */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button as={Link} to="/fleet" variant="dark" size="lg">
                See Our Vehicles <FaArrowRight className="text-xs" />
              </Button>

              <Button as={Link} to="/contact" variant="outline" size="lg">
                Talk To Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
