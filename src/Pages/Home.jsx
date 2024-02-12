import React, { useState, useEffect, useMemo } from 'react'
import Skeleten from '../Components/Skeleten'
import WhatOnMindMenu from '../Components/WhatOnMindMenu'
import TopRestaruent from '../Components/TopRestaruent'

const Home = () => {
  const [apiresult, setApiResult] = useState([])
  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await fetch(
          'https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.5204443&lng=87.3119227&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING',
        )
        const data = await response.json()
        setApiResult(data)
      } catch (error) {
        console.error('Error fetching menu data:', error)
      }
    }

    fetchMenuData()
  }, [])

  return (
    <div className="h-screen w-full p-20 max-md:p-10">
      <WhatOnMindMenu menuList={apiresult} />
      <TopRestaruent restroMenuList={apiresult} />
    </div>
  )
}

export default Home
