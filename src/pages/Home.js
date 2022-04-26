import React from 'react'
import Header from '../layouts/Header/Header'
import Footer from '../layouts/Footer/Footer'
import Title from '../components/Title/Title'

import Slider from '../layouts/Slider'
import Benefits from '../layouts/Benefits'

import ProductsRow from '../components/ProductsRow/ProductsRow'

export default () => (
    <div>
        <Header/>
        <Title content={"New products"} size={"large"}/>
        <div>
          <ProductsRow num="8" order="1" category="Movies"/>
        </div>
        <Title
            content={"Best selling products"}
            size={"large"}
        />
        <Slider/>
        <Title
            content={"Customer service"}
            size={"large"}
        />
        <Benefits/>
        
        <Footer/>
    </div>
)

