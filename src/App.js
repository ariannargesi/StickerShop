import React from 'react'
import Header from './components/Header'
import Carousel from './components/Carousel'
import Title from './components/Title'
import {impureFinalPropsSelectorFactory} from "react-redux/lib/connect/selectorFactory";
import ProductItem from "./components/ProductItem";
export default () => (
    <div>
       <Header/>
        <Carousel/>
        <Title title="Newest Products"/>
        <div className="product-items-container">
            <ProductItem title="Peaky Blinders"/>
            <ProductItem title="Peaky Blinders"/>
            <ProductItem title="Peaky Blinders"/>
            <ProductItem title="Peaky Blinders"/>
            <ProductItem title="Peaky Blinders"/>
            <ProductItem title="Peaky Blinders"/>
            <ProductItem title="Peaky Blinders"/>
            <ProductItem title="Peaky Blinders"/>
        </div>

    </div>
)