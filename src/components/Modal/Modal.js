import React from 'react'
import useToggle from '../../hooks/useToggle'
import './Modal.css'
const Modal = (props) => {
    const [state, setState] = useToggle(false)
    const clickHandler = () => {
        setState(!state)
    }
    return (
        <div className="modal-wrapper">
            <button onClick={clickHandler}>{props.title}</button>
            {state && (
                <div className="modal">
                    <button onClick={clickHandler} className="close-modal">
                        close
                    </button>
                    <div className="modal-content">{props.children}</div>
                </div>
            )}
        </div>
    )
}

export default Modal
