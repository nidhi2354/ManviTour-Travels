import TopBar from "./components/layout/TopBar";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import FloatingActions from "./components/layout/FloatingActions";
import Home from "./pages/Home";

/* ============================================================
   APP - poori website ka LAYOUT SHELL

   Structure:
       TopBar    <- har page par same (desktop only)
       Navbar    <- har page par same
       main      <- yahan page badalta hai
       Footer    <- har page par same
       Floating  <- har page par same (call/WhatsApp)

   Abhi sirf ek page (Home) hai, isliye seedha <Home /> likha hai.

   ============================================================
   JAB AUR PAGES BANENGE (About, Services, Contact, Packages)
   ============================================================
   react-router-dom pehle se install hai. Tab bas itna karna:

     import { BrowserRouter, Routes, Route } from "react-router-dom";

     <BrowserRouter>
       <TopBar />
       <Navbar />
       <main>
         <Routes>
           <Route path="/"          element={<Home />} />
           <Route path="/about"     element={<About />} />
           <Route path="/services"  element={<Services />} />
           <Route path="/packages/:slug" element={<PackageDetail />} />
         </Routes>
       </main>
       <Footer />
       <FloatingActions />
     </BrowserRouter>

   Dekhiye - TopBar/Navbar/Footer Routes ke BAHAR hain, isliye wo
   dobara render nahi hote. Yahi single-page app ka fayda hai.
   ============================================================ */

export default function App() {
  return (
    <div className="flex min-h-dvh flex-col">
      <TopBar />
      <Navbar />

      {/*
        pb-20 lg:pb-0  ->  mobile par neeche floating action bar hai,
        uske peeche content chhup na jaaye isliye extra padding.
        Desktop par bar nahi hai, isliye padding bhi nahi.
      */}
      <main className="flex-1 pb-20 lg:pb-0">
        <Home />
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
