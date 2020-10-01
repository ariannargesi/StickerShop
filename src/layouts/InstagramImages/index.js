import React from 'react'
import { Link } from "react-router-dom";
import Button from "../../components/Button"

import './InstagramImages.scss'

import image1 from '../../assets/i1.jpg'
import image2 from '../../assets/i2.jpg'
import image3 from '../../assets/i3.jpg'
import image4 from '../../assets/i4.jpg'
import image5 from '../../assets/i5.jpg' 
import image6 from '../../assets/i6.jpg'
import image7 from '../../assets/i7.jpg'

const Instagram = () => {
    return (
        <>
            <div className="svg-container">

            </div>
            <div className="instagram-wrapper">
                <div className="Gwry-19" style={{ width: "1200px", margin: "0 auto" }}>
                    <Button size={"medium"} width={"300px"} type={"white"}> <Link to="/">Follow us on Instagram</Link></Button>
                </div>
                <a href="https://www.instagram.com/ariannargesi">
                    <div className="instagram-images">

                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <div className="instagram-images-small">
                                <img src={image1} alt="" style={{ borderTopLeftRadius: "5px" }} />
                                <img src={image2}/>
                            </div>
                            <div className="instagram-images-large">
                                <img src={image4} alt="" />
                            </div>
                            <div className="instagram-images-small">
                                <img src= {image3} />                               
                                <img src={image5}/>
                            </div>
                            <div className="instagram-images-small">
                                <img src={image7} alt="" style={{ borderTopRightRadius: "5px" }} />
                                <img src={image6} alt="" style={{ borderBottomRightRadius: "5px" }} />
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </>
    )
}
export default Instagram