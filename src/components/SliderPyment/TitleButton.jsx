import React from 'react'

function TitleButton({ icon, text, active, setActive, index }) {

    return (
        <div onClick={() => setActive(index)} className={`sliderPyment__title ${active === index && 'active'}`}>
            <div className={`sliderPyment__icon ${icon}`}></div>
            <span>{text}</span>
        </div>
    )
}

export default TitleButton