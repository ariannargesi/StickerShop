import React,{useState,useEffect} from 'react'
import './ProductsRow.scss'
import './SlickSlider.scss'
import axios from 'axios'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import ProductCard from '../ProductCard/ProductCard'
import Loading from "../Loading/Loading"
import Button from "../Button";

const ProductsRow = (props) => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        // fetching products using api and updating the state
        let endpoint
        if(props.category)
            endpoint = `https://flerbo.herokuapp.com/api/${props.category}/?page=1&limit=${props.num}`
        else
            endpoint = `https://flerbo.herokuapp.com/api/products-list?order=${props.order}&from=1&to=${props.num}`
        axios.get(endpoint).then(({data})=> {
            if(data.status == 200)
                setProducts(data.products)
        }).catch(err=>{
            console.log(err)
        })
    },[])

    const NextArrow = (props) => (
        <button className={props.className}  style={{width: "50px",height: "50px", background: "red"}} onClick={props.onClick} >Next</button>
    )
    const PrevArrow = (props) => (
            <button className={props.className} style={{width: "50px", height: "50px", background: "red"}} onClick={props.onClick}>Prev</button>
        )
    const settings = {
        dots: false,
        swipe: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    if(products.length === 0)
        return <Loading height={"300px"}/>

    return (
        <>
            {
                props.carousel ?
                    <div style={{width: "1200px",textAlign: "center", margin: "0 auto"}}>
                    <Slider {...settings} >

                        {
                            products.map((item,index) => {
                                return <ProductCard item={item} index={index} />
                            })
                        }
                    </Slider>
                    </div>
                    :
                    <div style={{justifyContent: "center", margin: "0 auto", textAlign: "center"}}>
                    {
                        products.map((item,index) => {
                            return <ProductCard item={item} index={index} />
                        })
                    }
                    </div>
            }
            </>
    )
}


export default ProductsRow

