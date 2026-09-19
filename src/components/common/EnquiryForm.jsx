import { useState } from "react";
import { FaPaperPlane, FaCircleCheck, FaWhatsapp } from "react-icons/fa6";
import Button from "./Button";
import { services } from "../../data/services";
import { siteConfig } from "../../data/siteConfig";

/* ============================================================
   COMPONENT: <EnquiryForm />
   PURPOSE: Website ka sabse KEEMTI hissa - yahi se business ko
            lead (customer ki enquiry) milti hai.

   Ye form 2 jagah use hota hai:
     1. Hero section me (compact version)   -> variant="compact"
     2. Contact section me (poora form)     -> variant="full"
   Ek hi component dono jagah = code duplicate nahi hota.

   ============================================================
   BACKEND DEV KE LIYE - SABSE ZAROORI NOTE
   ============================================================
   Abhi handleSubmit sirf console par data print karta hai.
   Aapko banana hai:

        POST /api/enquiries
        Request body:
        {
          "name":       "string, required",
          "phone":      "string, required, 10 digit Indian mobile",
          "serviceType":"string, services.js ke slug me se ek",
          "pickup":     "string, required",
          "drop":       "string, optional",
          "travelDate": "YYYY-MM-DD",
          "passengers": "number",
          "message":    "string, optional"
        }
        Response: { success: true, enquiryId: "ENQ-1024" }

   Backend ko ye bhi karna chahiye:
     - Owner ko WhatsApp/SMS notification bhejna (lead turant chahiye)
     - Admin panel me enquiry list dikhana
     - Rate limiting (spam bots se bachne ke liye)
   ============================================================ */

/* ============================================================
   LEAD KAHAN JAATI HAI - YE EK LINE POORA BEHAVIOUR BADALTI HAI
   ============================================================
   Backend abhi nahi hai. Bina backend ke form sirf console par
   print karta tha - yaani har enquiry KHO RAHI THI. Website ka
   sabse keemti hissa bekaar pada tha.

   Isliye filhaal WhatsApp wala raasta on kiya gaya hai:
   submit dabate hi owner ka WhatsApp khulta hai, aur saari
   detail pehle se likhi hui hoti hai - customer ko bas send
   dabana hai. Lead seedha owner ke phone par, zero backend.

     "whatsapp"  -> WhatsApp khulta hai (abhi yahi chalu hai)
     "none"      -> sirf success message, kahin nahi jaata

   ⚠️ CLIENT KA FAISLA BAAKI HAI (design.txt Part F, sawaal 6).
   Teen option the: (a) sirf UI, (b) WhatsApp, (c) email service.
   Client (a) ya (c) chune to bas neeche wali line badalni hai.

   BACKEND BAN JAAYE TO:
   handleSubmit me POST /api/enquiries add kar dein aur ye poora
   WhatsApp wala hissa hata dein. Tab tak ye jugaad nahi, ye ek
   kaam karta hua system hai.
   ============================================================ */
const DELIVERY = "whatsapp";

// Form ki shuruaati (khaali) state - reset karne me bhi kaam aati hai
const initialState = {
  name: "",
  phone: "",
  serviceType: "",
  pickup: "",
  drop: "",
  travelDate: "",
  passengers: "",
  message: "",
};

