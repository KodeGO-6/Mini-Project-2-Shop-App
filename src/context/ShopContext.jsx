import React, { createContext, useState } from 'react'

export const ShopContext = createContext(null)

const getDefaultWishList = () => {
    let wishlist = {}
    for (let i = 1; i < localStorage.getItem('products') + 1; i++){
        wishlist[i] = 0
    }
    return wishlist
}

export const ShopContextProvider = (props) => {
    const [likeItems, setLikeItems] = useState(getDefaultWishList())

    const addToLikes = (itemId) => {
        setLikeItems((prev) => ({
            ...prev, [itemId]: !prev[itemId]
        }))
    }

    const contextValue = {likeItems, addToLikes}

  return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}
