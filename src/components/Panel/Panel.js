import React,{ useRef, useState } from 'react'
import useToggle from '../../hooks/useToggle'
import useClickOutside from '../../hooks/useClickOutside'
import {connect} from 'react-redux'
import './Panel.scss'

const Panel = (props) => {
  const [state,setState] = useToggle(false)
  const [classNames, setClassNames] = useState("panel")
  const ref = useRef(null)
  const openHandler = () => {
    setClassNames("panel panel-open")
    setTimeout(() => {
      setState(true)
    }, 1000)

  }
  const closeHandler = () => {
    setState(false)
  }
  const clickOutsideHandler = () => {
    setState(false)
  }

  useClickOutside(ref, clickOutsideHandler)


  return (
    <div className="panel-container">
      <span className="material-icons" onClick={ openHandler }>shopping_cart</span>
      { state &&
        <div className="panel-wrapper">
          <div className={classNames} ref={ref}>
          <div className="panel-header">
           <span className="material-icons" onClick={closeHandler}>close</span>
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
