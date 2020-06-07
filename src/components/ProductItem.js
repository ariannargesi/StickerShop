import React from 'react'
import {Link,NavLink} from 'react-router-dom'
//TODO: replace all the <a> tags with Link from react-router dom
const ProductItem = (props) => {
    let { id } = props
    id ++
    const link = `/product/${id}`
    return (
        <div className="product-item">
            <NavLink to={link} >

                <img src="https://i.picsum.photos/id/316/200/250.jpg" alt=""/>
            </NavLink>

            <div className="product-item-detail">
                <NavLink to={link}>
                    <h2>{props.item.name}</h2>
                    <span style={{display: "block"}}>{props.item.price}$</span>
                    <span className="view-product">View and buy</span>
                </NavLink>
                    <button onClick={()=> console.log('click')}>add to card</button>
            </div>


        </div>
    )
}
export default ProductItem