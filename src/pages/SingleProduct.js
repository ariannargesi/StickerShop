import React,{useState, useEffect} from 'react'
import axios from 'axios'
import ProductImages from "../components/ProductImages/ProductImage"
import ProductData from '../components/ProductData/ProductData'
import Header from '../layouts/Header/Header'
const SingleProduct = (props) => {
    const [product, setProduct] = useState({})

    useEffect(()=>{
        const baseUrl = "http://localhost:3000/api"
        const pathname = props.location.pathname
        const endpoint = baseUrl + pathname
        axios.get(endpoint).then( ({ data }) => {
            if(data.status == 200) {
                setProduct(()=>{
                    return data.product
                })
            }

        })
    },[])
    return (
        Object.keys(product).length === 0? "Loading" :
    <div>
        <Header/>
        <div className="container">
            <ProductImages
                images={product.images} />
            {
                console.log("single product state")
            }
            {
                console.log(product)
            }
            <ProductData title={product.title}
                         category={product.category}
                         price={product.price}
                         description={product.description}
                         types={product.types}
                         sizes={product.sizes}
            />
        </div>
    </div>
    )
}
export default SingleProduct