import React from 'react'
import './SearchResultItem.scss'
import {Link} from "react-router-dom";

export default (props) => (
        <Link to={`/product/${props.url}`} className="search-result-item">
            <img src={props.img} alt=""/>
            <span>{props.title}</span>
        </Link>
)