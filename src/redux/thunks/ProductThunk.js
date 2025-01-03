import { createAsyncThunk } from "@reduxjs/toolkit";

export const GetProductData = createAsyncThunk("GetProductData", async (ProductData, { rejectWithValue }) => {
    try {
        const { category } = ProductData
        const Endpoint = category !== "recommended" ? `products/category/${category}` : `products`
        const ProductAPI = await fetch(`https://dummyjson.com/${Endpoint}?limit=100`)
        const Products = await ProductAPI.json()
        return { ProductData: Products, activeCategory: category }
    } catch (error) {
        return rejectWithValue(error)
    }
})