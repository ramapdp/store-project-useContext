import React from "react";
import HeroImage from "@layouts/hero/components/HeroImage";
import HeroContent from "@layouts/hero/components/HeroContent";

const Hero = () => {
  return (
    <section className="bg-[#F0F0F0] h-screen -mt-16 flex justify-center">
      <div className="flex mt-16 flex-1 justify-between mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <div className="flex h-full w-1/2 px-2 my-auto items-center justify-start">
          <HeroContent />
        </div>
        <HeroImage />
      </div>
    </section>
  );
};

export default Hero;
