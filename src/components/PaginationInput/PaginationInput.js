import React from 'react'
import './PaginationInput.sass'
export default (props) => {
    return <> <input type="text" value={props.value} onChange={props.onChange}/> </>
}