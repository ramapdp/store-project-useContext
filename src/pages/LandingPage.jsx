import Brands from "@layouts/brands";
import Hero from "@layouts/hero";
import ListPreviewProducts from "@layouts/product/list-preview";
import React, { Fragment } from "react";

const LandingPage = () => {
  return (
    <Fragment>
      <Hero />
      <Brands />
      <ListPreviewProducts />
    </Fragment>
  );
};

export default LandingPage;
