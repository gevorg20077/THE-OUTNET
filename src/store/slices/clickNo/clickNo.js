import { createSlice } from "@reduxjs/toolkit";

const clickNoSlice = createSlice({
    name: "clickNo",
    initialState: false,
    reducers: {
        actionClickNo(state, action) {
            return !state
        }
    }
})

export const clickNoReducer = clickNoSlice.reducer
export const { actionClickNo } = clickNoSlice.actions