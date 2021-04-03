import React, {useContext, useState} from "react"
import {Context} from "../Context"
import CartItem from "../components/CartItem"

function Cart() {
    const {cartItems, emptyCart} = useContext(Context)

    const [buttonText, setButtonText] = useState("Place Order")

    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))

    const calculateTotal = cartItemElements.reduce(sum => sum + 5.99, 0).toLocaleString("en-US", {style: "currency", currency: "USD"})
    
    const placeOrder = () => {
        setButtonText("Ordering...")
        setTimeout(() => {
            emptyCart()
            setButtonText("Place Order")
        }, 3000)
    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {calculateTotal}</p>
            {cartItems.length > 0 && <div className="order-button">
                <button onClick={placeOrder}>{buttonText}</button>
            </div>}
        </main>
    )
}

export default Cart