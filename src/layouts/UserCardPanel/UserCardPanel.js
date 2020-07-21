import React from 'react'
import { Link } from "react-router-dom"
import './UserCardPanel.scss'
import Panel from '../../components/Panel/Panel'
import CardItems from '../../components/CartItems/CardItems'
import useCartItemCount from "../../hooks/useCartItemsCount"
import useFinalPrice from "../../hooks/useFinalPrice"
import Button from "../../components/Button";
const UserCardPanel = () => {
  return (
    <Panel title="Your Basket"
           badge={ useCartItemCount() }
           icon="cart-outline"
           iconSize = "large"
    >
       <CardItems height={"80%"} />
       <Footer/>
    </Panel>
  )
}


export const Footer = (props) => {
    return (
        <div className={"user-card-panel-footer"}>
            <div className="final-price">
                <b>Final Price</b>
                <span> $ {useFinalPrice()}</span>
            </div>
            <div style={{padding: "1rem"}}>
                <Button type={"success"} size={"medium"} > <Link style={{display: "block"}} to={"/checkout"}>Order Now</Link> </Button>
            </div>
        </div>
    )
}

export default UserCardPanel
