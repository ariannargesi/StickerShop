import React from 'react'
import './Menu.sass'
import MenuItem from "../MenuItem/MenuItem";
export default (props) => {
    return (
        <div className="menu">
            <a className="menu-title" href={props.href}>{props.title}</a>
            <div className="menu-wrapper">
                <div>
                    {props.children}
                </div>
            </div>
        </div>
    )
}
