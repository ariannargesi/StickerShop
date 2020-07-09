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
                <p>Free Shipping all around the country</p>
                <span>Free Shipping</span>
            </div>
            <div className="benefits-item">
                <img src={cashIcon} alt=""/>
                <p>Easy and secure payment with bitcoin</p>
                <span>secure payment</span>
            </div>
            <di className="benefits-item">
                <img src={supportIocn} alt=""/>
                <p>Online support 24 Hores day | 7 days week</p>
                <span>online support</span>
            </di>
        </div>
    )
}
export default Benefits