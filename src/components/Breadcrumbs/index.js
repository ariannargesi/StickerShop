import React from 'react'
import './Breadcrumb.scss'

const Breadcrumb = ({ children }) => {
    return (
        <div className="breadcrumb">
            {  
                children.map(({ props },index) => {
                    const { href, children } = props 
                    return (
                        <span key={index}>
                            <a href={href}>{children}</a>
                        </span>)
                })
            }
        </div>
    )
}

export default Breadcrumb