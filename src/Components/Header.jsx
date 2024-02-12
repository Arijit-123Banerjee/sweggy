import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className="h-[15%] w-full  flex items-center justify-between bg-white p-10 shadow-sm shadow-gray-300 sticky top-0 z-10 ">
      <Link to={'/'}>
        <img
          src="https://i.pinimg.com/originals/b0/1e/69/b01e69dfd04399324803c453b0fb9029.jpg"
          alt="logo"
          className="size-24 cursor-pointer"
        />
      </Link>

      <span className="flex space-x-5">
        <ul className="flex space-x-5 ">
          <Link to={'/'}>
            <li className="text-gray-800 hover:text-cyan-400 duration-100 cursor-pointer">Home</li>
          </Link>
          <Link to={'/about'}>
            <li className="text-gray-800 hover:text-cyan-400 duration-100 cursor-pointer">About</li>
          </Link>
          <Link to={'/contact'}>
            <li className="text-gray-800 hover:text-cyan-400 duration-100 cursor-pointer">
              Contact
            </li>
          </Link>
        </ul>
        <Link to={'/login'}>
          <button className="text-red-500 hover:text-red-700 duration-100">Login</button>
        </Link>
      </span>
    </div>
  )
}

export default Header
