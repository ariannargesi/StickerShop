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
                <ShippingInfo/>
                <CartReview/>
                <PaymentWays/>
            </WizardTab>
        </div>
    )
}

export default Checkout