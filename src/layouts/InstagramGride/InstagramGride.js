import React from 'react'
import './InstagramGride.css'
const InstagramGride = () => {
    return (
        <div className="instagram-gride">
            <TitleLink title="fallow us on instagram" href="https://instagram.com" />
        </div>
    )
}

const TitleLink = (props) => {
    return (
        <div>
            <a href={props.href}> {props.title} </a>
        </div>
    )
}

export default InstagramGride