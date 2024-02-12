import React, { useState, useEffect } from 'react'
import Skeleten from './Skeleten'
import { Link } from 'react-router-dom'

const WhatOnMindMenu = ({ menuList }) => {
  const [menuItems, setMenuItems] = useState([])

  useEffect(() => {
    if (menuList?.data?.cards) {
      setMenuItems(menuList.data.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info || [])
    }
  }, [menuList])
  return menuItems.length === 0 ? (
    <Skeleten />
  ) : (
    <div>
      <h3 className="text-2xl text-gray-700 font-semibold max-md:text-xl">What's on your mind?</h3>
      <div className="h-[30vh] w-full flex overflow-scroll ">
        {menuItems.map((value) => {
          const id = value.entityId
          const idParts = id.split('=')[1]
          const idValue = idParts?.substring(0, 5)

          return (
            <div key={value.id} className="m-3 shrink-0 rounded-lg">
              <Link to={`/restro/${idValue}`}>
                <img
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/${value.imageId}`}
                  alt="menuItemsImage"
                  className="size-44 rounded-3xl cursor-pointer max-md:size-36 hover:translate-y-1 duration-100 max-md:hover:bg-red-200"
                  loading="lazy"
                />
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default WhatOnMindMenu
