import React from 'react'
import { connect } from 'react-redux'
import { removeFromCard, increaseProductQantity, decreaseProductQantity } from '../../redux/actions'
import trashIcon from '../../assets/icons/trash.svg'
import './CardItem.scss'

const CardItem = props => {
  const { product } = props.data
  const { quantity } = props.data
  React.useEffect(() => {

  })
  return (
      <div className={"card-item"}>
        <div className="card-thumb"><img src={product.images[0]} alt=""/> </div>
        <div className="card-details">
          <h5> {product.title} </h5>
          <div className="size-and-type">
            <span>type: {product.types[0]}</span>
            <span>size: {product.sizes[0]} </span>
          </div>
          <div className="card-item-footer">
            <div>
              <span className="price"> $ { product.price } </span>
            </div>
            <div style={{ border: "1px solid #eee", borderRadius: "5px" }}>
              <button><span className="material-icons">add</span></button>
              <span style={{marginTop: "2px"}}> { 5 } </span>
              <button><span className="material-icons">remove</span></button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default connect(null, {increaseProductQantity, removeFromCard, decreaseProductQantity})(CardItem)
