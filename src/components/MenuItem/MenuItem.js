import React from 'react'
import './MenuItem.css'
export default (props) => {
    let className = "menu-column"
    if(props.mode == "bold")
        className += " menu-bold"
    return (
        <ul className={className}>
            <li className="menu-title"><a href={props.href}>{props.title}</a></li>
            {props.children.map((item,index) => {
                return <li key={index}>{item}</li>
            })}
        </ul>
    )
}