import { createBrowserRouter } from 'react-router-dom'
import MonthBill from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
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
])

export default router