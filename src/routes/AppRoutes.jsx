import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Fleet from "../pages/Fleet";
import Packages from "../pages/Packages";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

/* ============================================================
   FILE: src/routes/AppRoutes.jsx
   PURPOSE: Poori website ka URL <-> PAGE ka naksha (route map).

   YE FILE ALAG KYUN HAI (App.jsx me kyun nahi)?
   App.jsx ka kaam LAYOUT hai (navbar upar, footer neeche).
   Is file ka kaam NAVIGATION hai (kaunsa URL, kaunsa page).
   Do alag kaam = do alag file. Isse aage 20 routes ho jaayein
   tab bhi App.jsx chhota aur saaf rehta hai.

   ============================================================
   NAYA PAGE ADD KARNE KE 3 STEP
   ============================================================
     1. src/pages/NayaPage.jsx banayein
     2. upar import karein
     3. neeche ek <Route path="/naya" element={<NayaPage />} /> line

   Agar wo page navbar me bhi chahiye, to
   src/data/siteConfig.js ke navLinks me ek line add kar dein.

   ============================================================
   path="*"  --  YE LINE HAMESHA SABSE NEECHE RAHEGI
   ============================================================
   "*" ka matlab "upar ka koi bhi path match nahi hua".
   Router upar se neeche padhta hai, isliye agar ise upar rakh
   diya to HAR URL par 404 page khul jaayega.

   ============================================================
   AAGE (Phase 2) - DETAIL PAGES
   ============================================================
     <Route path="/services/:slug" element={<ServiceDetail />} />
     <Route path="/packages/:slug" element={<PackageDetail />} />

   ":slug" ek VARIABLE hai. /packages/golden-triangle-tour khulne par
   page ke andar useParams() se "golden-triangle-tour" mil jaata hai,
   aur usse data/packages.js me se sahi package dhoondh lete hain.
   ============================================================ */

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/fleet" element={<Fleet />} />
      <Route path="/packages" element={<Packages />} />
      <Route path="/contact" element={<Contact />} />

      {/* 404 - hamesha sabse aakhir me */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
