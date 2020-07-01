import React from 'react'
import Header from '../layouts/Header/Header'
import Footer from '../layouts/Footer/Footer'
import Carousel from '../components/Carousel/Carousel'
import Title from '../components/Title/Title'
import Pagination from '../layouts/Pagination/Pagination'
import ProductsRow from '../components/ProductsRow/ProductsRow'
import InstagramGride from '../layouts/InstagramGride/InstagramGride'

export default () => (
    <div>
        <Header/>
        {/*<Carousel/>*/}
        <Title title="Newest Products"/>
        <div style={{height: "750px"}}>
          <ProductsRow num="8"/>
        </div>
        <InstagramGride/>
        <Footer/>
    </div>
)
