import { configureStore } from "@reduxjs/toolkit";
import { inputRangeValueReducer } from "./slices/inputRangeValue/inputRangeValue";
import { clothesReducer } from "./slices/clothes/clothes";
import { clickCaregoryReducer, clickClothingSizeReducer, clickCollarSizeReducer, clickColorReducer, clickConsideredReducer, clickDesignerReducer, clickFabricReducer, clickPriceReducer } from "./slices/info/info";
import { paginationReducer } from "./slices/pagination/pagination";
import { slectedClotheReducer } from "./slices/selectedClothe/selectedClotheSlice";
import { searchProductReducer } from "./slices/searchProduct/searchProduct";
import { clickArrowDownReducer, clickChatReducer, clickEndReducer, clickYesReducer } from "./slices/clickChat/clickChat";
import { createImageReducer } from "./slices/createImage/createImage";
import { clickVariant4Reducer } from "./slices/clickVariant4/clickVariant4";
import { clickVariant3Reducer } from "./slices/clickVariant3/clickVariant3";
import { clickVariant2Reducer } from "./slices/clickVariant2/clickVariant2";
import { clickClearVariant1Reducer, clickVariant1Reducer } from "./slices/clickVariant1/clickVariant1";
import { clickNoReducer } from "./slices/clickNo/clickNo";
import { clickMuteReducer } from "./slices/ClickMute/ClickMute";
import { click3DotsReducer } from "./slices/click3Dots/click3Dots";
import { clickClearReducer, clickYesClearReducer } from "./slices/clickClear/clickClear";
import { addToCartReducer } from "./slices/addToCart/addToCart";
import { messageReducer } from "./slices/message/message";
import { addLikeReducer } from "./slices/addLike/addLike";

const store = configureStore({
  reducer: {
    clothes: clothesReducer,
    inputRangeValue: inputRangeValueReducer,
    clickCategory: clickCaregoryReducer,
    clickPrice: clickPriceReducer,
    clickColor: clickColorReducer,
    clickDesigner: clickDesignerReducer,
    clickClothingSize: clickClothingSizeReducer,
    clickCollarSize: clickCollarSizeReducer,
    clickConsidered: clickConsideredReducer,
    clickFabric: clickFabricReducer,
    pagination: paginationReducer,
    selectedClothe: slectedClotheReducer,
    inputValue: searchProductReducer,
    clickChat: clickChatReducer,
    clickArrowDown: clickArrowDownReducer,
    clickMute: clickMuteReducer,
    clickClear: clickClearReducer,
    clickClearNo: clickNoReducer,
    clickYes: clickYesReducer,
    clickClearYes: clickYesClearReducer,
    clickEnd: clickEndReducer,
    click3Dots: click3DotsReducer,
    clickVariant1: clickVariant1Reducer,
    clickClearVariant1: clickClearVariant1Reducer,
    createImage: createImageReducer,
    clickVariant2: clickVariant2Reducer,
    clickVariant3: clickVariant3Reducer,
    clickVariant4: clickVariant4Reducer,
    addToCart: addToCartReducer,
    messages: messageReducer,
    addLike: addLikeReducer
    
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
});
export default store