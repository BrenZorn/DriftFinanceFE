import { createSlice } from "@reduxjs/toolkit";

export const trackerInfoSlice = createSlice({
    name: 'trackerInfo',
    initialState: {
        createTrackerToggle: false,
        addTrackerItemsToggle: false,
        tracker: {
            name: '',
            trackerItems: [],
        }
    },
    reducers: {
        //toggle add tracker popup
        updateCreateTracker : (state, action) => {
            state.createTrackerToggle = action.payload
        },
        //toggle adding items to the new tracker
        updateAddTrackerItemsToggle : (state, action) => {
            state.addTrackerItemsToggle = action.payload
        },
        //add items to the new tracker
        addItemToTracker : (state, action) => {
            state.tracker.trackerItems.push(action.payload)
        },
        //update the tracker name
        updateTrackerName : (state, action) => {
            state.tracker.name = action.payload
        },
        resetTrackerState : (state) => {
            state.tracker = {
                name: '',
                trackerItems: [],
            }
        }
    }
})

export const { updateCreateTracker, updateAddTrackerItemsToggle, addItemToTracker, updateTrackerName, resetTrackerState } = trackerInfoSlice.actions

export default trackerInfoSlice.reducer