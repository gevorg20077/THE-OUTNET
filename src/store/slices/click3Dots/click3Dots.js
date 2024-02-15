import { createSlice } from "@reduxjs/toolkit";

const click3DotsSlice = createSlice({
    name: "click3Dots",
    initialState: false,
    reducers: {
        actionClick3Dots(state, action) {
            return !state
        }
    }
})

export const click3DotsReducer = click3DotsSlice.reducer
export const { actionClick3Dots } = click3DotsSlice.actions