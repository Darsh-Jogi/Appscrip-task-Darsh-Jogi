import "../HeroSection/herosection.css"

export const HeroSection = () => {
    return (
        <>
            <div className="herosection-breadcrump">
                <ul className="herosection-breadcrump__paths">
                    <li className="herosection-breadcrump__paths--items">
                        home
                    </li>
                    <li className="herosection-breadcrump__paths--items">
                        |
                    </li>
                    <li className="herosection-breadcrump__paths--items">
                        shop
                    </li>
                </ul>
            </div>
            <div className="herosection-container">
                <div className="herosection-container__heading">
                    <h1>DISCOVER OUR PRODUCTS</h1>
                </div>
                <div className="herosection-container__description">
                    <p>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
                </div>
            </div>
        </>
    )
}
