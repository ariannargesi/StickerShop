import React from 'react'
import WizardTab from '../../components/WizardTab'
import ShippingInfo from "./ShippingInfo"
import CartReview from "./CardReview"
import PaymentWays from "./PaymentWays"
import './Checkout.scss'


const Checkout = () => {
    return (
        <div>
            <WizardTab>
                <CartReview/>
                <ShippingInfo/>
                <PaymentWays/>
            </WizardTab>
        </div>
    )
}

export default Checkout