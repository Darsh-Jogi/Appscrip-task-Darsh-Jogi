import { useState, useEffect } from "react"
import "../FilterCategory/filtercategory.css"
import showfiltericon from "../../assets/images/show-filter.png"
import hidefiltericon from "../../assets/images/hide-filter.png"
import dropdown_correct from "../../assets/images/dropdown-correct.png"
import dropdowntrigger from "../../assets/logos/nav-icon-arrow-down.png"
import { useSelector, useDispatch } from "react-redux"
import { GetCategoryList } from "../../redux/thunks/CategoryThunk"
import { SetActiveCategory } from "../../redux/slices/ProductSlice"
import { GetProductData } from "../../redux/thunks/ProductThunk"

export const FilterCategory = ({ showfilter, setShowfilter, switchdesign, setSwitchdesign }) => {
    const dispatch = useDispatch()
    const CategoryState = useSelector((state) => state.CategoryReducer)
    const ProductState = useSelector((state) => state.ProductReducer)
    const [categorydropdown, setCategorydropdown] = useState(false)

    useEffect(() => {
        dispatch(GetCategoryList())
    }, [])

    useEffect(() => {
        dispatch(GetProductData({ category: ProductState.activeCategory }))
    }, [ProductState.activeCategory])

    // console.log("this is the", CategoryState)
    // console.log("this is product state", ProductState)

    const UpdateActiveCategoryState = (item) => {
        dispatch(SetActiveCategory({ activecategory: item }))
        setCategorydropdown(false)
    }

    console.log("this is switch desgin", switchdesign)

    return (
        <div className={`FilterCategory-container`}>
            <div className="FilterCategory-container__filterfeatures">
                <div className="FilterCategory-container__filterfeatures--totalitems">
                    <h4>{ProductState.data ? ProductState.data.products.length : 0} items</h4>
                </div>
                <div className="FilterCategory-container__filterfeatures--filtertoggle" onClick={() => setShowfilter(!showfilter)}>
                    {showfilter ? <img src={hidefiltericon} alt="hide-filter" loading="lazy" className="FilterCategory-container__filtertoggle-showfilter" /> :
                        <img src={showfiltericon} alt="show-filter" loading="lazy" className="FilterCategory-container__filtertoggle-showfilter" />}
                    {showfilter ? <p>hidefilter</p> : <p>Showfilter</p>}
                </div>
            </div>
            <div className="FilterCategory-container__category--seclection">
                <div className="FilterCategory-container__category--desginSwitch">
                    <label class="switch" onChange={() => setSwitchdesign(!switchdesign)}>
                        <input type="checkbox" checked={switchdesign} />
                        <span class="slider"></span>
                    </label>
                    <div className="FilterCategory-container__category--switch">
                        <p>Switch Design</p>
                    </div>
                </div>
                <div className="FilterCategory-container__productcategory">
                    <div className="FilterCategory-container__productcategory--activecategory" onClick={() => setCategorydropdown(!categorydropdown)}>
                        {CategoryState.isLoading ? <span class="loader"></span> : <p>{ProductState.activeCategory}</p>}
                        <img src={dropdowntrigger} alt="show-dropdown" loading="lazy" />
                    </div>
                    {categorydropdown ? <div className="FilterCategory-container__productcategory--categorydropdown">
                        {CategoryState.data ? (CategoryState.data.map((item, index) => <div key={index} className="FilterCategory-container__productcategory--dropdownoptions" onClick={() => UpdateActiveCategoryState(item)}>
                            {ProductState.activeCategory === item ? <img src={dropdown_correct} loading="lazy" alt="selected-category" /> : null}
                            <p>{item}</p>
                        </div>)) : null}
                    </div> : null}
                </div>
            </div>
        </div>
    )
}