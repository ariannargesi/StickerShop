import React from 'react'
import './Breadcrumbs.scss'
const Index = (props) => {
    return (
        <div className="breadcrumbs">
            {
                props.children.map((item,index) => {
                    return <span className="breadcrumb-item"><a href={item.props.href} key={index}> {item.props.children} </a></span>
                })
            }
        </div>
    )
}

export default Index