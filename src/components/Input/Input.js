import React, {useState,useEffect} from 'react'
import './Input.css'

export default (props) => {
    const [message, setMessage] = useState("")
    const [input, setInput] = useState("")
    const [showMessage, setShowMessage] = useState(false)
    useEffect(()=>{
        if(typeof props.message == "string")
             setMessage(props.message)
        else if(typeof props.message == "function")
             setMessage(props.message(input))
    })
    const changeHandler = (event) => {
        setInput(event.target.value)
    }

    return (
        <div className="input-wrapper" onBlur={() => setShowMessage(true)}>
            <input type={props.type}
                   placeholder={props.placeholder}
                   value={input}
                   onChange = {changeHandler}
            />
            <span>{ showMessage && message }</span>
        </div>
    )
}