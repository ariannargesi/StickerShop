import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import sliderOne from '../assets/slider-1.png'
import sliderTwo from '../assets/slider-2.png'
import sliderThree from '../assets/slider-3.png'
import { Carousel } from 'react-responsive-carousel'

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
