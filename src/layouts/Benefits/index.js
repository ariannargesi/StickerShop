import React from 'react'
import './Benefits.scss'

//icons
import shippingIcon from '../../assets/freeShipping.png'
import cashIcon from '../../assets/cash.png'
import supportIocn from '../../assets/support.png'

const Benefits = () => {
    return (
        <div className={"benefits"}>
            <div className="benefits-item">
                <img src={shippingIcon} alt=""/>
                <p>Free shipping in this country</p>
                <span>Free Shipping</span>
            </div>
            <div className="benefits-item">
                <img src={cashIcon} alt=""/>
                <p>Easy and secure payment using bitcoin</p>
                <span>secure payment</span>
            </div>
            <div className="benefits-item">
                <img src={supportIocn} alt=""/>
                <p>Online support 24 hours day | 7 days week</p>
                <span>online support</span>
            </div>
        </div>
    )
}
export default Benefits