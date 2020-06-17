import React,{useState,useEffect} from 'react'
import './ProductsRow.css'
import axios from 'axios'
import ProductCard from '../ProductCard/ProductCard';

const ProductsRow = (props) => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        // fetching products using api and updating the state
        axios.get(`https://flerbo.herokuapp.com/api/products-list?from=1&to=${props.num}`).then(({data})=> {
            if(data.status == 200)
                setProducts(data.products)
        }).catch(err=>{
            console.log(err)
        })
    },[])
    if(products.length === 0)
        return "... Loading"
    return (
        <div style={{textAlign:"center",paddingBottom:"20px"}} className="product-row">
            {
                products.map((item,index) => {
                    return  <ProductCard key={index} item={item} id={index} />
                })
            }
        </div>

    )
}


export default ProductsRow