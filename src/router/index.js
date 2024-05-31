import { createHashRouter } from 'react-router-dom'
import MonthBill from '../pages/Home'
const router = createHashRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: <MonthBill />
      },
     
    ]
  },
])

export default router