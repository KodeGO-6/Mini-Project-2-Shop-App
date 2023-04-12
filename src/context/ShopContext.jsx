import React, { createContext, useState } from 'react'
import FetchProduct from '../data/FetchProduct'

export const ShopContext = createContext(null)

const getDefaultWishList = () => {
    let wishlist = {}
    for (let i = 1; i < Number(localStorage.getItem('products')) + 1; i++){
        wishlist[i] = false
    }
    return wishlist
}

const getDefaultCart = () => {
    let cart = {}
    for (let i = 1; i < Number(localStorage.getItem('products')) + 1; i++){
        cart[i] = 0
    }
    return cart
}

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart())
    const [likeItems, setLikeItems] = useState(getDefaultWishList())
    //const { data } = FetchProduct('https://fakestoreapi.com/products')

    const getTotalCartAmount = (data) => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if(cartItems[item] > 0) {
                let itemInfo = data.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }
        return totalAmount;
    }

    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev, 
            [itemId]: prev[itemId] + 1
        }))
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
             [itemId]: prev[itemId] - 1
        }))
    }

    const deleteFromCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
             [itemId]: 0
        }))
    }

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: newAmount
        }))
    }

    const addToLikes = (itemId) => {
        setLikeItems((prev) => ({
            ...prev, [itemId]: !prev[itemId]
        }))
    }

    const contextValue = {
        cartItems,
        getTotalCartAmount,
        addToCart,
        removeFromCart,
        updateCartItemCount,
        deleteFromCart,
        likeItems, 
        addToLikes
    }

  return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}
