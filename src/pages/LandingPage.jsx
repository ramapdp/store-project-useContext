import Brands from "@layouts/brands";
import Hero from "@layouts/hero";
import React, { Fragment } from "react";

const LandingPage = () => {
  return (
    <Fragment>
      <Hero />
      <Brands />
    </Fragment>
  );
};

export default LandingPage;
