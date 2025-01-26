import { createSlice } from '@reduxjs/toolkit'

export const userIncome= createSlice({
  name: 'userIncome',
  initialState: {
    userIncome: 0
  },
  reducers: {
    updateUserIncome: (state, action) => {
        state.userIncome = action.payload
    },

  }
})

export const { updateUserIncome } = userIncome.actions

export default userIncome.reducer;