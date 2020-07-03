import React from 'react'
import './SearchResultItem.sass'
import {NavLink} from "react-router-dom";

export default (props) => (
        <NavLink to="" className="searchResultItem">
            <span>{props.title}</span>
            <img src={props.img} alt=""/>
        </NavLink>
)