import React from 'react'
import './Breadcrumbs.css'
const Breadcrumbs = (props) => {
    return (
        <div className="breadcrumbs">
            {
                props.children.map((item,index) => {
                    return <a href={item.props.href} key={index}> {item.props.children} </a>
                })
            }
        </div>
    )
}

export default Breadcrumbs