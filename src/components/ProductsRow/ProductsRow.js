import React,{useState,useEffect} from 'react'
import './ProductsRaw.css'
import axios from 'axios'
import ProductItem from '../ProductCard/ProductCard';

const ProductsRow = (props) => {
    const [products, setProducts] = useState([])
    console.log(products)
    useEffect(()=>{
        // fetching products using api and updating the state
        axios.get(`http://localhost:3000/api/products-list?from=1&to=${props.num}`).then(({data})=> {
            if(data.status == 200)
                setProducts(data.products)
        })
    },[])
    if(products.length === 0)
        return "... Loading"
    return (
        <div style={{textAlign:"center"}}>
            {
                products.map((item,index) => {
                    return  <ProductItem key={index} item={item} id={index} />
                })
            }
        </div>

    )
}


export default ProductsRow