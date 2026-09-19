/* ============================================================
   COMPONENT: <FilterChips />
   PURPOSE: Ek filter ki poori row - label + chunne wale buttons.

   PEHLE YE Fleet.jsx KE ANDAR THA. Jab Packages page ko bhi
   bilkul yahi cheez chahiye hui, to ise yahan utha laaye.

   YE "RULE OF THREE" KA PEHLA STEP HAI:
     1 jagah use ho -> wahin rakho
     2 jagah        -> common me nikaal do (ab yahi hua hai)
     3+ jagah       -> ab ye ek chhota design system ban gaya
   Pehli baar hi common me daal dena bhi galat hota hai - tab
   tak pata nahi hota ki doosri jagah kya alag chahiye hoga.

   ============================================================
   <button> CHIPS hi kyun, <select> DROPDOWN kyun nahi?
   ============================================================
   Dropdown me options CHHUPE rehte hain - customer ko pehle tap
   karna padta hai, tab pata chalta hai ki kya-kya milta hai.
   Chips saamne hoti hain: saare option ek nazar me, aur chunna
   ek tap ka kaam. Mobile par ye fark bahut bada hai.

   aria-pressed KYUN?
   Chuna hua chip sirf RANG se alag dikhta hai. Jo dekh nahi
   sakta, usse bhi pata chalna chahiye ki kaunsa filter laga
   hai - aria-pressed screen reader ko theek yahi batata hai.

   ============================================================
   PROPS
   ============================================================
     label    - upar ka chhota heading ("Vehicle type")
     options  - [{ id, label }] - data file se aata hai
     active   - abhi chuna hua option ka id
     onChange - naya id wapas bhejne wala function
     light    - KAALE background par use karna ho to true
                (SectionHeading me bhi bilkul yahi prop hai -
                 poori site me ek jaisa naam rakhna zaroori hai,
                 taaki developer ko har component naya na lage)

   NOTE: ye component apni state KHUD nahi rakhta. `active` bahar
   se aata hai aur badlav bahar bheja jaata hai. Isse "controlled
   component" kehte hain - filter ki state usi section ke paas
   rehti hai jo usse filter kar raha hai, do jagah nahi.
   ============================================================ */

export default function FilterChips({
  label,
  options,
  active,
  onChange,
  light = false,
}) {
  return (
    <div>
      <p
        className={`font-display text-xs font-bold uppercase tracking-wider ${
          light ? "text-white/55" : "text-ink-700"
        }`}
      >
        {label}
      </p>

      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((option) => {
          const isActive = option.id === active;

          return (
            <button
              key={option.id}
              type="button"
              onClick={() => onChange(option.id)}
              aria-pressed={isActive}
              className={`cursor-pointer rounded-full px-4 py-2 font-display text-xs font-bold transition-all duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/40 ${
                isActive
                  ? light
                    ? "bg-brand-500 text-ink-900"
                    : "bg-ink-900 text-brand-500"
                  : light
                    ? "border border-white/20 bg-white/5 text-white/75 hover:border-brand-500 hover:text-white"
                    : "border border-ink-900/15 bg-white text-ink-700 hover:border-brand-500 hover:text-ink-900"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
