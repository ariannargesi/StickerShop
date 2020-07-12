import React from 'react'
import WizardTab from '../../components/WizardTab'
import ShippingInfo from "./ShippingInfo"
import CardItems from "../../components/CardItems/CardItems"
import './Checkout.scss'


const Checkout = () => {
    return (
        <div>
            <WizardTab>
                <CardItems/>
                <ShippingInfo/>
            </WizardTab>
        </div>
    )
}

export default Checkout