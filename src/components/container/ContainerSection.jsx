import { cn } from "@lib/cn";
import React from "react";

const ContainerSection = ({ children, sectionStyle }) => {
  return (
    <section
      className={cn(
        "flex mx-auto max-w-7xl px-2 sm:px-4 lg:px-8",
        sectionStyle
      )}
    >
      {children}
    </section>
  );
};

export default ContainerSection;
