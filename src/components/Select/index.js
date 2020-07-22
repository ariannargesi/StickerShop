import React, { useState } from 'react'
import './Select.scss'

const Select = ({children, direction}) => {
    const [currentItemIndex, setCurrentItemIndex] = useState(0)
    const styles = {
        display: "flex",
        flexDirection: direction || "row",
    }
    return (
        <div style={styles} >
            {
                children.map((item, index) => {
                    return <div className={ (index == currentItemIndex ? "active select-item" : "select-item") } onClick={ () => setCurrentItemIndex(index) }>{item}</div>
                })
            }
        </div>
    )
}

export default Select