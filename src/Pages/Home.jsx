import React, { useState, useEffect } from "react";
import Skeleten from "../Components/Skeleten";
import WhatOnMindMenu from "../Components/WhatOnMindMenu";
import TopRestaruent from "../Components/TopRestaruent";

const Home = () => {
  return (
    <div className="h-screen w-full p-20 max-md:p-10">
      <WhatOnMindMenu />
      <TopRestaruent />
    </div>
  );
};

export default Home;
