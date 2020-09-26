import React from 'react'
import WizardTab from '../../components/WizardTab'
import ShippingInfo from "./ShippingInfo"
import CartReview from "./CardReview"
import './Checkout.scss'

import Header from '../../layouts/Header/Header'

const Checkout = () => {
    return (
        <div>
            <Header/> 
            <WizardTab>
                <ShippingInfo/>
                <CartReview/>
            </WizardTab>
        </div>
    )
}

export default Checkout