import React, {useState, useEffect, useRef } from 'react'

import useToggle from '../../hooks/useToggle'
import useClickOutside from '../../hooks/useClickOutside'
import './Dropdown.scss'

const Index = (props) => {
    const [isOpen, setState] = useToggle(false)
    const [selectedItem, setSelectedItem] = useState(props.current)
    const [anim, setAnim] = useState("")
    const divRef = useRef(null)
    const onClickOutside = () => {
        if(isOpen){
            setAnim("")
            setTimeout(()=>{
                setState(false)
            },200)
        }
    }
    const clickHandler = () => {
        if(isOpen){
            setAnim("")
            setTimeout(()=>{
                setState(false)
            },200)
        } else {
            setState(true);
            setTimeout(()=> {
                setAnim("open")
            }, 0)
        }
    }
    useClickOutside(divRef, onClickOutside)


    return (
        <div className="dropdown" ref={divRef}>
            <h4>{props.title}</h4>
            <div className="dropdown-selected" onClick={ clickHandler }>
                <span>{selectedItem}</span>
                <span className={["material-icons", isOpen ? "down" : ""].join(" ")}>keyboard_arrow_up</span>
            </div>

            {
                isOpen &&
                <ul className={["dropdown-items", anim].join(" ")} >
                    {
                        props.items.map(item => {
                            return (
                                <li key={item} onClick={ ()=> {
                                    setSelectedItem(item)
                                    setState(false)
                                } }> {item} </li>
                            )
                        } )}
                </ul>
            }
        </div>
    )
}
export default Index