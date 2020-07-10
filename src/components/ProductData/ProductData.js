import React from 'react'
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import './ProductData.scss'

const ProductData = ({title, category, price, description, sizes, types }) => {
    return (
        <div className="product-data">
            <h1>{title}</h1>
            <span> {price} </span>
            <p>{description}</p>
        </div>
    )
}
export default ProductData