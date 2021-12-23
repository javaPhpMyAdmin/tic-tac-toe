import React from 'react'

const SquareComponent = ({ className, state, onClick }) => {
    const classes = className ? `${className} square` : 'square'
    return (
        <span onClick={onClick} className={classes}>{state}</span>
    )
}

export default SquareComponent
