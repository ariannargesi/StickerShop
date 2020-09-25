import React,{useState, useEffect} from 'react'
import axios from 'axios'
import ProductImages from "../components/ProductImages/ProductImage"
import ProductData from '../components/ProductData/ProductData'
import Header from '../layouts/Header/Header'
import ProductsRow from "../components/ProductsRow/ProductsRow"
import Spinner from '../components/Spinner/Spinner'
import Breadcrumbs from "../components/Breadcrumbs"
import Title from "../components/Title/Title"
import Instagram from "../layouts/InstagramImages";
import Footer from "../layouts/Footer/Footer";
import Loading from "../components/Loading/Loading"

const SingleProduct = (props) => {
    const [product, setProduct] = useState({})
    
    useEffect(()=>{
        window.scroll(0, 0)
        const baseUrl = "https://flerbo.herokuapp.com/api"
        const pathname = props.location.pathname
        const endpoint = baseUrl + pathname
        axios.get(endpoint).then( ({ data }) => {
            if(data.status == 200) {
                setProduct(()=>{
                    return data.product
                })
            }

        })
    },[props.location.pathname])
    
    return (
        Object.keys(product).length === 0? <Loading height="100vh"/> :
    <div>
        <Header/>
        <div className="single-product-wrapper" style={{width: "1200px", justifyContent:"center", margin: "0 auto"}}>
            <Breadcrumbs>
                <a href="/">Home</a>
                <a href={`/${product.category}`}>{product.category}</a>
                <a href={`/product/${product.url}`}>{product.title}</a>
            </Breadcrumbs>
        <div className="container"  style={{display: "flex", justifyContent: "space-around"}}>

            <ProductImages
                images={product.images} />
            {
            }
            {
            }
            <ProductData title={product.title}
                         category={product.category}
                         price={product.price}
                         description={product.description}
                         images={product.images}
                         types={product.types}
                         sizes={product.sizes}
            />

        </div>
            <br/>
            <hr/>
            <Title content={"Related Prodcuts"} size={"large"} styled={true}/>
            <ProductsRow num={8} category={product.category} carousel />

        </div>
        <Instagram/>
        <Footer/>
    </div>
    )
}
export default SingleProduct
