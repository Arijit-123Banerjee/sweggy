import React, { useState } from "react";
import { fetchData } from "../utils/API";
import { useEffect } from "react";
import Skeleten from "../Components/Skeleten";
import WhatOnMindMenu from "../Components/WhatOnMindMenu";

const Home = () => {
  const [mennuItems, setMenuItems] = useState([]);
  const swiggyApi = JSON.parse(localStorage.getItem("swiggyApi"));
  useEffect(() => {
    fetchData();
    setMenuItems(
      swiggyApi?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
    );
  }, []);
  console.log(mennuItems);

  return (
    <div className="h-screen w-full  p-20 max-md:p-10">
      <WhatOnMindMenu list={mennuItems} />
    </div>
  );
};

export default Home;
