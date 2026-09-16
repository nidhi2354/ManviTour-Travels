import { useState, useEffect } from "react";
import { FaBars, FaXmark, FaPhone } from "react-icons/fa6";
import Logo from "../common/Logo";
import Button from "../common/Button";
import { siteConfig, navLinks } from "../../data/siteConfig";

/* ============================================================
   SECTION 2 of 12: NAVBAR

   PURPOSE:
   1. Visitor ko batana ki wo kis company ki site par hai (logo)
   2. Baaki sections tak turant pahunchana (links)
   3. Ek saaf "Book Now" CTA dena - har page par ek hi main action

   2 CHEEZEN JO IS NAVBAR KO KHAAS BANATI HAIN:
   - SCROLL PAR SHADOW: neeche scroll karte hi navbar ko shadow +
     halka blur milta hai, taaki content ke upar tairta hua lage.
   - MOBILE DRAWER: 1024px se chhoti screen par links hamburger
     menu me chale jaate hain (side se slide hota drawer).
   ============================================================ */

export default function Navbar() {
  // isOpen  -> mobile drawer khula hai ya band
  const [isOpen, setIsOpen] = useState(false);
  // isScrolled -> page 20px se zyada scroll hua ya nahi
  const [isScrolled, setIsScrolled] = useState(false);

  /* ---- Scroll sun-ne wala effect ----
     Jab bhi user scroll kare, check karo kitna scroll hua.
     Cleanup (return wala function) ZAROORI hai, warna component
     hatne ke baad bhi listener chalta rahega = memory leak. */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---- Drawer khula ho to background scroll rok do ----
     Warna mobile par menu ke peeche page scroll hota rehta hai
     jo bahut kharab lagta hai. */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 shadow-lg shadow-ink-900/5 backdrop-blur-md"
          : "bg-white"
      }`}
    >
      <nav className="container-x flex h-18 items-center justify-between py-3 lg:h-20">
        {/* ---------- LOGO ---------- */}
        <a href="#home" aria-label="Manvi Tour & Travels - Home">
          <Logo />
        </a>

        {/* ---------- DESKTOP LINKS (lg se upar dikhenge) ---------- */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className="group relative px-4 py-2 font-display text-sm font-semibold text-ink-700 transition-colors hover:text-ink-900"
              >
                {link.label}
                {/* hover par neeche peeli line - chhota sa micro-interaction */}
                <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-brand-500 transition-all duration-300 group-hover:w-2/3" />
              </a>
            </li>
          ))}
        </ul>

        {/* ---------- DESKTOP CTA ---------- */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="flex items-center gap-2.5 rounded-full border border-ink-900/10 px-4 py-2 transition-colors hover:border-brand-500"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-500 text-ink-900">
              <FaPhone className="text-sm" />
            </span>
            <span className="text-left leading-tight">
              <span className="block text-[10px] uppercase tracking-wider text-ink-700/60">
                Call Anytime
              </span>
              <span className="block font-display text-sm font-bold text-ink-900">
                {siteConfig.phone}
              </span>
            </span>
          </a>

          <Button as="a" href="#contact" variant="dark">
            Book Now
          </Button>
        </div>

        {/* ---------- MOBILE HAMBURGER BUTTON ---------- */}
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink-900 text-white lg:hidden"
        >
          <FaBars className="text-lg" />
        </button>
      </nav>

      {/* ============================================================
          MOBILE DRAWER
          - Hamesha DOM me rehta hai, bas translate-x se chhupta hai.
            Isse khulne/band hone ka smooth animation milta hai.
          - Peeche kaala overlay - usse click karke bhi band ho jata hai.
          ============================================================ */}

      {/* Dark overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-40 bg-ink-900/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
      />

      {/* Slide-in panel */}
      <aside
        id="mobile-menu"
        aria-hidden={!isOpen}
        className={`fixed right-0 top-0 z-50 flex h-dvh w-[82%] max-w-sm flex-col bg-white shadow-2xl transition-[transform,visibility] duration-300 ease-out lg:hidden ${
          isOpen
            ? "visible translate-x-0"
            : /* `invisible` = band drawer na paint hota hai, na click
                 ho sakta hai, na screen reader usse padhta hai.
                 Sirf `translate-x-full` usse hataata bhar hai. */
              "invisible translate-x-full"
        }`}
      >
        {/* Drawer ka header */}
        <div className="flex items-center justify-between border-b border-ink-900/10 px-5 py-4">
          <Logo />
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink-900/5 text-ink-900 transition-colors hover:bg-brand-500"
          >
            <FaXmark className="text-xl" />
          </button>
        </div>

        {/* Drawer ke links */}
        <ul className="flex-1 overflow-y-auto px-5 py-6">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)} // link dabate hi menu band
                className="flex items-center justify-between border-b border-ink-900/5 py-4 font-display text-lg font-semibold text-ink-900 transition-colors hover:text-brand-600"
              >
                {link.label}
                <span className="h-2 w-2 rounded-full bg-brand-500" />
              </a>
            </li>
          ))}
        </ul>

        {/* Drawer ka footer - CTA */}
        <div className="space-y-3 border-t border-ink-900/10 bg-brand-50 px-5 py-5">
          <Button as="a" href={`tel:${siteConfig.phoneRaw}`} variant="primary" size="lg" fullWidth>
            <FaPhone /> {siteConfig.phone}
          </Button>
          <Button
            as="a"
            href="#contact"
            variant="dark"
            size="lg"
            fullWidth
            onClick={() => setIsOpen(false)}
          >
            Get Free Quote
          </Button>
          <p className="pt-1 text-center text-xs text-ink-700/70">
            {siteConfig.workingHours} &middot; GSTIN {siteConfig.gstin}
          </p>
        </div>
      </aside>
    </header>
  );
}
