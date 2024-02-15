import { createSlice } from "@reduxjs/toolkit";

const clickCategorySlice = createSlice({
    name: 'clickCategory',
    initialState: false,
    reducers: {
        actionClickCategory(state, action) {
            return !state
        }
    }
})

export const clickCategoryReducer = clickCategorySlice.reducer
export const { actionClickCategory } = clickCategorySlice.actions