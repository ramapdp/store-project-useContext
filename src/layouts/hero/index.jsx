import React from "react";
import HeroImage from "@layouts/hero/components/HeroImage";
import HeroContent from "@layouts/hero/components/HeroContent";
import ContainerSection from "@components/container/ContainerSection";
import ContainerPage from "@components/container/ContainerPage";

const Hero = () => {
  return (
    <ContainerPage pageStyle="bg-[#F0F0F0] -mt-16 justify-center items-center">
      <ContainerSection sectionStyle="flex-1 mt-16 justify-between">
        <div className="flex h-full w-1/2 px-2 my-auto items-center justify-start">
          <HeroContent />
        </div>
        <HeroImage />
      </ContainerSection>
    </ContainerPage>
  );
};

export default Hero;
