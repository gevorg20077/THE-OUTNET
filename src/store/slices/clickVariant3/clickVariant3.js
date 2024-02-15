import { createSlice } from "@reduxjs/toolkit";

const clickVariant3Slice = createSlice({
    name: 'clickVariant3',
    initialState: false,
    reducers: {
        actionClickVariant3(state, action) {
            return !state
        },
        actionClearVariant3(state, action) {
            return !state
        }
    }
})

export const clickVariant3Reducer = clickVariant3Slice.reducer
export const { actionClickVariant3, actionClearVariant3 } = clickVariant3Slice.actions