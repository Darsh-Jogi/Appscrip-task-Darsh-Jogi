import "./navigationbar.css"
import navicongroup1 from '../../assets/logos/navicon-group1.png'
import navLOGO1 from '../../assets/logos/nav-main-LOGO1.png'
import navLOGO2 from '../../assets/logos/nav-main-LOGO2.png'
import nav_icon_search_normal from "../../assets/logos/nav-icon-search-normal.png"
import nav_icon_heart from "../../assets/logos/nav-icon-heart.png"
import nav_icon_shopping_bag from "../../assets/logos/nav-icon-shopping-bag.png"
import nav_icon_profile from "../../assets/logos/nav-icon-profile.png"
import hamburger_icon from "../../assets/logos/hamburger-icon.png"
// import nav_icon_Language from "../../assets/logos/nav-icon-Language.png"
import nav_icon_arrow_down from "../../assets/logos/nav-icon-arrow-down.png"
import { useSelector, useDispatch } from "react-redux"


export const NavigantionBar = ({ showwishlist, setShowwishlist }) => {
    const tabs = ["SHOP", "SKILLS", "STORIES", "ABOUT", "CONTACT US"]
    const WishlistState = useSelector((state) => state.WishlistReducer)
    return (
        <nav className="navigation-container">
            <div className="navigation-container__grey-strip">
                {[1, 2, 3].map((item) => <NavigantioGreyStripContent key={item} display_number={item} />)}
            </div>
            <div className="navigation-container__header">
                <div className="navigation-container__header--logoandicons">
                    <div className="navigation-container__header--LOGO1">
                        <img src={hamburger_icon} alt="hamburger" loading="lazy" className="navbar-hamburger" />
                        <img src={navLOGO1} alt="logo" loading="lazy"/>
                    </div>
                    <div className="navigation-container__header--LOGO2">
                        <img src={navLOGO2} alt="logo" loading="lazy" />
                    </div>
                    <div className="navigation-container__header--navicons">
                        <img src={nav_icon_search_normal} alt="serach" loading="lazy" />
                        <div className="navigation-container__header--wishlistIcon">
                            <img src={nav_icon_heart} loading="lazy" alt="wishlist" onClick={() => setShowwishlist(!showwishlist)} />
                            {WishlistState.data.length > 0 ? <span className="navigation-container__header--wishlistItems">{WishlistState.data.length}</span> : null}
                        </div>
                        <img src={nav_icon_shopping_bag} alt="cart" loading="lazy" />
                        <img src={nav_icon_profile} alt="profile" className="narbar-icons-hidden" loading="lazy" />
                        <div className="navigation-container__header--Language navbar-hidden">
                            <p>ENG</p>
                            <img src={nav_icon_arrow_down} alt="Language" loading="lazy"/>
                        </div>
                    </div>
                </div>
                <div className="navigation-container__header--tabs nabrbar-tabs-hidden">
                    {tabs.map((item) => <div key={item} className="navigation-container__header-tabgroup">
                        <p>{item}</p>
                    </div>)}
                </div>
            </div>
        </nav>
    )
}

const NavigantioGreyStripContent = ({ display_number }) => {
    return (
        <div className={`navigation-container__grey-strip--item ${display_number !== 2 ? "navbar-hidden" : null}`}>
            <img src={navicongroup1} alt="nav-icon" loading="lazy" className="navigation-container__grey-strip-navicongroup1" />
            <p className="navigation-container__grey-strip-navicongrouptext">Lorem ipsum dolor</p>
        </div>
    )
}