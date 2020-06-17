import React from 'react'
import ProductCard from "../ProductCard/ProductCard";

const CategoryItem = (props) => {
    return (
        <div>
            {
               props.data && props.data.map((item, index) => {
                    return <ProductCard item={item} key={index}/>
                })
            }
        </div>
    )
}

export default CategoryItem