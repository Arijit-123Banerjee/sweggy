import React from "react";

const WhatOnMindMenu = ({ list }) => {
  return (
    <div>
      <h3 className="text-2xl text-gray-700 font-semibold max-md:text-xl">
        What's on your mind?
      </h3>
      <div className="h-[40vh] w-full flex overflow-scroll ">
        {list.map((value) => {
          return (
            <div key={value.id} className="m-3 shrink-0 rounded-lg">
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/${value.imageId}`}
                alt="menuItemsImage"
                className="size-44 rounded-3xl cursor-pointer max-md:size-36 hover:translate-y-1 duration-100 max-md:hover:bg-red-200"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhatOnMindMenu;
