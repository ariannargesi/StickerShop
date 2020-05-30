import React from 'react'
const ProductItem = (props) => {
    return (
        <div className="product-item">
            <a href="#">
                <img src="https://i.picsum.photos/id/316/200/250.jpg" alt=""/>
            </a>

            <div className="product-item-detail">
                <a href="#">
                    <h2>{props.title}</h2>
                    <span style={{display: "block"}}>3$</span>
                    <span className="view-product">View and buy</span>
                </a>
                    <button onClick={()=> console.log('click')}>add to card</button>
            </div>


        </div>
    )
}
export default ProductItem