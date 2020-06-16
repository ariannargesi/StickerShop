import React, {useState,useRef} from 'react'
import PaginationInput from "../../components/PaginationInput/PaginationInput";
import './Pagination.css'

const Pagination = (props) => {
    const [page, setPage] = useState(1)
    // product data
    const [data, setData] = useState(null)
    const nextPageClick = () => {
            setPage(page + 1)
    }
    const previousPageClick = () => {
            setPage(page - 1)
    }
    return (
        <div className="pagination">
            <button onClick={nextPageClick}>next page</button>
            <div className="input-wrapper">
                <span>page</span>
                <PaginationInput value={page}  maxRange={12}/>
                <span>from 6</span>
            </div>
            <button disabled={ page === 1 } onClick={previousPageClick}>previous page</button>
        </div>
    )
}
export default Pagination