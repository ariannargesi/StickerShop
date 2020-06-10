import React from 'react'
import './ProductCard.css'
import {Link,NavLink} from 'react-router-dom'
export default props => {
    let { id } = props
    // write a good comment for line 7 and explaine the resone behinde this 
    id ++
    console.log(props)
    // href for links
    const productLink = `/product/${id}`
    return (
        <div className="product-card">
            <NavLink to={productLink} >
                {/* product image */}
                <img src={props.item.img1} alt=""/>
            </NavLink>
            <div className="product-card-detail">
                <NavLink to={productLink}>
                    <h2>{props.item.name}</h2>
                    <span style={{display: "block"}}>{props.item.price}$</span>
                    <span className="view-product">View and buy</span>
                </NavLink>
                    <button onClick={()=> console.log('click')}>add to card</button>
            </div>
        </div>
    )
}
