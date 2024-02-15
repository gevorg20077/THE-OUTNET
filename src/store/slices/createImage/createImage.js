import { createSlice } from "@reduxjs/toolkit";

const createImageSlice = createSlice({
    name: "createImage",
    initialState: "",
    reducers: {
        actionCreateImage(state, { payload }) {
            return payload
        }
    }
})

export const createImageReducer = createImageSlice.reducer
export const { actionCreateImage } = createImageSlice.actions