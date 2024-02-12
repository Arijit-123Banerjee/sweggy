import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Skeleten from '../Components/Skeleten'
import RestroDetailsListAccording from '../Components/RestroDetailsListAccording'

const TopRestaurentDetail = () => {
  const { id } = useParams()
  const [topRestroMenuList, setTopRestroMenuList] = useState([])
  const [topRestroMenuListItems, setTopRestroMenuListItems] = useState([])

  useEffect(() => {
    const fetchTopRestroList = async () => {
      try {
        const response = await fetch(
          `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.5204443&lng=87.3119227&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`,
        )
        if (!response.ok) {
          throw new Error('Failed to fetch menu')
        }
        const data = await response.json()
        setTopRestroMenuList(data?.data?.cards)
        setTopRestroMenuListItems(
          data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [],
        )
      } catch (err) {
        console.error('Error fetching menu:', err)
      }
    }
    fetchTopRestroList()
    window.scrollTo(0, 0)
  }, [id])

  return topRestroMenuList.length === 0 ? (
    <Skeleten />
  ) : (
    <div className="h-screen p-10">
      <div className="h-[30vh] p-10 text-gray-700 shadow-md shadow-gray-200 space-y-2">
        <h1 className="text-2xl font-semibold">{topRestroMenuList[0]?.card?.card?.info?.name}</h1>
        <p>{topRestroMenuList[0]?.card?.card?.info?.locality}</p>
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_18,h_18/${topRestroMenuList[0]?.card?.card?.info?.feeDetails?.icon}`}
          alt="logo"
        />
        <p>{topRestroMenuList[0]?.card?.card?.info?.feeDetails?.message}</p>
      </div>

      <div>
        <RestroDetailsListAccording menu={topRestroMenuListItems} />
      </div>
    </div>
  )
}

export default TopRestaurentDetail
