import { configureStore } from '@reduxjs/toolkit'
import userInfoReducer from './slice/userInfo'

export default configureStore({
  reducer: {
    user : userInfoReducer
  }
})