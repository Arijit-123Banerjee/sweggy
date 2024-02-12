import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()
  console.log(error)

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center space-y-11">
      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/006/549/647/small_2x/404-landing-page-free-vector.jpg"
        alt="errorLogo"
        className="w-96"
      />
      <p>Page Not Found................</p>
      <Link to={'/'}>
        <button className="bg-green-700 p-3 rounded-full text-gray-100">Go to Home Page</button>
      </Link>
    </div>
  )
}

export default ErrorPage
