import React, {createContext, useState, useEffect} from 'react'

const Context = createContext()

const ContextProvider = ({children}) => {
    const [photosArray, setPhotosArray] = useState([])

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
            .then(res => res.json())
            .then(data => setPhotosArray(data))
            .catch(err => {throw new Error(err)})
    }, [])

    return (
        <Context.Provider value={{photosArray}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}