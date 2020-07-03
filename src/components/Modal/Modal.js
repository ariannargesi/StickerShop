import React,{useState, useRef} from 'react'
import useToggle from '../../hooks/useToggle'
import useClickOutside from '../../hooks/useClickOutside'
import './Modal.sass'
export default (props) => {
    const [state, setState] = useToggle(false)
    const divRef = useRef(null)
    const clickHandler = () => {
        setState(!state)
    }
    const clickOutsideHandler = () => {
        setState(false)
    }
    useClickOutside(divRef, clickOutsideHandler)
    return (
        <div className="modal-wrapper">
            <button onClick={clickHandler}>{props.title}</button>
            { state &&
            <div className="modal">
                <button onClick={clickHandler} className="close-modal" >close</button>
                <div className="modal-content" ref={divRef}>
                    {
                        props.children
                    }
                </div>
            </div>
            }
        </div>
    )
}