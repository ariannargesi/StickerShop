import React from 'react'
import Input from "../../../components/Input/Input"
import Dropdown from '../../../components/Dropdown'
import CardItems from "../../../components/CartItems/CardItems";
import './ShippingInfo.scss'

import {states} from '../../../staticDatas'

const ShippingInfo = () => {
    return (
        <div className="order-info">
            <div className="cart-info">
                <CardItems/>
            </div>
            <div className="shipping-info">
                <div>
                    <div style={{flex: "1 4 auto"}}>
                        <Input type={"text"} name={"First Name"}/>
                    </div>
                    <div style={{flex: "1 4 auto"}}>
                        <Input type={"text"} name={"Last Name"}/>
                    </div>
                    <div style={{flex: "1 1 auto"}}>
                        <Input type={"email"} name={"Email"}/>
                    </div>
                </div>
                <div>
                    <div style={{flex: "1 1 auto", width: "280px"}}>
                        <Dropdown items={states} current={states[0]} title={"State"} />
                    </div>
                    <div style={{flex: "1 1 auto"}}>
                        <Input type={"text"} name={"Zip Code"}/>
                    </div>
                    <div style={{flex: "1 1 auto"}}>
                        <Input type={"text"} name={"Phone Number"}/>
                    </div>
                </div>
                <div>
                    <Input type={"text"} name={"description (optional)"} placeholder="Description about shipping that maybe we need to know "/>
                </div>
                <div>
                    <Input type={"text"} name={"Full Address"} />
                </div>
            </div>
        </div>
    )
}
export default ShippingInfo