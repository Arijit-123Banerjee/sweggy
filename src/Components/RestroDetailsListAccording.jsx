import React, { useEffect, useState } from 'react'

const RestroDetailsListAccording = ({ menu }) => {
  const [filteredList, setFilteredList] = useState([])

  useEffect(() => {
    const newArr = menu.filter(
      (value) =>
        value.card?.card?.['@type'] ===
        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory',
    )
    setFilteredList(newArr)
  }, [menu])

  return <div className="h-screen"></div>
}

export default RestroDetailsListAccording
