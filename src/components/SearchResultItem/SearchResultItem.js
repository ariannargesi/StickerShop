import React from 'react'
import './SearchResultItem.scss'
import {NavLink} from "react-router-dom";

export default (props) => (
        <NavLink to="" className="search-result-item">
            <img src={props.img} alt=""/>
            <span>{props.title}</span>
        </NavLink>
)