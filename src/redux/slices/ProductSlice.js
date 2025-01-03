import { createSlice } from "@reduxjs/toolkit";
import { GetProductData } from "../thunks/ProductThunk";

const ProductSlice = createSlice({
    name: "ProductSlice",
    initialState: {
        isLoading: false,
        data: null,
        isError: false,
        activeCategory: "recommended"
    },
    reducers: {
        SetActiveCategory: (state, action) => {
            state.activeCategory = action.payload.activecategory
        }
    },
    extraReducers: (builder) => {
        builder.addCase(GetProductData.pending, (state, action) => {
            state.isLoading = true
        });
        builder.addCase(GetProductData.fulfilled, (state, action) => {
            state.isLoading = false,
            state.data = action.payload.ProductData
            state.activeCategory = action.payload.activeCategory
            state.isError = false
        });
        builder.addCase(GetProductData.rejected, (state, action) => {
            state.isLoading = false,
            state.isError = true
        })
    }
})

export default ProductSlice.reducer
export const { SetActiveCategory } = ProductSlice.actions