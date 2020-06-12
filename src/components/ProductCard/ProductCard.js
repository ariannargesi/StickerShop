import React from 'react'
import './ProductCard.css'
import {Link,NavLink} from 'react-router-dom'
export default props => {
    let { id } = props
    const product = props.item
    // write a good comment for line 7 and explaine the resone behinde this 
    id ++
    // href for links
    const productLink = `/product/${id}`
    return (
        <div className="product-card">
            <NavLink to={productLink} >
                {/* product image */}
                <img src={product.images[0]} alt=""/>
            </NavLink>
            <div className="product-card-detail">
                <NavLink to={productLink}>
                    <h2>{product.title}</h2>
                    <span style={{display: "block"}}>{product.price}$</span>
                </NavLink>
                <div>
                    <NavLink to={productLink}>
                        <div className="view-product">
                            view product
                        </div>
                    </NavLink>
                    <button className="add-to-card-small" onClick={()=> console.log('click')}>
                            
                    </button>
                </div>
            </div>
        </div>
    )
}
