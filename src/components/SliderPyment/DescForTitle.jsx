import React from 'react'

function DescForTitle({ text, index, active }) {
    return (
        <div className={`sliderPyment__description ${index === active && 'active'}`}>{text}</div>
    )
}

export default DescForTitle