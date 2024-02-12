import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Skeleten from '../Components/Skeleten'

const RestaurantDetails = () => {
  const { id } = useParams()
  const [menuList, setMenuList] = useState(null)
  const [topRestaurants, setTopRestaurants] = useState([])

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch(
          `https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.5204443&lng=87.3119227&collection=${id}&tags=layout_CCS_Idli&sortBy=&filters=&type=rcv2&offset=0&page_type=null`,
        )
        if (!response.ok) {
          throw new Error('Failed to fetch menu')
        }
        const data = await response.json()
        setMenuList(data?.data?.cards[0]?.card?.card)
        setTopRestaurants(data?.data?.cards)
      } catch (error) {
        console.error('Error fetching menu:', error)
      }
    }

    fetchMenu()
  }, [id])

  return topRestaurants.length === 0 ? (
    <Skeleten />
  ) : (
    <div className="h-screen w-full flex flex-col space-y-10">
      <div className="h-[30vh] p-20 space-y-2 shadow-sm shadow-gray-200">
        {menuList && (
          <>
            <h3 className="text-3xl text-gray-700 font-semibold">{menuList.title}</h3>
            <p className="text-gray-700">{menuList.description}</p>
          </>
        )}
      </div>

      <div className="flex justify-center flex-wrap h-screen">
        {topRestaurants.map(
          (restaurant, index) => (
            console.log(restaurant?.card?.card?.info?.isOpen),
            (
              <div key={`${restaurant?.card?.card?.info?.id}-${index}`}>
                {restaurant?.card?.card?.info?.cloudinaryImageId && (
                  <div className="min-h-[50vh] w-[20vw] m-4 flex items-center flex-col p-7 cursor-pointer shadow-md shadow-gray-400 max-md:w-[40vw] relative">
                    {restaurant?.card?.card?.info?.isOpen ? (
                      <span className="absolute flex h-3 w-3 left-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-55"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
                      </span>
                    ) : null}
                    <img
                      src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/${restaurant.card.card.info.cloudinaryImageId}`}
                      alt="restroLogo"
                      className="size-52 rounded-lg"
                      loading="lazy"
                    />
                    <h3 className="text-center font-semibold">
                      {restaurant?.card?.card?.info?.name}
                    </h3>
                    <p>{restaurant?.card?.card?.info?.costForTwo}</p>
                    <p>{restaurant?.card?.card?.info?.locality}</p>
                    <button className="bg-green-400 w-full p-2  absolute bottom-0 right-0">
                      Add
                    </button>
                  </div>
                )}
              </div>
            )
          ),
        )}
      </div>
    </div>
  )
}

export default React.memo(RestaurantDetails)
