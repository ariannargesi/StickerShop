import React,{useState,useEffect} from 'react'
import './ProductsRow.sass'
import axios from 'axios'
import SwiperCore, { Controller } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from '../ProductCard/ProductCard';

const ProductsRow = (props) => {
    const [products, setProducts] = useState([])
        const [controlledSwiper, setControlledSwiper] = useState(null);
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
                props.carousel ?
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={4}
                        controller={{ control: controlledSwiper }}
                    >
                        {
                            products.map((item, index) => {
                                return (
                                    <SwiperSlide>
                                        <ProductCard key={index} item={item} id={index}/>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                    :
                products.map((item,index) => {
                    return  <ProductCard key={index} item={item} id={index} />
                })
            }
        </div>

    )
}


export default ProductsRow