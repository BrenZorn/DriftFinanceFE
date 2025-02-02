import { createSlice } from "@reduxjs/toolkit";

export const trackerInfoSlice = createSlice({
    name: 'trackerInfo',
    initialState: {
        createTrackerToggle: false,
    },
    reducers: {
        updateCreateTracker : (state, action) => {
            state.createTrackerToggle = action.payload
        }
    }
})

export const { updateCreateTracker } = trackerInfoSlice.actions

export default trackerInfoSlice.reducer