import { useState } from "react"
import wishlist_close from "../../assets/images/wishlist-close.png"
import "../wishlist/wishlist.css"
import { useSelector, useDispatch } from "react-redux"
import Wishlistincrement from "../../assets/images/wishlist-increment.png"
import Wishlistdecrement from "../../assets/images/wishlist-decrement.png"
import { Remove_Wishlist_Item, Update_Wishlist_Item } from "../../redux/slices/wishlistSlice.js"

export const Wishlist = ({ Showwishlist, setShowwishlist }) => {
    const WishlistState = useSelector((state) => state.WishlistReducer)
    return (
        <div className="wishlist-container">
            <div className="wishlist-container__wishlistImage">
                <img src={wishlist_close} alt="wishlist-close" onClick={() => setShowwishlist(false)} />
            </div>
            <div className="wishlist-container__wishlistheading">
                <h1>Wishlist</h1>
            </div>
            <div className="wishlist-container__wishlistdata">
                {WishlistState.data.map((item) => <WishlistCard key={item.id} wishlistData={item} />)}
            </div>
        </div>
    )
}

const WishlistCard = ({ wishlistData }) => {
    const WishlistState = useSelector((state) => state.WishlistReducer)
    const disptach = useDispatch()

    const handleRemovewishlist = (itemID) => {
        disptach(Remove_Wishlist_Item({ product_id: itemID }))
    }

    const handleIncrementWishlist = (actiontype, ProductID) => {
        if (actiontype === "Increment") {
            disptach(Update_Wishlist_Item({ type: "increment", product_id: ProductID }))
        }
        else if (actiontype === "Decrement") {
            disptach(Update_Wishlist_Item({ type: "decrement", product_id: ProductID }))
        }
    }
    return (
        <div className="wishlistdata-container">
            <div className="wishlistdata-container__productImage">
                <img src={wishlistData.thumbnail} alt="" />
            </div>
            <div className="wishlistdata-container__productData">
                <div className="wishlistdata-container__productData--productTitle">
                    <h2>{wishlistData.title}</h2>
                </div> 
                <div className="wishlistdata-container__productData--updateProduct">
                    <p>QNTY : {wishlistData.product_qnty}</p>
                    <div className="wishlistdata-container__productData--updatefeatures">
                        <img src={Wishlistincrement} alt="" className="wishlistdata-container__productData--increment"
                            onClick={() => handleIncrementWishlist("Increment", wishlistData.id)} />
                        <img src={Wishlistdecrement} alt="" className="wishlistdata-container__productData--decrement"
                            onClick={() => handleIncrementWishlist("Decrement", wishlistData.id)} />
                    </div>
                </div>
                <div className="wishlistdata-container__productData--removeProduct">
                    <button className="wishlistdata-container__productData--removebutton" onClick={() => handleRemovewishlist(wishlistData.id)}>Remove</button>
                </div>
            </div>
        </div>
    )
}