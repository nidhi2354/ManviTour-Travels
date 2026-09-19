import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

/* ============================================================
   ENTRY POINT - yahin se poori app shuru hoti hai.

   <BrowserRouter> SABSE BAHAR KYUN HAI?
   Router ek "context provider" hai. Jo bhi component iske ANDAR
   hai, sirf wahi <Link>, <NavLink>, useLocation() jaise router
   tools use kar sakta hai. Isliye ise sabse upar rakha jaata hai -
   taaki poori app ko ye suvidha mile.

   BrowserRouter asli URL (/fleet) banata hai, HashRouter (/#/fleet)
   ki tarah nahi. Saaf URL Google ke liye behtar hai.

   ⚠️ DEPLOY KARTE WAQT DHYAN DEIN:
   BrowserRouter me /fleet par SEEDHA jaane par server us file ko
   dhoondhta hai - jo hai hi nahi - aur 404 de deta hai. Isliye
   hosting par "SPA rewrite" on karna zaroori hai:
     Netlify  -> public/_redirects file me:  /*  /index.html  200
     Vercel   -> apne aap ho jaata hai
     Apache   -> .htaccess me RewriteRule
   Local dev (vite) me ye apne aap handle ho jaata hai.
   ============================================================ */

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
