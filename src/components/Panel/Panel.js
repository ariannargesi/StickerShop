import React,{ useRef } from 'react'
import useToggle from '../../hooks/useToggle'
import useClickOutside from '../../hooks/useClickOutside'
import {connect} from 'react-redux'
import './Panel.css'

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
              {props.children}
          </div>
        </div>
      }
    </div>
  )
}

export default Panel
