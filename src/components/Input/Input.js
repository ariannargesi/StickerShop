import React, {useState,useEffect} from 'react'
import './Input.scss'

export default (props) => {
    const [message, setMessage] = useState("")
    const [input, setInput] = useState("")
    const [showMessage, setShowMessage] = useState(false)
    useEffect(()=>{
        if(typeof props.message == "string")
             setMessage(props.message)
        else if(typeof props.message == "function")
             setMessage(props.message(input))
    }, [input])
    const changeHandler = (event) => {
        setInput(event.target.value)
    }

    return (
        <div className="input-wrapper"  onBlur={() => setShowMessage(true)}>
            <label htmlFor={props.name}>{props.name}</label>
            <br/>
            <input type={props.type}
                   name={props.name}
                   placeholder={props.placeholder}
                   value={input}
                   onChange = {changeHandler}
                   style={{width: props.width + "px"}}
            />
            <br/>
            <span>{ showMessage && message }</span>
        </div>
    )
}