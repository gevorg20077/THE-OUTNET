import { createSlice } from "@reduxjs/toolkit";

const clickPriceSlice = createSlice({
    name: 'clickProduct',
    initialState: false,
    reducers: {
        actionClickPrice(state, action) {
            return !state
        }
    }
})

export const clickPriceReducer = clickPriceSlice.reducer
export const { actionClickPrice } = clickPriceSlice.actions