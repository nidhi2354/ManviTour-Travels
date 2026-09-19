import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaBars, FaXmark, FaPhone } from "react-icons/fa6";
import Logo from "../common/Logo";
import Button from "../common/Button";
import { siteConfig, navLinks } from "../../data/siteConfig";

/* ============================================================
   NAVBAR

   PURPOSE:
   1. Visitor ko batana ki wo kis company ki site par hai (logo)
   2. Baaki pages tak turant pahunchana (links)
   3. Ek saaf "Book Now" CTA dena - har page par ek hi main action

   3 CHEEZEN JO IS NAVBAR KO KHAAS BANATI HAIN:
   - SCROLL PAR SHADOW: neeche scroll karte hi navbar ko shadow +
     halka blur milta hai, taaki content ke upar tairta hua lage.
   - MOBILE DRAWER: 1024px se chhoti screen par links hamburger
     menu me chale jaate hain (side se slide hota drawer).
   - ACTIVE PAGE: <NavLink> khud bata deta hai ki user kis page par
     hai, aur us link ke neeche peeli line permanent ho jaati hai.

   ============================================================
   <a href> KYUN NAHI, <Link> KYUN?
   ============================================================
   <a href="/fleet"> poora page RELOAD karta hai - safed flash,
   sab kuch dobara download. <Link to="/fleet"> sirf content badalta
   hai, navbar/footer wahin rehte hain. Isliye site ke ANDAR ke
   kisi bhi link ke liye kabhi <a> mat use karna.

   Bahar jaane wale link (tel:, mailto:, wa.me) ke liye <a> hi
   sahi hai - wo site ke andar ke page nahi hain.
   ============================================================ */

export default function Navbar() {
  // isOpen  -> mobile drawer khula hai ya band
  const [isOpen, setIsOpen] = useState(false);
  // isScrolled -> page 20px se zyada scroll hua ya nahi
  const [isScrolled, setIsScrolled] = useState(false);

  // pathname -> abhi kaunsa page khula hai, jaise "/fleet"
  const { pathname } = useLocation();

  /* ---- Scroll sun-ne wala effect ----
     Jab bhi user scroll kare, check karo kitna scroll hua.
     Cleanup (return wala function) ZAROORI hai, warna component
     hatne ke baad bhi listener chalta rahega = memory leak. */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---- Page badle to drawer apne aap band ----
     Har link par onClick lagane ke bajaye ek hi jagah handle kar
     liya. Faayda: browser ke back/forward button se page badalne
     par bhi drawer band hota hai - onClick us case me nahi chalta. */
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

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
        <Link to="/" aria-label="Manvi Tour & Travels - Home">
          <Logo />
        </Link>

        {/* ---------- DESKTOP LINKS (lg se upar dikhenge) ---------- */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              {/*
                NavLink = Link + "main active hoon ya nahi" ki khabar.
                className ko function bana dein to usse { isActive }
                milta hai - isse current page ka link alag dikhta hai.

                end={link.to === "/"} KYUN?
                Bina `end` ke "/" har URL se match kar jaata hai
                (kyunki har path "/" se shuru hota hai) aur Home
                hamesha active dikhta. `end` kehta hai: "bilkul yahi
                path ho, tabhi active maano".
              */}
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `group relative px-4 py-2 font-display text-sm font-semibold transition-colors ${
                    isActive ? "text-ink-900" : "text-ink-700 hover:text-ink-900"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {/* peeli line: active page par permanent, warna sirf hover par */}
                    <span
                      className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-brand-500 transition-all duration-300 ${
                        isActive ? "w-2/3" : "w-0 group-hover:w-2/3"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ---------- DESKTOP CTA ---------- */}
        <div className="hidden items-center gap-3 lg:flex">
          {/* tel: ek EXTERNAL action hai (phone app kholta hai),
              isliye yahan <a> hi sahi hai, <Link> nahi. */}
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

          {/* Button ka `as` prop yahan Link component le raha hai -
              dikhega button jaisa, kaam karega router link jaisa. */}
          <Button as={Link} to="/contact" variant="dark">
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
          <Link to="/" aria-label="Manvi Tour & Travels - Home">
            <Logo />
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink-900/5 text-ink-900 transition-colors hover:bg-brand-500"
          >
            <FaXmark className="text-xl" />
          </button>
        </div>

        {/* Drawer ke links
            Yahan onClick ki zaroorat nahi - upar wala
            useEffect(pathname) page badalte hi drawer band kar deta hai. */}
        <ul className="flex-1 overflow-y-auto px-5 py-6">
          {navLinks.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `flex items-center justify-between border-b border-ink-900/5 py-4 font-display text-lg font-semibold transition-colors ${
                    isActive ? "text-brand-600" : "text-ink-900 hover:text-brand-600"
                  }`
                }
              >
                {link.label}
                <span className="h-2 w-2 rounded-full bg-brand-500" />
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Drawer ka footer - CTA */}
        <div className="space-y-3 border-t border-ink-900/10 bg-brand-50 px-5 py-5">
          <Button
            as="a"
            href={`tel:${siteConfig.phoneRaw}`}
            variant="primary"
            size="lg"
            fullWidth
          >
            <FaPhone /> {siteConfig.phone}
          </Button>

          <Button as={Link} to="/contact" variant="dark" size="lg" fullWidth>
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
