import { createSlice } from "@reduxjs/toolkit";

const clickClearSlice = createSlice({
    name: "clickClear",
    initialState: false,
    reducers: {
        actionClickClear(state, action) {
            return !state
        },
        actionClickNo(state, action) {
            return !state
        },
        actionClickYesClear(state, action) {
            return false
        }
    }
})

export const clickClearReducer = clickClearSlice.reducer
export const { actionClickClear } = clickClearSlice.actions

export const clickNoReducer = clickClearSlice.reducer
export const { actionClickNo } = clickClearSlice.actions

export const clickYesClearReducer = clickClearSlice.reducer
export const { actionClickYesClear } = clickClearSlice.actions