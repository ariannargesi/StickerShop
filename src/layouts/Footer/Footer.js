import React from 'react'
import {Link} from "react-router-dom";
import './Footer.scss'
// icons
import linkedin from '../../assets/icons/linkedin.svg'
import twitter from '../../assets/icons/twitter.svg'
import github from '../../assets/icons/github.svg'
import telegram from '../../assets/icons/telegram.svg'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-item">
                    
                    <a href="https://flerbo.ir">
                    <h5>Inspired From flerbo.ir</h5>       
                        </a>
                </div>
                <div className="footer-item">
                    <h5>Products</h5>
                    <ul>
                        <li><Link to={"/Card"}>Card Stickers</Link></li>
                        <li><Link to={"/Micro"}>Micro Stickers</Link></li>
                        <li><Link to={"/Hexagon"}>Hexagon Stickers</Link></li>
                    </ul>
                </div>
                <div className="footer-item">
                    <h5>Contact Info</h5>
                    <ul>
                        <li><a href="mailto:ariannargesi@gmail.com">ariannargesi@gmail.com</a></li>
                        <li><a href="tel:00989368069820">+00989368069820</a></li>
                    </ul>
                    <div className="contact-info">
                        <a href="https://www.linkedin.com/in/arian-nargesi-b67a3b177/">
                            <img src={linkedin} alt=""/>
                        </a>
                        <a href="https://twitter.com/ariannargesi">
                            <img src={twitter} alt=""/>
                        </a>
                        <a href="https://github.com/ariannargesi">
                            <img src={github} alt=""/>
                        </a>
                        <a href="https://telegram.me/ariannargesi">
                            <img src={telegram} alt=""/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer