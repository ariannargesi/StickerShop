import React from 'react'
import { addToCard, showToast } from '../../redux/actions'
import { connect } from 'react-redux'
import Dropdown from '../Dropdown'
import Button from '../Button'
import './ProductData.scss'

const ProductData = ({title, category, price, description, sizes, types, images, addToCard, showToast }) => {
    function getDescription () {
        return { __html: description }
    }
    return (
        <div className="product-data">
            <h1>{title}</h1>
            <i className="product-price"> $ {price} </i>
            <br/><br/>
            <hr/>
<br/>


            <div className="dropdown-wrapper">
                <div style={{width: "400px"}}>
                    <Dropdown items={sizes} current={sizes[0]} title="Choose Size" />
                </div>
                <div style={{width: "400px"}}>
                    <Dropdown items={types} current={types[0]} title="Choose Type" />
                </div>
            </div>


            <br/>
            <div style={{width: "400px"}} >
            <Button onClick={() => { addToCard({title,category, price, description,sizes, types, images}) ;showToast("Product added to your card") } } size="medium" type={"success"}>Add To Card</Button>
            </div>
            <div dangerouslySetInnerHTML={getDescription()}/>
        </div>
    )
}
export default connect(null, {addToCard, showToast})(ProductData)
