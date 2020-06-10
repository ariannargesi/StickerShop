import React from 'react'
import './ProductData.css'
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import Dropdown from "../Dropdown/Dropdown"
const ProductData = (props) => {
    const data = props.data
    return (
        <div className="product-data">
            <div style={{display:"flex"}}>
                <span className="badge">phicical product</span>
                <Breadcrumbs>
                    <a href="/">home</a>
                    <a href={`/${data.category}`}>{data.category}</a>
                    <a href={`/${data.category}/${data.name}`}>{data.name}</a>
                </Breadcrumbs>
            </div>

            <h1>{data.name}</h1>
            <span className="price">{data.price}</span>
            <div>
                <div style={{width:"45%",display:"inline-block"}}>
                    <Dropdown current={data.type} title="Select type" items= {[]} />
                </div>
                <div style={{width:"45%",display:"inline-block"}}>
                    <Dropdown current={data.price}  title ="Select size" items= {[]} />
                </div>

            </div>
            <div style={{display: "flex",position:"relative",}}>
                <button className="add-to-card">add t  card</button>
                <div className="share-to">
                    {/*<button>telegram</button>*/}
                    {/*<button>watsApp</button>*/}
                    {/*<button>facebook</button>*/}
                </div>
            </div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
        </div>
    )
}
export default ProductData