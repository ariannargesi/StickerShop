import React,{useState, useEffect} from 'react'
import axios from 'axios'
import ProductImages from "../components/ProductImages/ProductImage"
import ProductData from '../components/ProductData/ProductData'
import Header from '../layouts/Header/Header'
const SingleProduct = (props) => {
    const [data, setData] = useState({})
    useEffect(()=>{
        const baseUrl = "http://localhost:3000/api"
        const pathname = props.location.pathname
        const endpoint = baseUrl + pathname
        axios.get(endpoint).then( ({ data }) => {
            setData(()=>{
                return data
            })
        })
    })
    return (
    <div>
        <Header/>
        <div className="container">
            <ProductImages/>
            <ProductData data={data} />
        </div>
    </div>
    )
}
export default SingleProduct