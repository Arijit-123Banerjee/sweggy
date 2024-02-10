import { React, useEffect, useState } from 'react'
import { fetchData } from '../utils/API'
import Skeleten from './Skeleten'

const TopRestaruent = () => {
  const [restaruentList, setRestaruentList] = useState([])
  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const data = await fetchData()
        setRestaruentList(
          data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
        )
      } catch (error) {
        console.error('Error fetching menu data:', error)
      }
    }

    fetchMenuData()
  }, [])

  return restaruentList.length === 0 ? (
    <Skeleten />
  ) : (
    <div className="h-screen p-3">
      <h1 className="text-2xl text-gray-700 font-semibold max-md:text-xl">Top restaurant chains</h1>
      <div className="h-[90vh] w-full  flex flex-wrap justify-center">
        {restaruentList.map((value) => {
          return (
            <div
              key={value.id}
              className="h-[50vh] w-[20%] shadow-lg shadow-gray-400 m-5 max-md:w-[50%] max-md:h-[50vh] flex flex-col items-center p-9 space-y-2 hover:bg-gray-100 duration-100 cursor-pointer rounded-xl">
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${value.info.cloudinaryImageId}`}
                alt="restroCardImage"
                className="size-44 rounded-xl"
                loading="lazy"
              />
              <h3 className="text-center  text-gray-700 w-[90%] font-semibold text-balance">
                {value.info.name}
              </h3>
              <p className="text-gray-700">{value.info.costForTwo}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TopRestaruent
