import { configureStore } from '@reduxjs/toolkit'
import userInfoReducer from './slice/userInfo'
import userIncomeReducer from './slice/income'
import trackerReducer from './slice/trackers'

export default configureStore({
  reducer: {
    user : userInfoReducer,
    userIncome: userIncomeReducer,
    trackers: trackerReducer
  }
})