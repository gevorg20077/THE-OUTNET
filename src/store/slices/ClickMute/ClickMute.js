import { createSlice } from "@reduxjs/toolkit";

const clickMuteSlice = createSlice({
    name: "clickMute",
    initialState: false,
    reducers: {
        actionClickMute(state, action) {
            return !state
        }
    }
})

export const clickMuteReducer = clickMuteSlice.reducer
export const { actionClickMute } = clickMuteSlice.actions