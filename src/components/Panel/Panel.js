import React,{ useRef, useState } from 'react'
import { motion } from 'framer-motion'
import useToggle from '../../hooks/useToggle'
import useClickOutside from '../../hooks/useClickOutside'
import {connect} from 'react-redux'
import './Panel.scss'

const Panel = (props) => {
  const [state,setState] = useToggle(false)
  const ref = useRef(null)
  const variants = {
    open: { opacity: 1, x: "0" },
    closed: { opacity: 1, x: "-500px" },
    timeout: "200ms"
  }
  console.log(state)
  const openHandler = () => {
    setState(true)
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
          <motion.div
              className="panel"
              animate={state ? "open" : "closed"}
              variants={variants}
              ref={ref}>
          <div className="panel-header">
           <span className="material-icons" onClick={closeHandler}>close</span>
            <h1>{props.title}</h1>
           <span className="badge">{props.badge}</span>
          </div>
            <div className="panel-data">
              {props.children}
            </div>
          </motion.div>
        </div>
      }
    </div>
  )
}

export default Panel
