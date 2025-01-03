import { createSlice } from "@reduxjs/toolkit";
import { GetCategoryList } from "../thunks/CategoryThunk";


const CategorySlice = createSlice({
    name: "CategorySlice",
    initialState: {
        isloading: false,
        data: null,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(GetCategoryList.pending, (state, action) => {
            state.isloading = true
        })
        builder.addCase(GetCategoryList.fulfilled, (state, action) => {
            state.isloading = false;
            const CateogryState = [...action.payload]
            CateogryState.unshift("recommended")
            state.data = CateogryState;
            state.isError = false
        })
        builder.addCase(GetCategoryList.rejected, (state, action) => {
            state.isloading = false,
                state.isError = true
        })
    }
})

export default CategorySlice.reducer