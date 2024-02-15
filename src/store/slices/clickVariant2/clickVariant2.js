import { createSlice } from "@reduxjs/toolkit";

const clickVariant2 = createSlice({
    name: 'clickVariant2',
    initialState: false,
    reducers: {
        actionClickVariant2(state, action) {
            return !state
        },
        actionClearVariant2(state, action) {
            return false
        }
    }
})

export const clickVariant2Reducer = clickVariant2.reducer
export const { actionClickVariant2, actionClearVariant2 } = clickVariant2.actions