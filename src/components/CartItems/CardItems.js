import React from 'react'
import CardItem from '../CartItem/CardItem'
import { connect } from 'react-redux'
import './CardItems.scss'

import sad from '../../assets/icons/sad.svg'

const CardItems = (props) => {

  const CartIsEmpty =
  <div className={"empty-card"}>
      <h3>Your Cart Is Empty</h3>
      <div>
        <img src={sad} alt=""/>
      </div>
  </div>



  const renderCardItems =  props.card.length ? props.card.map((item,index) => {
    return <CardItem data={item} key={index} />
  }) : CartIsEmpty

  return (
    <div style={{height: props.height}} className="card-items">
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
