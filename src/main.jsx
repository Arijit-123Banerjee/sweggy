import { React, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import AppLayout from './AppLayout'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import ErrorPage from './Pages/ErrorPage'
import RestraurentDetails from './Pages/RestraurentDetails'
import TopRestaurentDetail from './Pages/TopRestaurentDetail'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
      { path: '/login', element: <Login /> },
      { path: '/restro/:id', element: <RestraurentDetails /> },
      { path: '/topRestroDetails/:id', element: <TopRestaurentDetail /> },
    ],
    errorElement: <ErrorPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)
