import React from 'react'

export const Cart = () => {
  return (
    <a href='#' className="btn px-0 ml-2">
        <i className="fas fa-shopping-cart text-dark" />
        <span className="badge text-dark border border-dark rounded-circle" style={{paddingBottom: '2px'}}>0</span>
    </a>
  )
}
