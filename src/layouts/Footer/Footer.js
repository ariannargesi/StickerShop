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
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <div>
                    <img src={logo} className="logo" alt=""/>
                </div>
                <div>
                    <h5>Products</h5>
                    <ul>
                        <li><Link>Card Stickers</Link></li>
                        <li><Link>Micro Stickers</Link></li>
                        <li><Link>Hexagon Stickers</Link></li>
                    </ul>
                </div>
                <div>
                    <h5>About</h5>
                    <ul>
                        <li><Link>About Project</Link></li>
                        <li><Link>About Me</Link></li>
                    </ul>
                </div>
                <div>
                    <h5>Contact Info</h5>
                    <ul>
                        <li><a href="mailto:ariannargesi@gmail.com">ariannargesi@gmail.com</a></li>
                        <a href="">+00989368069820</a>
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
                <p>All Right Redive 1399 - arian nargesi</p>
                <div>

                </div>
            </div>
        </div>
    )
}
export default Footer