import React from 'react'
import useToggle from '../../hooks/useToggle'
import './Panel.css'

const Panel = (props) => {
    const [state, setState] = useToggle(false)

    return (
        <div className="panel-container">
            <button className="panel-trigger" onClick={() => setState(!state)}>
                open
            </button>
            {state && (
                <div className="panel-wrapper">
                    <div className="panel">{props.children}</div>
                </div>
            )}
        </div>
    )
}

export default Panel
