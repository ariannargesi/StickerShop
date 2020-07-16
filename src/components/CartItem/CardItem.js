import React from 'react'
import { connect } from 'react-redux'
import { removeFromCard, increaseProductQantity, decreaseProductQantity } from '../../redux/actions'
import trashIcon from '../../assets/icons/trash.svg'
import './CardItem.scss'

const CardItem = props => {
    const { product } = props.data

    const getQuantity = () => {
        const result = props.card.map(item => {
            if(item.product.title == product.title) {
                return item
            }
        })
        return result[0].quantity
    }
    const removeClickHandler = () => {
        props.removeFromCard(product)
    }
    const increaseQuantityHandler = () => {
        props.increaseProductQantity(product)
    }
    const decreaseQuantityHandler = () => {
        props.decreaseProductQantity(product)
    }


    return (
        <div className={"card-item"}>
            <div className="card-thumb"><img src={product.images[0]} alt=""/> </div>
            <div className="card-details">
                <button className="remove-item" onClick={removeClickHandler}>
                    <span className="material-icons">delete_outline</span>
                </button>
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
                        <button onClick={increaseQuantityHandler}>
                            <span className="material-icons">add</span>
                        </button>
                        <span style={{marginTop: "2px"}}>{props.data.quantity}</span>
                        <button onClick={decreaseQuantityHandler}>
                            <span className="material-icons">remove</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return state
}
export default connect(mapStateToProps , {increaseProductQantity, removeFromCard, decreaseProductQantity})(CardItem)