export default function EnquiryForm({ variant = "full" }) {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isCompact = variant === "compact";

  /* Ek hi handler saare inputs ke liye.
     Kaise? Har input ka name="..." state ki key se match karta hai. */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // User type kare to us field ka error turant hata do
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  /* Client-side validation.
     NOTE: ye sirf user ki suvidha ke liye hai. Asli validation
     BACKEND par dobara honi chahiye - browser ka code badla ja sakta hai. */
  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Please enter your name";
    if (!/^[6-9]\d{9}$/.test(form.phone.trim()))
      newErrors.phone = "Enter a valid 10 digit mobile number";
    if (!form.pickup.trim()) newErrors.pickup = "Pickup location is required";
    if (!form.serviceType) newErrors.serviceType = "Please select a service";
    return newErrors;
  };

  /* Form ki saari detail ek padhne layak WhatsApp message me.
     Owner ko ye phone par aisa hi dikhega, isliye har line par
     ek hi baat - taaki wo ek nazar me quote bana sake. */
  const buildWhatsAppText = () => {
    // Slug ki jagah service ka asli naam bhejte hain.
    // Owner "airport-pick-drop" nahi padhna chahta.
    const service = services.find((s) => s.slug === form.serviceType);

    const lines = [
      "New enquiry from the website",
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Service: ${service ? service.title : form.serviceType}`,
      `Pickup: ${form.pickup}`,
    ];

    // Khaali fields bhejne se message bhar jaata hai aur padhne
    // me mushkil hota hai - isliye jo bhara hai wahi jodte hain
    if (form.drop) lines.push(`Drop: ${form.drop}`);
    if (form.travelDate) lines.push(`Travel date: ${form.travelDate}`);
    if (form.passengers) lines.push(`Passengers: ${form.passengers}`);
    if (form.message) lines.push(`Note: ${form.message}`);

    return lines.join("\n");
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // page reload rokta hai

    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    /* TODO(backend): yahan POST /api/enquiries aayega.
       Tab tak lead WhatsApp se owner tak pahunchti hai. */
    if (DELIVERY === "whatsapp") {
      const url = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
        buildWhatsAppText()
      )}`;

      /* window.open YAHIN chalana zaroori hai - seedha click ke
         andar. setTimeout ya await ke baad chalayenge to browser
         use "apne aap khula popup" samajh kar block kar dega. */
      window.open(url, "_blank", "noopener,noreferrer");
    }

    setIsSubmitted(true);
    setForm(initialState);
    setTimeout(() => setIsSubmitted(false), 8000); // 8 sec baad form wapas
  };

  /* ---- Success screen ----
     Text jaanbujh kar "We have received your enquiry" NAHI hai.
     WhatsApp kisi ke desktop par install na ho, ya tab block ho
     jaaye - to wo baat JHOOTH ho jaati. Isliye yahan wahi likha
     hai jo sach me hua, aur ek backup raasta bhi diya hai. */
  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl bg-white p-10 text-center shadow-xl">
        <FaCircleCheck className="text-5xl text-green-500" />

        {DELIVERY === "whatsapp" ? (
          <>
            <h3 className="mt-4 text-xl">Almost There!</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-700/80">
              WhatsApp should have opened with your details already filled in.
              Just press send there and we will call you back within 15 minutes.
            </p>
            <p className="mt-4 text-sm text-ink-700/80">
              Did not open?{" "}
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="font-display font-bold text-brand-700 underline underline-offset-2"
              >
                Call {siteConfig.phone}
              </a>
            </p>
          </>
        ) : (
          <>
            <h3 className="mt-4 text-xl">Thank You!</h3>
            <p className="mt-2 text-sm text-ink-700/80">
              We have received your enquiry. Our team will call you back within
              15 minutes.
            </p>
          </>
        )}
      </div>
    );
  }

  /* Input ka common style - baar baar likhne se bachne ke liye */
  const inputClass = (field) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink-900 outline-none transition-colors placeholder:text-ink-700/40 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15 ${
      errors[field] ? "border-red-400" : "border-ink-900/15"
    }`;

  const labelClass = "mb-1.5 block font-display text-xs font-bold uppercase tracking-wider text-ink-700";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {/* --- Naam aur Phone (hamesha side by side) --- */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Your Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Rakesh Kumar"
            className={inputClass("name")}
          />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Mobile Number *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="numeric"
            maxLength={10}
            value={form.phone}
            onChange={handleChange}
            placeholder="9289360999"
            className={inputClass("phone")}
          />
          {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
        </div>
      </div>

      {/* --- Service select --- */}
      <div>
        <label htmlFor="serviceType" className={labelClass}>
          Select Service *
        </label>
        <select
          id="serviceType"
          name="serviceType"
          value={form.serviceType}
          onChange={handleChange}
          className={inputClass("serviceType")}
        >
          <option value="">-- Select Service --</option>
          {/* Options data file se aa rahe hain, hard-code nahi.
              Nayi service add karo -> yahan apne aap aa jaayegi. */}
          {services.map((s) => (
            <option key={s.id} value={s.slug}>
              {s.title}
            </option>
          ))}
        </select>
        {errors.serviceType && (
          <p className="mt-1 text-xs text-red-500">{errors.serviceType}</p>
        )}
      </div>

      {/* --- Pickup aur Drop --- */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="pickup" className={labelClass}>
            Pickup Location *
          </label>
          <input
            id="pickup"
            name="pickup"
            type="text"
            value={form.pickup}
            onChange={handleChange}
            placeholder="Dwarka, New Delhi"
            className={inputClass("pickup")}
          />
          {errors.pickup && <p className="mt-1 text-xs text-red-500">{errors.pickup}</p>}
        </div>

        <div>
          <label htmlFor="drop" className={labelClass}>
            Drop Location
          </label>
          <input
            id="drop"
            name="drop"
            type="text"
            value={form.drop}
            onChange={handleChange}
            placeholder="Agra"
            className={inputClass("drop")}
          />
        </div>
      </div>

      {/* --- Date aur Passengers --- */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="travelDate" className={labelClass}>
            Travel Date
          </label>
          <input
            id="travelDate"
            name="travelDate"
            type="date"
            value={form.travelDate}
            onChange={handleChange}
            className={inputClass("travelDate")}
          />
        </div>

        <div>
          <label htmlFor="passengers" className={labelClass}>
            Passengers
          </label>
          <input
            id="passengers"
            name="passengers"
            type="number"
            min="1"
            max="60"
            value={form.passengers}
            onChange={handleChange}
            placeholder="4"
            className={inputClass("passengers")}
          />
        </div>
      </div>

      {/* --- Message: sirf FULL version me dikhega ---
          Hero me jagah kam hai, isliye compact version me chhupa dete hain.
          Form jitna chhota, utni zyada leads (proven UX rule). */}
      {!isCompact && (
        <div>
          <label htmlFor="message" className={labelClass}>
            Anything Else We Should Know?
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            placeholder="For example: travelling with 2 children, extra luggage, AC required..."
            className={`${inputClass("message")} resize-none`}
          />
        </div>
      )}

      {/* Button ka icon aur label DELIVERY ke hisaab se badalta hai.
          Kyun? Button par jo likha hai, wahi hona chahiye. "Get Free
          Quote" dabane par achanak WhatsApp khul jaana ek jhatka hai -
          aur jhatka lagne wala user form chhod deta hai. */}
      <Button type="submit" variant="primary" size="lg" fullWidth>
        {DELIVERY === "whatsapp" ? (
          <>
            <FaWhatsapp className="text-lg" /> Send On WhatsApp
          </>
        ) : (
          <>
            <FaPaperPlane /> Get Free Quote
          </>
        )}
      </Button>

      {/* Pehle se bata dena = koi surprise nahi */}
      {DELIVERY === "whatsapp" && (
        <p className="text-center text-xs leading-relaxed text-ink-700/70">
          WhatsApp will open with these details already typed out &mdash; you
          just press send.
        </p>
      )}

      <p className="text-center text-xs text-ink-700/60">
        We never share your details with anyone. 100% private.
      </p>
    </form>
  );
}
