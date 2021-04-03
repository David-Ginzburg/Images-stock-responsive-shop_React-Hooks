import React, {useState, useContext} from "react"

import {Context} from "../Context"

function Image({className, img}) {
    const [hovered, setHovered] = useState(false)
    const adjustClass = className ? ` ${className}` : ''
    const {toggleFavorite} = useContext(Context)

    const heartIcon = () => {
        if (img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
        } else if (hovered) {
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
        }
    }
    
        
    const cartIcon = hovered && <i className="ri-add-circle-line cart"></i>

    return (
        <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className={`image-container${adjustClass}`}>
            <img src={img.url} alt={img.id} className="image-grid"/>
            {heartIcon()}
            {cartIcon}
        </div>
    )
}

export default Image