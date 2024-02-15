import { createSlice } from "@reduxjs/toolkit";

const pagination = createSlice({
    name: 'pagination',
    initialState: {
        currentPage: 1,
        productsPerPage: 9,
    },
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
    },
})

export const { setCurrentPage } = pagination.actions;
export const paginationReducer = pagination.reducer;