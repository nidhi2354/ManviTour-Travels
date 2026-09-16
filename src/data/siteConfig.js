/* ============================================================
   FILE: src/data/siteConfig.js
   PURPOSE: Business ki saari "single source of truth" information.
            Phone number / address / GSTIN kahin bhi hard-code NAHI karna —
            hamesha yahin se import karna.

   BACKEND DEV NOTE 👇
   Aage chalke ye object ek API se aayega:
        GET /api/site-settings   ->  { ...siteConfig }
   Iska shape same rakhna, taaki frontend me sirf import badalna pade.

   SOURCE: GST Registration Certificate (Form GST REG-06) + Visiting Card
   ============================================================ */

export const siteConfig = {
  // ---- Identity ----
  brandName: "Manvi",
  brandSuffix: "Tour & Travels",
  legalName: "RAKESH",              // GST certificate ka "Legal Name"
  ownerName: "Rakesh",
  ownerDesignation: "Proprietor",
  constitution: "Proprietorship",
  tagline:
    "Trusted taxi, tempo traveller and tour package services across Delhi NCR",

  // ---- Compliance (footer me dikhana zaroori hai — trust badhta hai) ----
  gstin: "07BGLPR4415A1ZL",
  gstRegisteredOn: "13 April 2026",

  // ---- Contact ----
  phone: "+91 9289360999",
  phoneRaw: "919289360999",          // tel: aur WhatsApp link ke liye (bina space/plus)
  whatsapp: "919289360999",
  email: "info@manvitravels.com",    // ⚠️ TODO: client se confirm karna, document me email nahi tha
  website: "www.manvitravels.com",
  workingHours: "24 x 7 Available",

  // ---- Address (GST certificate se, exactly) ----
  address: {
    shop: "Shop No. 5, C-76, Ground Floor",
    building: "Block C/1, Kh. No. 76/12",
    locality: "Mahavir Vihar",
    landmark: "Dwarka Sector-1",
    city: "New Delhi",
    district: "South West Delhi",
    state: "Delhi",
    pincode: "110045",
  },

  // Ek line me poora address — footer/contact card me use hoga
  get addressLine() {
    const a = this.address;
    return `${a.shop}, ${a.building}, ${a.locality}, ${a.landmark}, ${a.city} - ${a.pincode}`;
  },

  // Google Maps embed (iframe src) — abhi search query based hai
  mapEmbedUrl:
    "https://www.google.com/maps?q=Mahavir+Vihar+Dwarka+Sector+1+New+Delhi+110045&output=embed",

  // ---- Social links (client se accounts maang kar update karna) ----
  socials: {
    facebook: "#",
    instagram: "#",
    youtube: "#",
  },
};

/* ============================================================
   NAVBAR LINKS
   href me "#id" hai kyunki abhi single page hai (smooth scroll).
   Jab alag pages banenge to inhe "/services" jaise route me badal dena.
   ============================================================ */
export const navLinks = [
  { id: 1, label: "Home",     href: "#home" },
  { id: 2, label: "Services", href: "#services" },
  { id: 3, label: "Fleet",    href: "#fleet" },
  { id: 4, label: "Packages", href: "#packages" },
  { id: 5, label: "Why Us",   href: "#why-us" },
  { id: 6, label: "Contact",  href: "#contact" },
];
