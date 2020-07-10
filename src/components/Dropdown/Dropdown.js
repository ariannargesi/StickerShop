import React, {useState, useEffect, useRef } from 'react'

import useToggle from './hooks/useToggle'
import useClickOutside from './hooks/useClickOutSide'
import './Dropdown.scss'

const Dropdown = (props) => {
    const [isOpen, setState] = useToggle(false) 
    const [selectedItem, setSelectedItem] = useState(props.current)
    const divRef = useRef(null)
    const onClickOutside = () => {
     if(isOpen) setState(false)
    }
    useClickOutside(divRef, onClickOutside)


    return (
        <div className="dropdown" ref={divRef}>
            <div className="dropdown-selected" onClick={() => setState(!isOpen) }>
                <span>{selectedItem}</span> 
            </div>
        { 
            isOpen &&
                <ul className="dropdown-items" >
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
export default Dropdown