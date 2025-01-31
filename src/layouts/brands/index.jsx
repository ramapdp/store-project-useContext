import ContainerPage from "@components/container/ContainerPage";
import ContainerSection from "@components/container/ContainerSection";
import React from "react";
import CalvinKleinLogo from "@assets/images/calvin-klein-logo.svg";
import GucciLogo from "@assets/images/gucci-logo.svg";
import PradaLogo from "@assets/images/prada-logo.svg";
import VersaceLogo from "@assets/images/versace-logo.svg";
import ZaraLogo from "@assets/images/zara-logo.svg";
import BrandMarquee from "@layouts/brands/BrandMarquee";

const brandLogos = [
  { src: CalvinKleinLogo, alt: "Calvin Klein Logo" },
  { src: GucciLogo, alt: "Gucci Logo" },
  { src: PradaLogo, alt: "Prada Logo" },
  { src: VersaceLogo, alt: "Versace Logo" },
  { src: ZaraLogo, alt: "Zara Logo" },
];

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
