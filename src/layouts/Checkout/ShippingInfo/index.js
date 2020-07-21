import React from 'react'
import './ShippingInfo.scss'
import Input from "../../../components/Input/Input"
import Dropdown from '../../../components/Dropdown'
import CartItems from '../../../components/CartItems/CardItems'
import { states as statesList } from '../../../staticDatas'
import useFinalPrice from "../../../hooks/useFinalPrice";
const ShippingInfo = () => {
    return (
        <div className="shipping-info">
            <div className="order-info">
                <div className="order-info-column">
                    <div style={{width: "24%"}}>
                        <Input name={"First Name"} />
                    </div>
                    <div style={{width: "24%"}}>
                        <Input name={"Last Name"}/>
                    </div>
                    <div style={{width: "44%"}}>
                        <Input name={"Email Address"}/>
                    </div>
                </div>
                <div className="order-info-column">
                    <div style={{width: "24%"}}>
                        <Input type={"text"} name={"Zip Code"}/>
                    </div>
                    <div style={{width: "24%"}}>
                        <Input type={"text"} name={"Phone Number"}/>
                    </div>
                    <div style={{width: "44%", marginRight: "0px"}}>
                        <Dropdown items={statesList}  title={"Location"} current={statesList[0]} />
                    </div>
                </div>
                <div className="order-info-column">
                    <div className={"full-width"}>
                        <Input type={"text"} name={"Full Address"} />
                    </div>
                </div>
                <div className="order-info-column">
                    <div className={"full-width"}>
                        <Input type={"text"} name={"Descriptions (Optional)"} placeholder={"In Case of Not being at Home, Delivery the Order to My Neighbor Penny"} />
                    </div>
                </div>
            </div>
            <div className="cart-info">
                <CartItems height={"100%"}/>
                <div className="final-price">
                    <b>Total Price</b>
                    <span> $ {useFinalPrice()}</span>
                </div>
            </div>
        </div>
    )
}
export default ShippingInfo