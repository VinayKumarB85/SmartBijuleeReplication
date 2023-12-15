import { createSlice } from "@reduxjs/toolkit";

const timelineData = createSlice({
    name: "timelineDataReducer",
    initialState: {
        timelineData: [],
    },
    reducers: {
        setTimelineData(state, action) {
            state.timelineData = action.payload
            console.log("xljkansCKabck", action)
        }
    }
})
export const { setTimelineData } = timelineData.actions
export const timelineDataReducer =  timelineData.reducer