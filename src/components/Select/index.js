import React, { useState } from 'react'
import './Select.scss'

const Select = ({children}) => {
    const [currentItemIndex, setCurrentItemIndex] = useState(0)
    return (
        <div>
            {
                children.map((item, index) => {
                    return <div>{item}</div>
                })
            }
        </div>
    )
}

export default Select