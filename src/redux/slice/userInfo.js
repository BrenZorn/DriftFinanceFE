import { createSlice } from '@reduxjs/toolkit'

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState: {
    user: {}
  },
  reducers: {
    addUser: (state, action) => {
        state.user = action.payload
    },
    removeUser: state => {
        state.user -= 1
    }
  }
})

export const { addUser, removeUser } = userInfoSlice.actions

export default userInfoSlice.reducer