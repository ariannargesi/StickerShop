import React from 'react'
import './ProductCard.scss'
import {NavLink} from 'react-router-dom'
import { addToCard, showToast } from '../../redux/actions'
import { connect } from 'react-redux'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';const ProductCard =  props => {
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
                            View
                        </div>
                    </NavLink>
                    <button className="add-to-card-small" onClick={()=> { props.addToCard(product); props.showToast("Product added to your cart")  }}>
                    <AddShoppingCartIcon cursor="pointer"/>
                    </button>
                </div>
            </div>
        </div>
    )
}



export default connect(null, {addToCard, showToast})(ProductCard)
