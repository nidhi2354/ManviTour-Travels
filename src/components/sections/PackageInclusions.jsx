import { Link } from "react-router-dom";
import { FaCheck, FaXmark, FaArrowRight, FaPhone } from "react-icons/fa6";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";
import { packageInclusions } from "../../data/packages";
import { siteConfig } from "../../data/siteConfig";

/* ============================================================
   SECTION: PACKAGE ME KYA HAI, KYA NAHI  (/packages page)

   ============================================================
   "KYA NAHI HAI" WALI LIST HI IS SECTION KI ASLI WAJAH HAI
   ============================================================
   Tour package me sabse zyada jhagda ek hi baat par hota hai:
   customer samajhta hai monument ki ticket included thi, aur
   Taj Mahal ke gate par pata chalta hai ki nahi thi. Natija -
   ek din kharab, ek bahas, ek 1-star review, ek customer gaya.

   Ye jhagda price se nahi hota, UMMEED se hota hai. Isliye
   ummeed pehle hi saaf kar dena sabse sasta bima hai.

   Zyadatar websites "Exclusions" ko sabse neeche, sabse chhote
   font me, halke grey me likhti hain - chhupane ki koshish
   saaf dikhti hai. Humne ulta kiya: dono list ko BARABAR ki
   jagah, barabar ka size diya hai.

   Ulta lagta hai, par kaam karta hai. Jo business shuru me hi
   saaf "nahi" bol deta hai, uske "haan" par log zyada bharosa
   karte hain.

   ============================================================
   DESIGN
   ============================================================
   Do card, side by side. Ek peela-hara tick wala, doosra laal
   cross wala. Rang se hi 1 second me samajh aa jaata hai ki
   kaunsi list kya keh rahi hai - padhna baad me hota hai.

   Laal ka use poori site me SIRF yahan hai. Isliye wo aankh
   me chubhta hai - aur yahan chubhna hi chahiye.
   ============================================================ */

export default function PackageInclusions() {
  return (
    <section className="section-y bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="Before You Book"
          title="What Every Package Includes - And What It Does Not"
          subtitle="We would rather you know this now than at the ticket counter. No small print, no surprises on the last day."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* ============================================
              CARD 1: KYA MILEGA
              ============================================ */}
          <div className="rounded-2xl border border-ink-900/10 bg-brand-50/50 p-7">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500 text-ink-900">
                <FaCheck />
              </span>
              <h3 className="text-xl">Included in the price</h3>
            </div>

            <ul className="mt-6 space-y-3.5">
              {packageInclusions.included.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-relaxed text-ink-700/85"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-500">
                    <FaCheck className="text-[9px] text-ink-900" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ============================================
              CARD 2: KYA NAHI MILEGA
              ============================================ */}
          <div className="rounded-2xl border border-ink-900/10 bg-ink-900/[0.03] p-7">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500 text-white">
                <FaXmark />
              </span>
              <h3 className="text-xl">Not included</h3>
            </div>

            <ul className="mt-6 space-y-3.5">
              {packageInclusions.notIncluded.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-relaxed text-ink-700/85"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500">
                    <FaXmark className="text-[9px] text-white" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ---------- CUSTOM PACKAGE ----------
            Ready-made package har kisi par fit nahi baithta. Kisi
            ke paas 2 din hain, kisi ko ek extra sheher jodna hai,
            kisi ka budget alag hai. Un sabko "nahi" bolne ke bajaye
            yahan ek raasta diya gaya hai. */}
        <div className="mt-12 overflow-hidden rounded-2xl bg-ink-900">
          <div className="grid items-center gap-8 p-8 sm:p-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h3 className="text-2xl text-white">
                None of these fit your plan?
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/70">
                Tell us three things - where you want to go, how many days you
                have, and how many people are travelling. We will send you a
                package built around those, usually within 15 minutes.
              </p>
            </div>

            <div className="flex flex-col gap-3 lg:col-span-4">
              <Button as={Link} to="/contact" variant="primary" size="lg" fullWidth>
                Build My Package <FaArrowRight className="text-xs" />
              </Button>

              <Button
                as="a"
                href={`tel:${siteConfig.phoneRaw}`}
                variant="white"
                size="lg"
                fullWidth
              >
                <FaPhone /> {siteConfig.phone}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
