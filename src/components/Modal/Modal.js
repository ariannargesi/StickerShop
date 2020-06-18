import React,{useState} from 'react'
import './Modal.css'
export default (props) => {
    const [state, setState] = useState(false)
    const clickHandler = () => {
        setState(!state)
    }
    return (
        <div className="modal-wrapper">
            <button onClick={clickHandler}>{props.title}</button>
            { state &&
            <div className="modal">
                <button onClick={clickHandler} className="close-modal">close</button>
                <div className="modal-content">
                    {
                        props.children
                    }
                </div>
            </div>
            }
        </div>
    )
}