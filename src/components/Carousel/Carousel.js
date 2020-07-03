import React from 'react'
import './Carousel.sass'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import sliderOne from '../../assets/slider-1.png'
import sliderTwo from '../../assets/slider-2.png'
import sliderThree from '../../assets/slider-3.png'

// used in the home page 
export default () => {
   return (
       <div className="carousel-wrapper">
            <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} swipeable={true} showIndicators={false}>
                <div>
                    <img src={sliderOne}/>
                </div>
                <div>
                    <img src={sliderTwo} />
                </div>
                <div>
                    <img src={sliderThree} />
                </div>
            </Carousel>
       </div>
    )
}
