import { createAsyncThunk } from "@reduxjs/toolkit";

export const GetCategoryList = createAsyncThunk("GetCategoryList", async (CategoryData, { rejectWithValue }) => {
    try {
        const CategoryAPI = await fetch(`https://dummyjson.com/products/category-list`)
        const CategoryData = await CategoryAPI.json()
        return CategoryData
    } catch (error) {
        return rejectWithValue(error)
    }
})