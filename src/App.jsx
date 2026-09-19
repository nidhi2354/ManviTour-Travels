import TopBar from "./components/layout/TopBar";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import FloatingActions from "./components/layout/FloatingActions";
import ScrollToTop from "./components/common/ScrollToTop";
import AppRoutes from "./routes/AppRoutes";

/* ============================================================
   APP - poori website ka LAYOUT SHELL

   Structure:
       TopBar      <- har page par same (desktop only)
       Navbar      <- har page par same
       main        <- SIRF yahan page badalta hai
       Footer      <- har page par same
       Floating    <- har page par same (call/WhatsApp)

   ASLI FAYDA SAMAJHIYE:
   TopBar / Navbar / Footer <AppRoutes /> ke BAHAR hain. Iska
   matlab page badalne par wo DOBARA RENDER NAHI HOTE - navbar
   blink nahi karta, scroll position nahi tootti, page turant
   badalta hai. Yahi single-page app (SPA) ka asli faayda hai.

   <ScrollToTop /> kuch dikhata nahi - wo sirf itna karta hai ki
   naya page hamesha UPAR se khule (warna SPA me page adha khula
   hua lagta hai). Poora explanation us file me hai.

   Routes ki list yahan nahi, src/routes/AppRoutes.jsx me hai.
   ============================================================ */

export default function App() {
  return (
    <div className="flex min-h-dvh flex-col">
      <ScrollToTop />

      <TopBar />
      <Navbar />

      {/*
        pb-20 lg:pb-0  ->  mobile par neeche floating action bar hai,
        uske peeche content chhup na jaaye isliye extra padding.
        Desktop par bar nahi hai, isliye padding bhi nahi.
      */}
      <main className="flex-1 pb-20 lg:pb-0">
        <AppRoutes />
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
