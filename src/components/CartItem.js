import React, {useContext, useState} from "react"

import {Context} from '../Context'

function CartItem({item}) {
    const {removeFromCart} = useContext(Context)
    const [hovered, setHovered] = useState(false)

    const trashIcon = () => {
        if (hovered) {
            return <i onClick={() => removeFromCart(item.id)} onMouseLeave={() => setHovered(false)} className="ri-delete-bin-fill"></i>
        } else {
            return <i onClick={() => removeFromCart(item.id)} onMouseEnter={() => setHovered(true)} className="ri-delete-bin-line"></i>
        }
    }

    return (
        <div className="cart-item">
            {trashIcon()}
            <img src={item.url} alt={item.id} width="130px" />
            <p>$5.99</p>
        </div>
    )
}

export default CartItem