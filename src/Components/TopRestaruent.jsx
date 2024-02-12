import React, { useEffect, useState } from 'react'
import Skeleten from './Skeleten'
import { Link } from 'react-router-dom'

const TopRestaruent = ({ restroMenuList }) => {
  const [restaurantList, setRestaurantList] = useState([])

  useEffect(() => {
    setRestaurantList(
      restroMenuList?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [],
    )
  }, [restroMenuList])
  console.log(restaurantList)

  return restaurantList.length === 0 ? (
    <Skeleten />
  ) : (
    <div className="h-screen p-3 space-y-10 z-0">
      <h1 className="text-2xl text-gray-700 font-semibold max-md:text-xl">Top restaurant chains</h1>
      <div className="h-[90vh] w-full flex flex-wrap justify-center">
        {restaurantList.map((value) => (
          <div
            key={value.info.id}
            className="min-h-[50vh] w-[20%] shadow-lg shadow-gray-400 m-5 max-md:w-[50%] max-md:h-[50vh] flex flex-col items-center p-9 space-y-2 hover:scale-95 duration-100 cursor-pointer rounded-xl relative">
            {value.info.isOpen ? (
              <span class="absolute flex h-3 w-3 left-3">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-55"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
              </span>
            ) : null}
            <Link to={`/topRestroDetails/${value.info.id}`}>
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${value.info.cloudinaryImageId}`}
                alt="restroCardImage"
                className="size-44 rounded-xl"
                loading="lazy"
              />
            </Link>
            <h3 className="text-center text-gray-700  font-semibold text-balance overflow-hidden">
              {value.info.name}
            </h3>
            <p className="text-gray-700">{value.info.costForTwo}</p>
            <p className="text-gray-700">{`⭐${value.info.avgRating}`}</p>
            <p className="text-gray-700">{`${value.info.sla.slaString}`}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopRestaruent
