import React, {useState,useRef} from 'react'
import PaginationInput from "../../components/PaginationInput/PaginationInput";
import './Pagination.css'

const Pagination = (props) => {
    return (
        <div className="pagination">
            <button disabled={ props.value == props.pagesCount ? true : false } onClick={props.onNextClick}>next page</button>
            <div className="input-wrapper">
                <span>page</span>
                <PaginationInput onChange={props.onInputChange} value={props.value}/>
                <span>from {props.pagesCount}</span>
            </div>
            <button disabled={ props.value == 1? true: false } onClick={props.onPrevClick}>previous page</button>
        </div>
    )
}
export default Pagination