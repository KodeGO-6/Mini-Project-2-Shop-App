import React from 'react'

export const ItemLikes = () => {
  return (
    <a href='#' className="btn px-0 ml-2">
        <i className="fas fa-heart text-dark" />
        <span className="badge text-dark border border-dark rounded-circle" style={{paddingBottom: '2px'}}>0</span>
    </a>
  )
}
