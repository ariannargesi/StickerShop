import React from 'react'
import './Title.scss'
const Title = ({content, styled, size}) => {
    const styles = {
        fontSize: size == "large" ? 32 : 24,
    }
    return (
        <div className={"title-wrapper"}>
             <h1 style={styles} className={"title"}>  {content} </h1>
        </div>
    )
}

export default Title