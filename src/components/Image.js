import React, {useState, useContext} from "react"
import PropTypes from "prop-types"

import {Context} from "../Context"

function Image({className, img}) {
    const [hovered, setHovered] = useState(false)
    const adjustClass = className ? ` ${className}` : ''
    const {toggleFavorite, addToCart, cartItems, removeFromCart} = useContext(Context)

    const isInCart = cartItems.some(item => item.id === img.id)

    const heartIcon = () => {
        if (img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
        } else if (hovered) {
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
        }
    }
        
    const cartIcon = () => {
        if (isInCart) {
            return <i onClick={() => removeFromCart(img.id)} className="ri-shopping-cart-fill cart"></i>
        } else if (hovered) {
            return <i onClick={() => addToCart(img)} className="ri-add-circle-line cart"></i>
        }
    }

    return (
        <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className={`image-container${adjustClass}`}>
            <img src={img.url} alt={img.id} className="image-grid"/>
            {heartIcon()}
            {cartIcon()}
        </div>
    )
}

export default Image

Image.propTypes = {
    className: PropTypes.string.isRequired,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}