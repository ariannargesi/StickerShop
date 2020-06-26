import React from 'react'
import Header from '../layouts/Header/Header'
import Footer from '../layouts/Footer/Footer'
import Carousel from '../components/Carousel/Carousel'
import Title from '../components/Title/Title'
import Pagination from '../layouts/Pagination/Pagination'
import ProductsRow from '../components/ProductsRow/ProductsRow'

export default () => (
    <div>
        <Header/>
        {/*<Carousel/>*/}
        <Title title="Newest Products"/>
        <div style={{height: "750px"}}>
          <ProductsRow num="8"/>
        </div>
        <Title title="About This Application" />
        <div style={{width: "1200px", textAlign: "left", margin: "0 auto"}} >
          <p>I was javascript developer since 2018. I worked in a backend position but know feel that i like to take my careere to frontend spceaili react.js</p>
          <p> So I decide to create this project to felt more comfortagble white react and redux and learn the issues and challeenge i may have</p>
          <p>this site is inspired by flerbo.ir </p>
        </div>
    </div>
)
