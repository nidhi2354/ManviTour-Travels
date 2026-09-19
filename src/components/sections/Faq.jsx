import { Link } from "react-router-dom";
import { FaPlus, FaPhone, FaArrowRight } from "react-icons/fa6";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";
import { faqs } from "../../data/faqs";
import { siteConfig } from "../../data/siteConfig";

/* ============================================================
   SECTION: FAQ

   PURPOSE:
   Har un-answered sawaal ek ruka hua customer hai. Jo visitor
   "toll included hai kya?" ka jawab nahi dhoondh pata, wo call
   nahi karta - wo chup-chaap kisi aur ki site par chala jaata hai.
   Ye section wahi 8 sawaal pehle hi khatam kar deta hai.

   ============================================================
   <details> AUR <summary> - useState KYUN NAHI?
   ============================================================
   Accordion banane ke do tareeke hain:

   1. useState se - ek state banao, click par toggle karo,
      max-height animate karo, aria-expanded khud set karo,
      keyboard (Enter/Space) khud handle karo.

   2. Browser ka apna <details> tag - upar wala SAB KUCH
      built-in milta hai. Zero JavaScript.

   Humne doosra chuna. Faayde:
     - Keyboard se khulta hai, bina kuch likhe
     - Screen reader ko apne aap samajh aata hai
     - JavaScript load hone se PEHLE hi kaam karta hai
     - Ctrl+F se band accordion ka text bhi mil jaata hai
       (modern browsers usse khol dete hain)

   Rule: jo kaam browser khud karta hai, uske liye React state
   mat likho. Kam code = kam bug.

   group-open: Tailwind ka variant hai - <details> khulte hi
   andar ke elements ko style badalne deta hai. Isi se + ka
   nishaan ghoom kar x ban jaata hai.
   ============================================================ */

export default function Faq() {
  return (
    <section className="section-y bg-brand-50/40">
      <div className="container-x">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions People Ask Before Booking"
          subtitle="The same questions come to us on the phone every day. Here are the honest answers, before you even have to ask."
        />

        {/* max-w-3xl: lambi line padhna mushkil hota hai. Aankh ko
            ek line me 60-75 akshar se zyada dena thakata hai. */}
        <div className="mx-auto mt-14 max-w-3xl space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.id}
              className="group rounded-2xl border border-ink-900/10 bg-white px-6 py-5 transition-colors duration-300 open:border-brand-500/50 hover:border-brand-500"
            >
              {/* marker-none: browser ka default triangle hata deta hai,
                  uski jagah humara apna + icon lagta hai.
                  cursor-pointer: batata hai ki ye click hone wali cheez hai. */}
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 marker:content-none">
                <h3 className="font-display text-base font-bold text-ink-900 sm:text-lg">
                  {faq.question}
                </h3>

                {/* + ka nishaan. Khulne par 45 degree ghoom kar x ban
                    jaata hai - ek hi icon, do matlab. */}
                <span
                  aria-hidden="true"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-500 text-ink-900 transition-transform duration-300 group-open:rotate-45"
                >
                  <FaPlus className="text-xs" />
                </span>
              </summary>

              <p className="mt-4 border-t border-ink-900/10 pt-4 text-sm leading-relaxed text-ink-700/85">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

        {/* ---------- BAAKI SAWAAL KE LIYE ----------
            FAQ list kabhi poori nahi hoti. Jiska sawaal yahan
            nahi mila, usse khaali haath nahi lautna chahiye. */}
        <div className="mx-auto mt-10 max-w-3xl rounded-2xl bg-ink-900 px-6 py-8 text-center">
          <h3 className="text-xl text-white">Still have a question?</h3>

          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-white/70">
            Ask us directly - no call centre, no hold music. You will be talking
            to the people who actually run the vehicles.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              as="a"
              href={`tel:${siteConfig.phoneRaw}`}
              variant="primary"
              size="lg"
            >
              <FaPhone /> {siteConfig.phone}
            </Button>

            <Button as={Link} to="/contact" variant="white" size="lg">
              Send An Enquiry <FaArrowRight className="text-xs" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
