import React,{ useRef, useState } from 'react'
import useToggle from '../../hooks/useToggle'
import useClickOutside from '../../hooks/useClickOutside'
import {connect} from 'react-redux'
import './Panel.scss'

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
const Panel = (props) => {
  const [state,setState] = useToggle(false)
  const [anim, setAnim] = useState("panel")
  const ref = useRef(null)

  const openHandler = () => {
    setState(true)
    setTimeout(() => {
      setAnim("panel panel-open")
    },1)
  }
  const closeHandler = () => {
    setAnim("panel")
    setTimeout(() => {
      setState(false)
    },200)
  }
  const clickOutsideHandler = () => {
    setAnim("panel")
    setTimeout(() => {
      setState(false)
    },200)
  }
  useClickOutside(ref, clickOutsideHandler)
  return (
    <div className="panel-container">
  
      <ShoppingCartIcon onClick={openHandler} cursor="pointer" />
      { state &&
        <div className="panel-wrapper">
          <div className={anim} ref={ref}>
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
