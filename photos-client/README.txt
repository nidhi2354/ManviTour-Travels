FLEET KI PHOTOS - CLIENT KI ASLI GAADIYAN
==========================================

Yahan jo files hain wo website par LIVE dikh rahi hain.
Har file 1200 x 900 (4:3) hai - card isi shape ka hai.

  FILE                  GAADI                   NUMBER
  --------------------------------------------------------
  swift-dzire.jpg       Maruti Swift Dzire      HR55 AX 1672
  ertiga.jpg            Maruti Ertiga           DL9C AS 6452
  innova-crysta.jpg     Toyota Innova Crysta    HR38 AH 8467
  kia-carens.jpg        Kia Carens              DL9C BN 2823
  tempo-traveller.jpg   Force Tempo Traveller   (side profile)
  mini-bus.jpg          26 Seater Mini Bus      HR63 E 3131
  luxury-bus.jpg        Luxury Coach Bus        (Luxuria)
  wedding-car.jpg       Wedding Car (Dzire)     HR38 AL 9237

KOI PHOTO BADALNI HO
  Nayi photo ko upar wale NAAM se save karke yahan replace
  kar dein. src/data/fleet.js chhune ki zaroorat nahi.

  Behtar photo ke liye:
    - 4:3 landscape (jaise 1200 x 900)
    - gaadi side ya three-quarter angle se, poori frame me
    - 250 KB se kam
    - background saaf: khali sadak, parking ya showroom

BAAKI PHOTOS KAHAN GAYIN
  Client ki bheji saari photos  photos-client/  folder me hain
  (project root me). Wo website par upload NAHI hoti - sirf
  backup ke liye rakhi hain.

AGAR KOI FILE DELETE HO JAAYE
  Site nahi tootegi. Fleet.jsx ka <VehiclePhoto /> us gaadi ka
  illustration dikha dega - broken image icon kabhi nahi aayega.

NUMBER PLATE
  Saari photos par gaadi ki asli number plate ke upar
  "MANVI TRAVELS" likha gaya hai - number public nahi karna tha.
  Original photos git history me hain.


ABOUT PAGE KI PHOTO
===================

  FILE                        GAADI / JAGAH
  ----------------------------------------------------------
  public/about/
    manvi-showroom.jpg        Mahindra showroom, nayi XUV700
                              par ribbon, laal carpet
                              (1600x1200, 232 KB)

  Ye /about page ke sabse upar, PageHeader me baayein dikhti hai.
  Original file bhi is folder me hai:
  "WhatsApp Image 2026-09-17 at 16.48.21 (4).jpeg"

  BADALNI HO: nayi photo usi naam se public/about/ me replace
  kar dein. Code chhune ki zaroorat nahi.
    - 4:3 landscape rakhein (card isi shape ka hai)
    - 300 KB se kam - ye page ki sabse pehli image hai
      (loading="eager"), bhaari photo speed kharab karti hai

  DELETE HO JAAYE: site nahi tootegi. PageHeader ka onError
  uski jagah /fleet/innova-crysta.jpg dikha dega.

  ABHI BAAKI (client se lena hai):
    [ ] office.jpg / team.jpg  -> OurStory ka photo collage
    [ ] owner.jpg              -> Rakesh ji ka message card
  Kaunsi file kahan lagti hai, wo src/data/about.js me likha hai.


PACKAGES KI PHOTOS  (public/packages/)
======================================

  ABHI EK BHI PHOTO NAHI HAI. Card apne aap ek brand wala
  kaala background dikha raha hai - site tooti hui nahi
  lagti, par asli photo se bahut behtar dikhegi.

  FILE                DESTINATION
  ----------------------------------------------------
  agra.jpg            Taj Mahal / Agra Fort
  mathura.jpg         Banke Bihari / Prem Mandir
  jaipur.jpg          Hawa Mahal / Amber Fort
  shimla.jpg          Mall Road / Kufri
  nainital.jpg        Naini Lake
  manali.jpg          Solang Valley / snow
  kasol.jpg           Parvati Valley / river
  udaipur.jpg         City Palace / Lake Pichola

  KAISE LAGAYEIN
    Bas upar wale naam se file public/packages/ me daal dein.
    src/data/packages.js chhune ki zaroorat nahi.

  PHOTO KA SIZE
    - Card 4:3 se thoda lamba hai (h-80). Landscape photo
      chalegi, 1200 x 900 theek hai
    - 300 KB se kam rakhein - ek page par 8 photo hain,
      bhaari photos page dheere khol dengi

  PEHLE UNSPLASH KE LINK THE - HATA DIYE
    Wo internet ki free photos thi, client ki apni nahi.
    Aur link band ho jaata to photo bina bataye gayab ho
    jaati. Ab sab kuch apne folder me hai.

    Jaldi me koi photo chahiye to packages.js me us package
    ka `image` field me seedha koi bhi URL daal sakte hain -
    component dono sambhal leta hai.
