import { createSlice } from "@reduxjs/toolkit";

const inputRangeValueSlice = createSlice({
    name: 'inputRangeValue',
    initialState: '1500€',
    reducers: {
        actionInputRangeValue: (state, { payload }) => {
            return "€" + payload
        }
    }
})

export const inputRangeValueReducer = inputRangeValueSlice.reducer
export const { actionInputRangeValue } = inputRangeValueSlice.actions