import { createBrowserRouter } from 'react-router-dom'
import MonthBill from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Carousel from '../pages/Carousel'
const router = createBrowserRouter([
   {
    path: '/index',
    children: [
      {
        index: true,
        element: <MonthBill />
      },
     
    ]
  },
   {
    path: '/register',
    children: [
      {
        index: true,
        element: <Register />
      },
     
    ]
  },
  {
    path: '/',
    children: [
      {
        index: true,
        element: <Login />
      },
     
    ]
  },
    {
    path: '/carousel',
    children: [
      {
        index: true,
        element: <Carousel />
      },
     
    ]
  },
])

export default router