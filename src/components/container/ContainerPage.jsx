import { cn } from "@lib/cn";
import React from "react";

const ContainerPage = ({ children, pageStyle }) => {
  return <div className={cn("", pageStyle)}>{children}</div>;
};

export default ContainerPage;
