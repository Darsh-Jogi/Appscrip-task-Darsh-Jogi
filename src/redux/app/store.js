import { configureStore } from "@reduxjs/toolkit";
import CategoryReducer from "../slices/CategorySlice.js"
import ProductReducer from "../slices/ProductSlice.js"
import WishlistReducer from "../slices/wishlistSlice.js"

const store = configureStore({
    reducer: {
        CategoryReducer: CategoryReducer,
        ProductReducer: ProductReducer,
        WishlistReducer: WishlistReducer
    }
})

export default store