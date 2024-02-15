import { createSlice } from "@reduxjs/toolkit";

const addToCartSlice = createSlice({
  name: "addToCart",
  initialState: {
    data: [],
    index: 0,
  },
  reducers: {
    actionAddToCart(state, { payload }) {
      return {
        data: [...state.data, payload],
        index: state.data.length,
      };
    },
    actionDeleteFromCart(state,{payload}){
        return {
            ...state,
            data: state.data.filter((product)=>product.id !== payload),
            index : state.index - 1 
        }
    }
  },
});

export const addToCartReducer = addToCartSlice.reducer;
export const { actionAddToCart, actionDeleteFromCart } = addToCartSlice.actions;
