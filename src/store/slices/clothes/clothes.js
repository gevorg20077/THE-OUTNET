import { createSlice } from "@reduxjs/toolkit";
import { fetchClothes } from "./API";

const clothesSlice = createSlice({
  name: "clothes",
  initialState: {
    data: [],
    rangeValue: 3000,
    colorCheck: [],
    clothesSize: [],
    LevisBool: false,
    HandMBool: false,
    NikeBool: false,
    AdidasBool: false,
    All: true,
  },
  reducers: {
    actionRangeValue(state, { payload }) {
      return { ...state, rangeValue: payload };
    },
    actionColorCheck(state, { payload }) {
      return {
        ...state,
        colorCheck: [...state.colorCheck, payload],
      };
    },
    resetColorSelection(state) {
      state.colorCheck = [];
    },
    actionClothesSize(state, { payload }) {
      return {
        ...state,
        clothesSize: [...state.clothesSize, payload],
      };
    },
    resetClothesSize(state) {
      state.clothesSize = [];
    },
    actionLeviStraus(state) {
      return {
        ...state,
        LevisBool: true,
        HandMBool: false,
        NikeBool: false,
        AdidasBool: false,
        All: false,
      };
    },
    actionHandM(state) {
      return {
        ...state,
        HandMBool: true,
        LevisBool: false,
        NikeBool: false,
        AdidasBool: false,
        All: false,
      };
    },
    actionNike(state) {
      return {
        ...state,
        NikeBool: true,
        HandMBool: false,
        LevisBool: false,
        AdidasBool: false,
        All: false,
      };
    },
    actionAdidas(state) {
      return {
        ...state,
        AdidasBool: true,
        NikeBool: false,
        HandMBool: false,
        LevisBool: false,
        All: false,
      };
    },
  },
  extraReducers: (builder) => [
    builder
      .addCase(fetchClothes.fulfilled, (state, { payload }) => {
        return { ...state, data: payload };
      })
      .addCase(fetchClothes.rejected, (state, action) => {
        console.log("error fetch clothes");
      }),
  ],
});

export const clothesReducer = clothesSlice.reducer;
export const {
  actionClothes,
  actionRangeValue,
  actionColorCheck,
  resetColorSelection,
  resetClothesSize,
  actionClothesSize,
  actionLeviStraus,
  actionHandM,
  actionNike,
  actionAdidas,
} = clothesSlice.actions;
