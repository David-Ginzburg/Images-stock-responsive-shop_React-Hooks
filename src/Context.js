import React, {createContext, useState, useEffect} from 'react'

const Context = createContext()

const ContextProvider = ({children}) => {
    const [photosArray, setPhotosArray] = useState([])
    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
            .then(res => res.json())
            .then(data => setPhotosArray(data))
            .catch(err => {throw new Error(err)})
    }, [])

    const toggleFavorite = (id) => {
        const updatedArr = photosArray.map(photo => {
            if (photo.id === id) {
                return {
                    ...photo,
                    isFavorite: !photo.isFavorite
                }
            }
            return photo
        })
        setPhotosArray(updatedArr)
    }

    const addToCart = (photoObj) => {
        setCartItems(prev => [...prev, photoObj])
    }

    const removeFromCart = (id) => {
        const updatedArr = cartItems.filter(item => item.id !== id)
        setCartItems(updatedArr)
    }

    return (
        <Context.Provider value={{photosArray, toggleFavorite, addToCart, cartItems, removeFromCart}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}