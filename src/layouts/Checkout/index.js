import React from 'react'
import WizardTab from '../../components/WizardTab'
import ShippingInfo from "./ShippingInfo";
import './Checkout.scss'


const Checkout = () => {
    return (
        <div>
            <WizardTab>
                <ShippingInfo/>
                <div></div>
            </WizardTab>
        </div>
    )
}

export default Checkout