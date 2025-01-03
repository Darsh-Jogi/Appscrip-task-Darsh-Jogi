import { FilterCategory } from "../FilterCategory/filtercategory"
import { Filter } from "../Filter/filter"
import '../ProductSection/productsection.css'
import { useState } from "react"
import { Products } from "../Products/products"

export const ProductSection = () => {
    const [showfilter, setShowfilter] = useState(false)
    const [switchdesign, setSwitchdesign] = useState(false)
    return (
        <div className="productsection-container">
            <FilterCategory showfilter={showfilter} setShowfilter={setShowfilter} switchdesign={switchdesign} setSwitchdesign={setSwitchdesign}/>
            <div className="productsection-container__filter-products">
                <Filter showfilter={showfilter} />
                <Products showFilter={showfilter} switchdesign={switchdesign}/>
            </div>
        </div>
    )
}