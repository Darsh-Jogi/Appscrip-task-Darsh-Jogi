import '../Filter/filter.css'
import downarrow from "../../assets/logos/nav-icon-arrow-down.png"
import { useState } from 'react'
import { current } from '@reduxjs/toolkit'


export const Filter = ({ showfilter }) => {
    const filterfeatures = ["ideal for", "occasion", "work", "fabric", "segment", "suitable for", "raw material", "pattern"]
    return (
        <div className={`filter-container ${showfilter === true ? "active" : "unactive"}`}>
            <div className="filter-container__customizable">
                <input type="checkbox" id="customizable" />
                <label htmlFor="customizable">customizable</label>
            </div>
            <div className="filter-container__filterfeatures">
                {filterfeatures.map((item, index) => <FilterDropdown key={index} FilterName={item} />)}
            </div>
        </div>
    )
}

const FilterDropdown = ({ FilterName }) => {
    const [Activefilter, setActivefilter] = useState(false)
    return (
        <div className='filterdropdown-container'>
            <div className="filterdropdown-container__feature" onClick={() => setActivefilter(!Activefilter)}>
                <p>{FilterName}</p>
                <img src={downarrow} alt="expand-filter"
                    className={`filterdropdown-container__feature--expandfilter ${Activefilter === true ? "active" : "unactive"}`} 
                    loading='lazy'
                    />
            </div>
            <div className="filterdropdown-container__all">
                <p>all</p>
            </div>
            <FilterDropDownExpand filterAcitveState={Activefilter} FilterName={FilterName} />
        </div>
    )
}

const FilterDropDownExpand = ({ filterAcitveState, FilterName }) => {
    const checkFilterArray = ["Men", "Women", "Baby & Kids"]
    const [Unselectfilters, setUnselectfilters] = useState({
        Men: false,
        Women: false,
        baby_kids: false
    })

    const handleFilters = (event) => {
        setUnselectfilters({ ...Unselectfilters, [event.target.name]: !Unselectfilters[event.target.name] })
    }

    return (
        <div className={`filterdropdown-container__expand ${filterAcitveState === true ? "active" : "unactive"}`}>
            <div className="filterdropdown-container__expand--unselect" onClick={() => setUnselectfilters({
                Men: false,
                Women: false,
                baby_kids: false
            })}>
                <p>Unselect all</p>
            </div>
            <div className="filterdropdown-container__expand--checkfilters">
                {checkFilterArray.map((item, index) => <div key={index} className="filterdropdown-container__expand--checkfiltergroup">
                    <input type="checkbox" id={`${FilterName} ${item}`}
                        checked={item === "Baby & Kids" ? Unselectfilters["baby_kids"] : Unselectfilters[item]}
                        name={item === "Baby & Kids" ? "baby_kids" : item} onChange={handleFilters} />
                    <label htmlFor={`${FilterName} ${item}`}>{item}</label>
                </div>)}
            </div>
        </div>
    )
}