import Footer from "@layouts/footer";
import Navbar from "@layouts/navbar";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";

const WebTemplate = () => {
  const [searchKeywords, setSearchKeywords] = useState("");

  const onSearchEventHandler = (event) => {
    return setSearchKeywords(event.target.value);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <Navbar onSearch={onSearchEventHandler} />
      </header>
      <Outlet />
      <Footer />
    </div>
  );
};

export default WebTemplate;
