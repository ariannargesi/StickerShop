import React from 'react'
import { connect } from 'react-redux'
import { removeFromCard, increaseProductQantity } from '../../redux/actions'
import trashIcon from '../../assets/icons/trash.svg'
import './CardItem.css'

const CardItem = props => {
  const { product } = props.data
  const {quantity } = props.data
  console.log(props)
  return (
    <div className="card-item">
      <div className="card-image" >
        <img src={product.images[0]} />
      </div>
      <div className="card-info">
        <div className="title-wrapper">
          <h4> {product.title} </h4>
          <img src={trashIcon} onClick={() => props.removeFromCard(product) }/>
        </div>
        <div className="size-type-wrapper">
          <span> type: fix bux </span>
          <span> size: fix bug </span>
        </div>
        <div className="product-price">
          <span>{product.price}</span>
          <div className="product-counter">
          <button onClick={()=> props.increaseProductQantity(product)}>+</button>
          <span>{quantity}</span>
          <button>-</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect(null, {increaseProductQantity, removeFromCard})(CardItem)
