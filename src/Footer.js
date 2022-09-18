import React from "react";
import "./Footer.css"

function Footer(){
    const backtotop = () => {
        window.scroll(0, 0);
    }
    return(
        <div className="Footer">
            <a onClick = {backtotop}>
                <div className="FooterButton"> 
                    <div className = "FooterText">Back to top</div>
                </div>
            </a>

            <div className="FooterList">
                <div className="FooterComponent">
                    <div className="FooterTitle">Get to Know us</div>
                        <ul className="FooterLi">
                        <li>About</li>
                        <li>Career</li>
                        <li>Press</li>
                        <li>Amazon Cares</li>
                        <li>Gift a smile</li>
                        </ul>
                </div>
                <div className="Footerempty"/>
                <div className="FooterComponent">
                    <div className="FooterTitle">Get to Know us</div>
                        <ul className="FooterLi">
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        </ul>
                </div>
                <div className="Footerempty"/>
                <div className="FooterComponent">
                    <div className="FooterTitle">Make Money with Us</div>
                        <ul className="FooterLi">
                        <li>Sell on fake Amazon</li>
                        <li>Sell under fake Amazon</li>
                        <li>Become an Affiliate</li>
                        <li>Fulfilment by Amazon</li>
                        <li>Amazon Pay</li>
                        </ul>
                </div>
                <div className="Footerempty"/>
                <div className="FooterComponent">
                    <div className="FooterTitle">Connect with us</div>
                        <ul className="FooterLi">
                        <li>COVID-19 and Amazon</li>
                        <li>Your Account</li>
                        <li>Returns Centre</li>
                        <li>100% Purchase Protection</li>
                        <li>Amazon App Download</li>
                        <li>Amazon Assistant Download</li>
                        <li>Help</li>
                        </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;