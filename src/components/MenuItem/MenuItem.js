import React from 'react'
import {NavLink} from "react-router-dom";
import './MenuItem.sass'
export default (props) => {
    let className = "menu-column"
    if(props.mode == "bold")
        className += " menu-bold"
    return (
        <ul className={className}>
            <li className="menu-title"><NavLink to={props.href}>{props.title}</NavLink></li>
            {
               props.children instanceof Array && props.children.map((item,index) => {
                return <li key={index}>{item}</li>
            })
            }
        </ul>
    )
}