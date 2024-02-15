import { createSlice } from "@reduxjs/toolkit"

const clickVariant4Slice = createSlice({
    name: "clickVariant4",
    initialState: false,
    reducers: {
        actionClickVariant4(state, action) {
            return !state
        },
        actionClearVariant4(state, action) {
            return false
        }
    }
})

export const clickVariant4Reducer = clickVariant4Slice.reducer
export const { actionClickVariant4, actionClearVariant4 } = clickVariant4Slice.actions