import { createHashRouter } from 'react-router-dom'
import MonthBill from '../pages/Home'
import Login from '../pages/Login'
const router = createHashRouter([
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
    path: '/index',
    children: [
      {
        index: true,
        element: <MonthBill />
      },
     
    ]
  },
])

export default router