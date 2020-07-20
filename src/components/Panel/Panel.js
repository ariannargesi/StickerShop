import React,{ useRef } from 'react'
import useToggle from '../../hooks/useToggle'
import useClickOutside from '../../hooks/useClickOutside'
import {connect} from 'react-redux'
import './Panel.scss'

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
      <span className="material-icons" onClick={()=> setState(!state)}>shopping_cart</span>
      { state &&
        <div className="panel-wrapper">
          <div className="panel" ref={ref}>
          <div className="panel-header">
           <span className="material-icons" onClick={() => setState(!state)}>close</span>
            <h1>{props.title}</h1>
           <span className="badge">{props.badge}</span>
          </div>
            <div className="panel-data">
              {props.children}
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Panel
