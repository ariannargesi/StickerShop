import React from 'react'
import './InstagramImages.scss'
import Title from "../../components/Title/Title";
import wave2 from '../../assets/wave2.svg'
import {findRenderedDOMComponentWithTag} from "react-dom/test-utils";

const Index = () => {


    return (
        <div className="instagram-images">
            <Title
                content={"Fallow us on instagram"}
                size={"small"}
            />
        </div>
    )
}


export default Index