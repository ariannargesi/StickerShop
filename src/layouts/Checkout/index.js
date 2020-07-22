import React from 'react'
import WizardTab from '../../components/WizardTab'
import ShippingInfo from "./ShippingInfo"
import CartReview from "./CardReview"
import './Checkout.scss'


const Checkout = () => {
    return (
        <div>
            <WizardTab>
                <ShippingInfo/>
                <CartReview/>
            </WizardTab>
        </div>
    )
}

export default Checkout