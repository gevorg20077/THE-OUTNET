import { createSlice } from "@reduxjs/toolkit";

const infoSlice = createSlice({
    name: 'info',
    initialState: {
        clickCategory: true,
        clickPrice: false,
        clickColor: false,
        clickDesigner: false,
        clickClothingSize: false,
        clickCollarSize: false,
        clickConsidered: false,
        clickFabric: false
    },
    reducers: {
        actionClickCaregory(state, action) {
            return {
                ...state,
                clickCategory: !state.clickCategory,
                clickPrice: false,
                clickColor: false,
                clickDesigner: false,
                clickClothingSize: false,
                clickCollarSize: false,
                clickConsidered: false,
                clickFabric: false
            }
        },
        actionCLickPrice(state, action) {
            return {
                ...state,
                clickPrice: !state.clickPrice,
                clickCategory: false,
                clickColor: false,
                clickDesigner: false,
                clickClothingSize: false,
                clickCollarSize: false,
                clickConsidered: false,
                clickFabric: false
            }
        },
        actionCLickColor(state, action) {
            return {
                ...state,
                clickColor: !state.clickColor,
                clickCategory: false,
                clickPrice: false,
                clickDesigner: false,
                clickClothingSize: false,
                clickCollarSize: false,
                clickConsidered: false,
                clickFabric: false
            }
        },
        actionCLickDesigner(state, action) {
            return {
                ...state,
                clickDesigner: !state.clickDesigner,
                clickColor: false,
                clickCategory: false,
                clickPrice: false,
                clickClothingSize: false,
                clickCollarSize: false,
                clickConsidered: false,
                clickFabric: false
            }
        },
        actionClickClothingSize(state, action) {
            return {
                ...state,
                clickClothingSize: !state.clickClothingSize,
                clickDesigner: false,
                clickColor: false,
                clickCategory: false,
                clickPrice: false,
                clickCollarSize: false,
                clickConsidered: false,
                clickFabric: false
            }
        },
        actionClickCollarSize(state, action) {
            return {
                ...state,
                clickCollarSize: !state.clickCollarSize,
                clickClothingSize: false,
                clickDesigner: false,
                clickColor: false,
                clickCategory: false,
                clickPrice: false,
                clickConsidered: false,
                clickFabric: false
            }
        },
        actionClickConsidered(state, action) {
            return {
                ...state,
                clickConsidered: !state.clickConsidered,
                clickCollarSize: false,
                clickClothingSize: false,
                clickDesigner: false,
                clickColor: false,
                clickCategory: false,
                clickPrice: false,
                clickFabric: false
            }
        },
        actionClickFabric(state, action) {
            return {
                ...state,
                clickFabric: !state.clickFabric,
                clickConsidered: false,
                clickCollarSize: false,
                clickClothingSize: false,
                clickDesigner: false,
                clickColor: false,
                clickCategory: false,
                clickPrice: false
            }
        }
    }
})

export const clickCaregoryReducer = infoSlice.reducer
export const { actionClickCaregory } = infoSlice.actions
export const clickPriceReducer = infoSlice.reducer
export const { actionCLickPrice } = infoSlice.actions
export const clickColorReducer = infoSlice.reducer
export const { actionCLickColor } = infoSlice.actions
export const clickDesignerReducer = infoSlice.reducer
export const { actionCLickDesigner } = infoSlice.actions
export const clickClothingSizeReducer = infoSlice.reducer
export const { actionClickClothingSize } = infoSlice.actions
export const clickCollarSizeReducer = infoSlice.reducer
export const { actionClickCollarSize } = infoSlice.actions
export const clickConsideredReducer = infoSlice.reducer
export const { actionClickConsidered } = infoSlice.actions
export const clickFabricReducer = infoSlice.reducer
export const { actionClickFabric } = infoSlice.actions