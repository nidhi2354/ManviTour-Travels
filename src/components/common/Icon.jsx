import {
  FaMapLocationDot,
  FaRoad,
  FaCarSide,
  FaBusSimple,
  FaVanShuttle,
  FaLandmarkDome,
  FaPlaneDeparture,
  FaRupeeSign,
  FaUserShield,
  FaClock,
  FaFileInvoice,
  FaCarBurst,
  FaHeadset,
  FaPhoneVolume,
  FaFileSignature,
} from "react-icons/fa6";

/* ============================================================
   COMPONENT: <Icon name="FaCarSide" />
   PURPOSE: Data files (services.js, homeContent.js) me icon ka naam
            sirf STRING me stored hai - "FaCarSide".
            Kyun? Kyunki wo data aage database/API se aayega, aur
            database me React component store nahi ho sakta.

            Ye component us string ko asli icon me convert karta hai.
            Isse "string -> component mapping" kehte hain.

   NAYA ICON ADD KARNA HO TO:
     1. upar import me add karein
     2. neeche iconMap me ek line add karein
     3. data file me sirf naam likh dein
   ============================================================ */

const iconMap = {
  FaMapLocationDot,
  FaRoad,
  FaCarSide,
  FaBusSimple,
  FaVanShuttle,
  FaLandmarkDome,
  FaPlaneDeparture,
  FaRupeeSign,
  FaUserShield,
  FaClock,
  FaFileInvoice,
  FaCarBurst,
  FaHeadset,
  FaPhoneVolume,
  FaFileSignature,
};

export default function Icon({ name, className = "" }) {
  const Component = iconMap[name];

  // Safety: agar galat naam aaya to page crash nahi hona chahiye
  if (!Component) {
    console.warn(`<Icon />: no icon named "${name}" was found in iconMap.`);
    return null;
  }

  return <Component className={className} aria-hidden="true" />;
}
