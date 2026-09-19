import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/* ============================================================
   COMPONENT: <ScrollToTop />

   SAMASYA JO YE SOLVE KARTA HAI:
   React Router page "reload" nahi karta - wo sirf DOM badalta hai.
   Iska matlab: agar aap Home page par neeche scroll karke Footer se
   "Fleet" par click karein, to Fleet page bhi UTNA HI NEECHE se khulega.
   User ko lagta hai page adha khul gaya - ye sabse common SPA bug hai.

   HAL: jab bhi URL ka pathname badle, page ko upar le jao.

   behavior: "instant" KYUN?
   index.css me `scroll-behavior: smooth` hai. Uske saath simple
   window.scrollTo(0,0) poore page ko scroll karta hua dikhayega -
   naya page khulne par ye ajeeb lagta hai. "instant" us smooth
   behaviour ko sirf is ek call ke liye band kar deta hai.

   NOTE: ye component kuch RENDER nahi karta (return null). Iska
   kaam sirf side-effect chalana hai. Aise components ko React me
   "behaviour component" kehte hain.
   ============================================================ */

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
