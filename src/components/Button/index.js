import React from 'react'
import './Button.scss'

const Button = ({size, type, children, onClick, style, width}) => {
    const sizes = {
        large: "24x",
        medium: "18px",
        small: "18px"
    }

    const fontSize = sizes[size]
    return (
        <button
        className={["button", type ].join(' ')}
            style={{fontSize,width: width || "100%"  }}
            onClick={onClick}
        >
            {children}
        </button>
    )
}
export default Button