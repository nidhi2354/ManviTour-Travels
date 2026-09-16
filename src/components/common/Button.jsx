/* ============================================================
   COMPONENT: <Button />
   PURPOSE: Poori website me button ka look ek jaisa rahe.
            Agar kal client bole "button ka colour badlo", to sirf
            YE file badalni padegi - 40 jagah nahi.

   PROPS:
     variant = "primary"   -> peela bhara button (main action: Book Now, Call)
               "dark"      -> kaala bhara button (dark CTA)
               "outline"   -> sirf border (secondary action: View All)
               "white"     -> safed button (dark background ke upar)
     size    = "md" | "lg" | "sm"
     as      = "button" | "a"   -> link banana ho to as="a" href="..."
     fullWidth = true            -> mobile par poori width le lega
   ============================================================ */

const variants = {
  primary:
    "bg-brand-500 text-ink-900 hover:bg-brand-400 shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50",
  dark: "bg-ink-900 text-white hover:bg-ink-800 shadow-lg shadow-ink-900/20",
  outline:
    "border-2 border-ink-900 text-ink-900 hover:bg-ink-900 hover:text-white",
  white: "bg-white text-ink-900 hover:bg-brand-100 shadow-lg",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  as = "button",
  fullWidth = false,
  className = "",
  ...rest // href, onClick, target, type - sab yahan se pass ho jaate hain
}) {
  const Tag = as; // "button" ya "a" - dono ek hi component se

  const classes = [
    // base: har button me common
    "inline-flex items-center justify-center gap-2 rounded-full font-display font-bold",
    "transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0",
    "focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/40",
    "cursor-pointer whitespace-nowrap",
    variants[variant],
    sizes[size],
    fullWidth ? "w-full" : "",
    className,
  ].join(" ");

  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  );
}
