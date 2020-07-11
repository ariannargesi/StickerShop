import React from 'react'

import Dropdown from '../Dropdown'
import Button from '../Button'
import './ProductData.scss'

const ProductData = ({title, category, price, description, sizes, types }) => {
    function getDescription () {
        return { __html: description }
    }
    return (
        <div className="product-data">
            <h1>{title}</h1>
            <span className="product-price">$ {price}  </span>
            <div style={{display: "flex", flex: "1 1 auto"}}>
                <Dropdown items={sizes} current={sizes[0]} title="select size" />
                <Dropdown items={types} current={types[0]} title="select type" />
            </div><br/>
            <div dangerouslySetInnerHTML={getDescription()}/>
            <Button size="medium" type={"success"}>Add To Card</Button>
        </div>
    )
}
export default ProductData