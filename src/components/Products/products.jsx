import "../../components/Products/products.css"
import { useSelector, useDispatch } from "react-redux"
import wishlistheart from "../../assets/logos/nav-icon-heart.png"
import { useState, useEffect } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import wishlistfilled from "../../assets/images/wishlist-filled.png"
import pagination_previous from "../../assets/images/pagination-previous.png"
import pagination_next from "../../assets/images/pagination-next.png"
import { Add_Wishlist_Item, Remove_Wishlist_Item } from "../../redux/slices/wishlistSlice"

export const Products = ({ showFilter, switchdesign }) => {
    const dispatch = useDispatch()
    const CategoryState = useSelector((state) => state.CategoryReducer)
    const ProductState = useSelector((state) => state.ProductReducer)
    const [CurrentPagination, setCurrentPagination] = useState(9)

    const SetupPagination = (ProductArraylength) => {
        const PaginationPerPage = ProductArraylength > 9 ? ProductArraylength / 9 : 1
        const PaginationPage = []
        for (let index = 0; index < PaginationPerPage; index++) {
            PaginationPage.push(index + 1)
        }
        return PaginationPage
    }

    useEffect(() => {
        setCurrentPagination(9)
    }, [ProductState.activeCategory])

    return (
        <div className={`product-container ${ProductState.isLoading ? `loader-active` : `loader-unactive`} ${showFilter ? `filter-active` : `filter-unactive`}`}>

            <div className={`product-container__products ${showFilter ? `filter-active` : `filter-unactive`}`}>
                {ProductState.data && !ProductState.isLoading ?
                    ProductState.data.products.slice(CurrentPagination - 9, CurrentPagination).
                        map((item, index) => <ProductCard key={index} ProductData={item} switchdesign={switchdesign}
                            pagination={CurrentPagination} />) : null}
            </div>

            {ProductState.isLoading || !ProductState.data ? <div className="product-container__loading">
                <span class="product-container__loader"></span>
                <h1>Loading...</h1>
            </div> : null}

            {ProductState.data && !ProductState.isLoading && ProductState.data.products.length > 9 ? <div className="product-container__pagination">

                {CurrentPagination > 9 ? <div className="product-container__pagination--previous" onClick={() => setCurrentPagination(CurrentPagination - 9)}>
                    <img src={pagination_previous} alt="previous-page" loading="lazy" />
                </div> : null}

                {SetupPagination(ProductState.data.products.length).map((item) => <div className={`product-container__pagination--current ${CurrentPagination === (item * 9) ? `current-pagination` : null}`} onClick={() => setCurrentPagination(item * 9)} key={item}>
                    <span>{item}</span>
                </div>)}

                {CurrentPagination < ProductState.data.products.length ? <div className="product-container__pagination--next">
                    <img src={pagination_next} alt="next-page" loading="lazy" onClick={() => setCurrentPagination(CurrentPagination + 9)} />
                </div> : null}

            </div> : null}
        </div>
    )
}


const ProductCard = ({ ProductData, switchdesign, pagination }) => {
    const [wishlist, setWishlist] = useState(false)
    const dispatch = useDispatch()
    const ProductState = useSelector((state) => state.ProductReducer)
    const WishlistState = useSelector((state) => state.WishlistReducer)

    useEffect(() => {
        if (WishlistState.data.find((item) => item.id === ProductData.id)) {
            setWishlist(true)
        }
    }, [pagination])

    const handlewishlist = (itemID) => {
        if (wishlist === false) {
            const product = ProductState.data.products.find((item) => item.id === itemID)
            dispatch(Add_Wishlist_Item({ product: product }))
            setWishlist(true)
        }
        else if (wishlist === true) {
            dispatch(Remove_Wishlist_Item({ product_id: itemID }))
            setWishlist(false)
        }
    }


    return (
        <div className={`product-card-container ${switchdesign ? `design-active` : `design-unactive`}`}>
            <div className="product-card-container__productImage">
                <LazyLoadImage
                    src={ProductData.thumbnail}
                    alt={ProductData.title}
                    effect="blur"
                    className="lazy-load-image"
                />
            </div>
            <div className="product-card-container__productData">
                <div className="product-card-container__productData--productitle">
                    <h4>
                        {ProductData.title}
                    </h4>
                    <img src={wishlist && WishlistState.data.find((item) => item.id === ProductData.id) ? wishlistfilled : wishlistheart} alt="wishlist" onClick={() => handlewishlist(ProductData.id)} loading="lazy" />
                </div>
                <div className="product-card-container__productData--wishlist">
                    <p>
                        <span>Sign in</span> or Create an account to see pricing
                    </p>
                    <img src={wishlist && WishlistState.data.find((item) => item.id === ProductData.id) ? wishlistfilled : wishlistheart} alt="wishlist" onClick={() => handlewishlist(ProductData.id)} loading="lazy" />
                </div>
            </div>
        </div>
    )
}