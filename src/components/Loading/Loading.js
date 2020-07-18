import React from 'react'
import './Loading.scss'

const Loading = (props) => {
    return (
        <div className="loading" style={{width: props.width, height: props.height}} >
            <div className="loading-dot" ></div>
            <div style={{animationDelay: "200ms"}} className="loading-dot" ></div>
            <div className="loading-dot" ></div>
        </div>
    )
}
export default Loading