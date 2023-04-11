import React from 'react'

export const Currency = () => {
  return (
    <div className="btn-group mx-2">
        <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">USD</button>
        <div className="dropdown-menu dropdown-menu-right">
            <button className="dropdown-item" type="button">EUR</button>
            <button className="dropdown-item" type="button">GBP</button>
            <button className="dropdown-item" type="button">CAD</button>
        </div>
    </div>
  )
}
