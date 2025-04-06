import ContainerPage from "@components/container/ContainerPage";
import ContainerSection from "@components/container/ContainerSection";
import React from "react";

const ListPreviewProducts = () => {
  return (
    <ContainerPage pageStyle="bg-white flex justify-center items-center">
      <ContainerSection sectionStyle="flex-1 py-24 justify-center items-center">
        <h1 className="text-color-red font-bold text-5xl">New Arrivals</h1>
        
      </ContainerSection>
    </ContainerPage>
  );
};

export default ListPreviewProducts;
