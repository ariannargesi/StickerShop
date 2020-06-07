import React from 'react'
export default (props) => {
    let className = "dropdown-column"
    if(props.mode == "bold")
        className += " dropdown-bold"
    return (
        <ul className={className}>
            <li className="dropdown-title"><a href={props.href}>{props.title}</a></li>
            {props.children.map((item,index) => {
                return <li key={index}>{item}</li>
            })}
        </ul>
    )
}