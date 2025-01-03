import { NavigantionBar } from "../components/NavbarGroup/navigationbar"
import { HeroSection } from "../components/HeroSection/herosection"
import { ProductSection } from "../components/ProductSection/productsection"
import { Wishlist } from "../components/wishlist/wishlist"
import { useState } from "react"
import { Footer } from "../components/Footer/footer"

export const EntryPageIndex = () => {
    const [showwishlist, setShowwishlist] = useState(false)
    return (
        <>
            <NavigantionBar showwishlist={showwishlist} setShowwishlist={setShowwishlist} />
            <div className="main-app-layout">
                <HeroSection />
                <ProductSection />
                {showwishlist ? <Wishlist Showwishlist={showwishlist} setShowwishlist={setShowwishlist} /> : null}
            </div>
            <Footer />
        </>
    )
}