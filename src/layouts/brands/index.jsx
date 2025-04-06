import ContainerPage from "@components/container/ContainerPage";
import ContainerSection from "@components/container/ContainerSection";
import React from "react";
import BrandMarquee from "@layouts/brands/components/BrandMarquee";
import { brandLogos } from "@layouts/brands/constans/brandLogos";

const Brands = () => {
  return (
    <ContainerPage pageStyle="bg-black h-28 flex justify-center items-center">
      <ContainerSection sectionStyle="flex-1">
        <BrandMarquee>
          {brandLogos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="inline-block"
            />
          ))}
        </BrandMarquee>
      </ContainerSection>
    </ContainerPage>
  );
};

export default Brands;
