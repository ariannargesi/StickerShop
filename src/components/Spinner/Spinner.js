import React from 'react'
import './Spinner.css'
const Spinner = (props) => {
  return (
    <div
    className="spinner"
    style={{height:props.height}}>
      Loading...
    </div>
  )
}

export default Spinner
