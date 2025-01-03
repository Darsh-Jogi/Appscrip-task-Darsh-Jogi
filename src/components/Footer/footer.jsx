import { useState } from "react"
import "../Footer/footer.css"
import US_logo from "../../assets/images/US-logo.png"
import Instagram from "../../assets/images/insta-logo.png"
import Linkedin from "../../assets/images/linkedin-logo.png"
import Gpay from "../../assets/images/Gpay-logo.png"
import Mcard from "../../assets/images/Mcard-logo.png"
import Paypal from "../../assets/images/paypal-logo.png"
import Amex from "../../assets/images/amex-logo.png"
import Applepay from "../../assets/images/apple-pay-logo.png"
import Paycard from "../../assets/images/pay-logo.png"
import Dropdowntrigger from "../../assets/images/dropdown-trigger.png"

export const Footer = () => {
    const [footerdropdowns, setFooterdropdowns] = useState({
        metta_muse: false,
        quick_links: false,
        contactoption: false
    })
    const metta_muse = ["About Us", "Stories", "Artisans", "Boutiques", "Contact Us", "EU Compliances Docs"]
    const Quick_Links = ["Orders & Shipping", "Join/Login as a Seller", "Payment & Pricing", "Return & Refunds", "FAQs", "Privacy Policy", "Terms & Conditions"]
    const mettāmuse_options = [Gpay, Mcard, Paypal, Amex, Applepay, Paycard]

    const handlefooterdropdown = (dropdown) => {
        setFooterdropdowns({ ...footerdropdowns, [dropdown]: !footerdropdowns[dropdown] })
    }

    return (
        <footer className="footer-container">
            <div className="footer-container__group--one">

                <div className="footer-container__group--newsletter">
                    <div className="footer-container__group--newsletterheading">
                        <h4>
                            Be the first to know
                        </h4>
                        <p className="content-hide">
                            Sign up for updates from mettā muse.
                        </p>
                        <p className="hide-content">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. this is simply dummy text.
                        </p>
                    </div>
                    <div className="footer-container__group--newlettersignup">
                        <div className="footer-container__group--emailbox">
                            <input type="email" placeholder="Enter your e-mail..." />
                        </div>
                        <div className="footer-container__group--singupbtn">
                            <button>subscribe</button>
                        </div>
                    </div>
                </div>

                <div className="footer-container__group--contactus">
                    <div className="footer-container__group--contactgroup">
                        <h4>contact us</h4>
                        <h4 className="hide-content">call us</h4>
                        <ul className="footer-container__group--contactoptionlist">
                            <li>+44 221 133 5360</li>
                            <li>customercare@mettamuse.com</li>
                        </ul>
                    </div>
                    <div className="footer-container__group--currecygroup">
                        <h4>Currency</h4>
                        <ul className="footer-container__group--currencyoptionlist">
                            <li>
                                <img src={US_logo} alt="US-logo" loading="lazy" />
                            </li>
                            <li>usd</li>
                        </ul>
                    </div>
                    <div className="footer-container__group--currecyguidelines">
                        <p className="hidden-flex">
                            Transactions will be completed in Euros and a currency reference is available on hover.
                        </p>
                    </div>
                </div>
            </div>

            <div className="footer-container__group--two">
                <div className="footer-container__group--metamusse" onClick={() => handlefooterdropdown("metta_muse")}>
                    <div className="footer-container__group--metamusseheading">
                        <h2>mettā muse</h2>
                        <img src={Dropdowntrigger} alt="metta-muse-dropdown" loading="lazy" className={`meta-musse-img ${footerdropdowns.metta_muse ? "metamuse-open" : "metamuse-close"}`} />
                    </div>
                    <ul className={`footer-container__group--metamusselist ${footerdropdowns.metta_muse ? "show-metamuse" : "hide-metamuse"}`}>
                        {metta_muse.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                </div>
                <div className="footer-container__group--quicklinks" onClick={() => handlefooterdropdown("quick_links")}>
                    <div className="footer-container__group--quicklinkheading">
                        <h3>Quick Links</h3>
                        <img src={Dropdowntrigger} alt="quick-links-dropdown" loading="lazy" className={`quick-links-img ${footerdropdowns.quick_links ? "quicklinks-open" : "quicklinks-close"}`} />
                    </div>
                    <ul className={`footer-container__group--quicklinklist ${footerdropdowns.quick_links ? "show-quicklinks" : "hide-quicklinks"}`} >
                        {Quick_Links.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                </div>
                <div className="footer-container__group--followusPayment">
                    <div className="footer-container__group--followus" onClick={() => handlefooterdropdown("contactoption")}>
                        <div className="footer-container__group--followusheading">
                            <h3>follow us</h3>
                            <img src={Dropdowntrigger} alt="quick-links-dropdown" loading="lazy" className={`follow-us-img ${footerdropdowns.contactoption ? "contatcts-open" : "contatcts-close"}`} />
                        </div>
                        <div className={`footer-container__group--socialLogos ${footerdropdowns.contactoption ? "show-social" : "hide-social"}`}>
                            <img src={Instagram} alt="social_instagram" loading="lazy" />
                            <img src={Linkedin} alt="social_linkedin" loading="lazy"/>
                        </div>
                    </div>
                    <div className="footer-container__group--mettamuseAccepts">
                        <h3>mettā muse <span>Accepts</span></h3>
                        <div className="footer-container__group--mettamuseLogos">
                            {mettāmuse_options.map((item, index) => <img key={index} src={item} loading="lazy" alt={`social_${item}`} />)}
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-container__copyright">
                <p>Copyright © 2023 mettamuse. All rights reserved.</p>
            </div>
        </footer>
    )
}
