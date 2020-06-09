import React from 'react'
import Header from '../components/Header'
import Carousel from '../components/Carousel'
import Title from '../components/Title'
import ProductsGroup from '../components/Products'

export default () => (
    <div>
        <Header/>
        <Carousel/>
        <Title title="Newest Products"/>
        <ProductsGroup num="3"/>
    </div>
)