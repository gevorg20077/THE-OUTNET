import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSelectedClothes = createAsyncThunk("selectedClothe/fetchSlectedClothe", async (prodId) => {
    const result = await fetch(`http://localhost:5003/productsData/${prodId}`)
    const jsonResult = await result.json()
    return jsonResult
})