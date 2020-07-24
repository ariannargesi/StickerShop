import React, {useState,useRef} from 'react'
import PaginationInput from "../../components/PaginationInput/PaginationInput";
import './Pagination.scss'
import Button from "../../components/Button";

const Pagination = (props) => {
    return (
        <div className="pagination">
            <Button type={"success"} size={"medium"}  width={"150px"}  disable={ props.value == props.pagesCount ? true : false } onClick={props.onNextClick}>next page</Button>
            <div className="input-wrapper">
                <hq>page</hq>
                <PaginationInput onChange={props.onInputChange} value={props.value}/>
                <hq>from {props.pagesCount}</hq>
            </div>
            <Button type={"success"} size={"medium"}  width={"150px"} disable={ props.value == 1? true: false } onClick={props.onPrevClick}>previous page</Button>
        </div>
    )
}
export default Pagination