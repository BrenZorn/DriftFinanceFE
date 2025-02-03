import { createSlice } from "@reduxjs/toolkit";

export const trackerInfoSlice = createSlice({
    name: 'trackerInfo',
    initialState: {
        createTrackerToggle: false,
        addTrackerItemsToggle: false,
        tracker: {
            name: '',
            amount: '',
            trackerItems: [],
        }
    },
    reducers: {
        updateCreateTracker : (state, action) => {
            state.createTrackerToggle = action.payload
        },
        updateAddTrackerItemsToggle : (state, action) => {
            state.addTrackerItemsToggle = action.payload
        }
    }
})

export const { updateCreateTracker, updateAddTrackerItemsToggle } = trackerInfoSlice.actions

export default trackerInfoSlice.reducer