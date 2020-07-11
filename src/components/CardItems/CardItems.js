import React from 'react'
import CardItem from '../CardItem/CardItem'
import { connect } from 'react-redux'
import './CardItems.scss'
const CardItems = (props) => {
  const renderCardItems = props.card.map((item,index) => {
    return <CardItem data={item} key={index} />
  })

  return (
    <div className="card-items">
      {renderCardItems}
    </div>
  )
}


const mapStateToProps = ({ card }) => {
  return {
    card
  }
}
export default connect(mapStateToProps)(CardItems)
