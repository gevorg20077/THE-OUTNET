import { createSlice } from "@reduxjs/toolkit";
import { fetchSelectedClothes } from "./API";

const selectedClotheSlice = createSlice({
    name: "selectedClothe",
    initialState: [],
    extraReducers: (builder) => [
        builder
            .addCase(fetchSelectedClothes.fulfilled, (state, { payload }) => {
                return payload
            })
            .addCase(fetchSelectedClothes.rejected, (state, action) => {
                console.log('error fetch clothes');
            })
    ]
})

export const slectedClotheReducer = selectedClotheSlice.reducer
export const { actionClothes } = selectedClotheSlice.actions