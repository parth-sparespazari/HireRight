import HeroSection from "@/app/components/sections/HeroSection";
import WhyHireRight from "@/app/components/sections/WhyHireRight";
import HireTalents from "@/app/components/sections/HireTalents";
import CoreValues from "@/app/components/sections/CoreValues.js"
import Testimonial from "@/app/components/sections/Testimonial.js";
import BoostHiring from "@/app/components/sections/BoostHiring.js";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyHireRight />
      <HireTalents /> 
      <CoreValues />
      <Testimonial />
      <BoostHiring />
    </>
  );
}
