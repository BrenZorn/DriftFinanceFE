import { configureStore } from '@reduxjs/toolkit'
import userInfoReducer from './slice/userInfo'
import userIncomeReducer from './slice/income'

export default configureStore({
  reducer: {
    user : userInfoReducer,
    userIncome: userIncomeReducer
  }
})