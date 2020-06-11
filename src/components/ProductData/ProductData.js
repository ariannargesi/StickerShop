import React from 'react'
import './ProductData.css'
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import Dropdown from "../Dropdown/Dropdown"
const ProductData = (props) => {
    const { title, category, price, description, sizes, types } = props
    console.log("product data props")
    console.log(props)
    return (
        <div className="product-data">
            <div style={{display:"flex"}}>
                <span className="badge">physical product</span>
                <Breadcrumbs>
                    <a href="/">home</a>
                    <a href={`/${category}`}>{category}</a>
                    <a href={`/${category}/${title}`}>{title}</a>
                </Breadcrumbs>
            </div>

            <h1>{title}</h1>
            <span className="price">{price}</span>
            <div>
                <div style={{width:"45%",display:"inline-block"}}>
                    <Dropdown current={types[0]} title="Select type" items= {types} />
                </div>
                <div style={{width:"45%",display:"inline-block"}}>
                    <Dropdown current={sizes}  title ="Select size" items= {sizes} />
                </div>

            </div>
            <div style={{display: "flex",position:"relative",}}>
                <button className="add-to-card">add to card</button>
                <div className="share-to">
                    {/*<button>telegram</button>*/}
                    {/*<button>watsApp</button>*/}
                    {/*<button>facebook</button>*/}
                </div>
            </div>
            <p> {description} </p>
        </div>
    )
}
export default ProductData