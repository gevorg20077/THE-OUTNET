import { createSlice } from "@reduxjs/toolkit";

const addLikeSlice = createSlice({
  name: "addLike",
  initialState: [],
  reducers: {
    actionAddLike(state, { payload }) {
      return [...state, payload];
    },
    actionDeleteLike(state, {payload}){
      return state.filter((like)=>like.id !== payload)
    },
    actionDoubleFavorite(state, {payload}){
      return state.includes(payload);
    }
  },
});

export const addLikeReducer = addLikeSlice.reducer;
export const { actionAddLike, actionDeleteLike } = addLikeSlice.actions;
