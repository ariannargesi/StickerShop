import React from 'react'
import Header from './Header'
import Carousel from './Carousel'
import Title from './Title'
import ProductsGroup from './Products'
import ProductItem from "./ProductItem";
import ProductGroup from './Products'
export default () => (
    <div>
        <Header/>
        <Carousel/>
        <Title title="Newest Products"/>
        <ProductsGroup num="3"/>
    </div>
)