import ContainerPage from "@components/container/ContainerPage";
import ContainerSection from "@components/container/ContainerSection";
import React from "react";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <ContainerPage pageStyle="bg-white">
      <ContainerSection sectionStyle="flex flex-col">
        <div className="bg-black rounded-[20px] p-5 lg:p-10 lg:px-16 flex">
          <h1 className="text-[40px] flex-1 font bold text-white">
            Stay Up to Date About Our Latest Offers
          </h1>
          <div className="w-fit flex flex-col items-end gap-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Enter your email address"
                className="p-2 pl-12 rounded-full h-[46px] w-[350px] placeholder:font-normal placeholder:text-black/40 placeholder:text-base"
              />
              <HiOutlineMail className="absolute left-4 top-1/2 -translate-y-1/2 text-black/40 text-2xl" />
            </div>
            <button className="bg-white text-black p-2 font-medium rounded-full h-[46px] w-[350px]">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </ContainerSection>
    </ContainerPage>
  );
};

export default Footer;
