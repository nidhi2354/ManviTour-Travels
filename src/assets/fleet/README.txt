CLIENT KI ASLI GAADIYON KI PHOTOS YAHAN RAKHEIN
================================================

Expected file names (fleet.js se match karte hain):

  swift-dzire.jpg
  innova-crysta.jpg
  tempo-traveller.jpg
  fortuner.jpg
  luxury-bus.jpg
  mercedes-e-class.jpg

PHOTO REQUIREMENTS
  - Size      : 800 x 600 px (4:3 ratio)
  - File size : 200 KB se kam (page fast rahega)
  - Angle     : gaadi side/three-quarter se, poori dikhe
  - Background: saaf - parking, khali sadak ya showroom

PHOTO LAGANE KE STEPS
  1. photo yahan copy karein
  2. src/data/fleet.js kholein
  3. sabse upar import karein:
        import swiftDzire from "../assets/fleet/swift-dzire.jpg";
  4. us gaadi ki entry me `image: null` ko badlein:
        image: swiftDzire,

Jab tak photo nahi hai, VehicleIllustration component us gaadi ke
type ka illustration dikha deta hai - naam aur tasveer mismatch nahi hote.
