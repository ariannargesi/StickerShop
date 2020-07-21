import React from 'react'
import './ShippingInfo.scss'
import Input from "../../../components/Input/Input"
import Dropdown from '../../../components/Dropdown'
import { states as statesList } from '../../../staticDatas'
const ShippingInfo = () => {
    return (
        <div className="shipping-info">
            <div className="order-info">
                <div className="order-info-column">
                    <div style={{width: "25%"}}>
                        <Input name={"Name"}/>
                    </div>
                    <div style={{width: "25%"}}>
                        <Input name={"Name"}/>
                    </div>
                    <div style={{width: "45%"}}>
                        <Input name={"Name"}/>
                    </div>
                </div>
                <div className="order-info-column">
                    <div style={{width: "25%"}}>
                        <Input type={"text"} name={"Zip Code"}/>
                    </div>
                    <div style={{width: "25%"}}>
                        <Input type={"text"} name={"Zip Code"}/>
                    </div>
                    <div style={{width: "43%", marginRight: "8px"}}>
                        <Dropdown items={statesList}  title={"State"} current={statesList[0]} />
                    </div>
                </div>
                <div className="order-info-column"></div>
                <div className="order-info-column"></div>
            </div>
            <div className="cart-info"></div>
        </div>
    )
}
export default ShippingInfo