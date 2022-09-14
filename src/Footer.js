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
                        <ul>
                        <li>About</li>
                        <li>Career</li>
                        <li>Press</li>
                        <li>Amazon Cares</li>
                        <li>Gift a smile</li>
                        </ul>
                </div>
                <div className="FooterComponent">
                    <div className="FooterTitle">Get to Know us</div>
                        <ul>
                        <li>About</li>
                        <li>Career</li>
                        <li>Press</li>
                        <li>Amazon Cares</li>
                        <li>Gift a smile</li>
                        </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;