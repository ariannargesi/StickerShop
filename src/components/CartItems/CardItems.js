import React from 'react'
import CardItem from '../CartItem/CardItem'
import { connect } from 'react-redux'
import './CardItems.scss'
const CardItems = (props) => {

  const CartIsEmpty =
  <div>
      <h4>Your Card Is Empty</h4>
  </div>



  const renderCardItems =  props.card.length ? props.card.map((item,index) => {
    return <CardItem data={item} key={index} />
  }) : CartIsEmpty

  return (
    <div className="card-items">
        { renderCardItems }
    </div>
  )
}


const mapStateToProps = ({ card }) => {
  return {
    card
  }
}
export default connect(mapStateToProps)(CardItems)
