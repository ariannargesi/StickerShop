import React,{useState, useRef} from 'react'
import useToggle from '../../hooks/useToggle'
import useClickOutside from '../../hooks/useClickOutside'
import './Modal.scss'
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
            <span className="modal-title" onClick={clickHandler}>{props.title}</span>
            { state &&
            <div className="modal">
                <span onClick={clickHandler} className="close-modal material-icons">close</span>
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