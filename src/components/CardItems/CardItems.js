import React from 'react'
import CardItem from '../CardItem/CardItem'
import {connect } from 'react-redux'

const CardItems = (props) => {
  const renderCardItems = props.card.map((item,index) => {
    return <CardItem data={item} key={index} />
  })
  const finalPrice = props.card.reduce((currentPrice, item) => {
    return item.product.price + currentPrice
  }, 0)
  return (
    <div>
      {renderCardItems}
      <div className="order-card">
        <div>
          <span>Final Price: </span>
          <span>{finalPrice}</span>
        </div>
        <button> order now </button>
      </div>
    </div>
  )
}
const mapStateToProps = ({card}) => {
  return {
    card
  }
}
export default connect(mapStateToProps)(CardItems)
