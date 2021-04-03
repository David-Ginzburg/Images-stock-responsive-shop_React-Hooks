import React from "react"

function Image({className, img}) {
    const adjustClass = className ? ` ${className}` : ''
    return (
        <div className={`image-container${adjustClass}`}>
            <img src={img.url} alt={img.id} className="image-grid"/>
        </div>
    )
}

export default Image