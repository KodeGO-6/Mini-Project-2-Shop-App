import React from 'react'

export const Language = () => {
  return (
    <div className="btn-group">
        <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">EN</button>
        <div className="dropdown-menu dropdown-menu-right">
            <button className="dropdown-item" type="button">FR</button>
            <button className="dropdown-item" type="button">AR</button>
            <button className="dropdown-item" type="button">RU</button>
        </div>
    </div>
  )
}
