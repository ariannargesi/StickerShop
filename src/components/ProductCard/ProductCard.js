import React from 'react'
import './ProductCard.scss'
import {NavLink} from 'react-router-dom'
import { addToCard, showToast } from '../../redux/actions'
import { connect } from 'react-redux'
const ProductCard =  props => {
    const product = props.item
    const url = product.url
    const productLink = `/product/${url}`
    return (
        <div className="product-card">
            <NavLink to={productLink} >
                {/* product image */}
                <img src={product.images[0]} alt=""/>
            </NavLink>
            <div className="product-card-detail">
                <NavLink to={productLink}>
                    <h2>{product.title}</h2>
                    <span className="product-price" style={{display: "block"}}>{product.price} $</span>
                </NavLink>
                <div className="product-details-bottom">
                    <NavLink to={productLink}>
                        <div className="view-product">
                            view product
                        </div>
                    </NavLink>
                    <button className="add-to-card-small" onClick={()=> { props.addToCard(product); props.showToast("Hello")  }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="feather feather-shopping-bag">
                            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <path d="M16 10a4 4 0 0 1-8 0"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}



export default connect(null, {addToCard, showToast})(ProductCard)
