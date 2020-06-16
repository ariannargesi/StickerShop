import React, {useState, useEffect} from 'react'
import './PaginationInput.css'
export default (props) => {

    const [input, setInput] = useState("")
    useEffect(()=>{
        
        setInput(props.value)
    })
    function onChangeHandler(event){
        const value = event.target.value
        if(isNumber(value) && value <= props.maxRange){
            setInput(value)
        }
    }



    return (
        <>
            <input type="text"  value={input} onChange={onChangeHandler}/>
        </>
    )
}

function isNumber (x) {
    if(Number(x)){
        return true
    }
    return false
}