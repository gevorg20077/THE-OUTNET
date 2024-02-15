import { createSlice } from "@reduxjs/toolkit";

const clickColorSlice = createSlice({
    name: 'clickColor',
    initialState: false,
    reducers: {
        actionClickColor(state, action) {
            return !state
        }
    }
})

export const clickColorReducer = clickColorSlice.reducer
export const { actionClickColor } = clickColorSlice.actions