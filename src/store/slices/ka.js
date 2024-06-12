import { createSlice } from '@reduxjs/toolkit'
import http from '../../utils/http'

const kaSlice = createSlice({
  name: 'ka',
  initialState: {
    billList: [],
    token: localStorage.getItem('token') || '', // 从localStorage中取token，如果没有则为空字符串
  },
  reducers: {
    setBillList(state, action) {
      state.billList = action.payload
    },
    addBill(state, action) {
      state.billList.push(action.payload)
    },
    setToken(state, action) {
      state.token = action.payload
      localStorage.setItem('token', action.payload) // 存储token到localStorage
    },
    removeToken(state) {
      state.token = '';
      localStorage.removeItem('token'); // 移除localStorage中的token
    },
  },
})

// 记一笔
const { addBill } = kaSlice.actions
const createBill = (data) => {
  return async (dispatch) => {
    const res = await http.post('/ka', data)
    dispatch(addBill(res.data))
  }
}

// 获取
const { setBillList } = kaSlice.actions
const getBills = () => {
  return async (dispatch) => {
    const res = await http.get('/ka')
    dispatch(setBillList(res.data))
  }
}

// 设置token
const { setToken, removeToken } = kaSlice.actions
const setTokenToLocalStorage = (token) => {
  return async (dispatch) => {
    if (token) {
      dispatch(setToken(token))
    } else {
      dispatch(removeToken())
    }
  }
}

export default kaSlice.reducer

export {
  createBill,
  getBills,
  setTokenToLocalStorage
}
