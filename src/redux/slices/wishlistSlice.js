import { createSlice } from "@reduxjs/toolkit";

const WishlistSlice = createSlice({
    name: "WishlistSlice",
    initialState: {
        data: [],
        RemovedProductID: 0
    },
    reducers: {
        Add_Wishlist_Item: (state, action) => {
            const Product = { ...action.payload.product }
            Product.product_qnty = 1
            state.data.push(Product)
        },
        Update_Wishlist_Item: (state, action) => {
            if (action.payload.type == "increment") {
                const ProductID = action.payload.product_id
                const Product = state.data.find((item) => item.id === ProductID)
                Product.product_qnty += 1
            }
            else if (action.payload.type == "decrement") {
                const ProductID = action.payload.product_id
                const Product = state.data.find((item) => item.id === ProductID)
                if (Product.product_qnty > 1) {
                    Product.product_qnty -= 1
                }
            }
        },
        Remove_Wishlist_Item: (state, action) => {
            const Product = state.data.find((item) => item.id === action.payload.product_id)
            if (Product) {
                state.RemovedProductID = Product.id
                state.data.splice(state.data.indexOf(Product), 1)
            }
        }
    }
})

export default WishlistSlice.reducer

export const { Add_Wishlist_Item, Update_Wishlist_Item, Remove_Wishlist_Item } = WishlistSlice.actions