import React from 'react'

const Title = ({content, styled, size}) => {
    const styles = {
        fontSize: size == "large" ? 32 : 24,
        textAlign: "center"
    }
    return (
        <h1 style={styles}> {content} </h1>
    )
}

export default Title