import React from 'react'
import CardItem from '../CardItem/CardItem'
import { connect } from 'react-redux'
import'./CardItems.sass'
const CardItems = (props) => {
  const renderCardItems = props.card.map((item,index) => {
    return <CardItem data={item} key={index} />
  })

  return (
    <div>
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
