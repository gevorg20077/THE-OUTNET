import { createSlice } from "@reduxjs/toolkit";

const clickVariant1Slice = createSlice({
    name: "clickVariant1",
    initialState: false,
    reducers: {
        actionClickVariant1(state, action) {
            return !state
        },
        actionClickClearVariant1(state, action) {
            return false
        }
    }
})

export const clickVariant1Reducer = clickVariant1Slice.reducer
export const clickClearVariant1Reducer = clickVariant1Slice.reducer
export const { actionClickVariant1, actionClickClearVariant1 } = clickVariant1Slice.actions