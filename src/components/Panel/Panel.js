import React,{useState,useEffect} from 'react'
import {connect} from 'react-redux'
import './Panel.css'

const Panel = (props) => {
  const [state,setState] = useState(false)

  return (
    <div className="panel-container">
      <button className="panel-trigger" onClick={()=> setState(!state)}>open</button>
      { state &&
        <div className="panel-wrapper">
          <div className="panel">
            {props.children}
          </div>
        </div>
      }
    </div>
  )
}

export default Panel
