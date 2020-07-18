import React from 'react'
import { addToCard, showToast } from '../../redux/actions'
import { connect } from 'react-redux'
import Dropdown from '../Dropdown'
import Button from '../Button'
import './ProductData.scss'

const ProductData = ({title, category, price, description, sizes, types, addToCard, showToast }) => {
    function getDescription () {
        return { __html: description }
    }
    function clickHandler() {
        addToCard({
            title,
            category,
            price,
            description,
            sizes,
            types,
        })
    }
    return (
        <div className="product-data">
            <h1>{title}</h1>
            <i className="product-price"> $ {price}  </i>
            <div style={{display: "flex", flex: "1 1 auto"}}>
                <Dropdown items={sizes} current={sizes[0]} title="select size" />
                <Dropdown items={types} current={types[0]} title="select type" />
            </div><br/>
            <div dangerouslySetInnerHTML={getDescription()}/>
            <Button onClick={() => { addToCard({title,category, price, description,sizes, types}) ;showToast("Product added to your card") } } size="medium" type={"success"}>Add To Card</Button>
        </div>
    )
}
export default connect(null, {addToCard, showToast})(ProductData)
