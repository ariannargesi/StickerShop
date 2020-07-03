import React,{ useRef } from 'react'
import useToggle from '../../hooks/useToggle'
import useClickOutside from '../../hooks/useClickOutside'
import {connect} from 'react-redux'
import './Panel.sass'

const Panel = (props) => {
  const [state,setState] = useToggle(false)
  const ref = useRef(null)
  const closeHanlder = () => {
    setState(false)
  }
  const clickOutsideHandler = () => {
    setState(false)
  }

  useClickOutside(ref, clickOutsideHandler)


  return (
    <div className="panel-container">
      <button className="panel-trigger" onClick={()=> setState(!state)}>open</button>
      { state &&
        <div className="panel-wrapper">
          <div className="panel" ref={ref}>
          <div className="user-card-panel-header">
           <button onClick={() => setState(!state)}>Close</button>
           <h1>{props.title}</h1>
           <span>{props.badge}</span>
          </div>
              {props.children}
          </div>
        </div>
      }
    </div>
  )
}

export default Panel
