import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchClothes = createAsyncThunk("clothes/fetchClothes", async () => {
    const result = await fetch('http://localhost:5003/productsData')
    const jsonResult = await result.json()
    return jsonResult
})