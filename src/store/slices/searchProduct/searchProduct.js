import { createSlice } from "@reduxjs/toolkit";

const searchProductSlice = createSlice({
    name: "search",
    initialState: "",
    reducers: {
        actionInputValue(state,{payload}){
            return payload
        }
    }
})

export const searchProductReducer = searchProductSlice.reducer
export const {actionInputValue} = searchProductSlice.actions