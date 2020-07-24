import React from 'react'
import {Link} from "react-router-dom";
import './Footer.scss'
// icons
import linkedin from '../../assets/icons/linkedin.svg'
import twitter from '../../assets/icons/twitter.svg'
import github from '../../assets/icons/github.svg'
import telegram from '../../assets/icons/telegram.svg'
// logo
import logo from '../../assets/logo.svg'
import flerbo from '../../assets/flerbo.png'
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-item">
                    <h5>Inspired From flerbo.ir</h5>
                    <div className="logo-wrapper" style={{display: "flex"}}>
                        <a href="https://flerbo.ir">
                            <img src={flerbo}  alt=""/>
                        </a>
                    </div>
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
                        <li><a href="">ariannargeis.ir</a></li>
                        <li><a href="">+00989368069820</a></li>
                    </ul>
                    <div className="contact-info">
                        <img src={linkedin} alt=""/>
                        <img src={twitter} alt=""/>
                        <img src={github} alt=""/>
                        <img src={telegram} alt=""/>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Inspried by flerbo.ir</p>
                <div>

                </div>
            </div>
        </div>
    )
}
export default Footer