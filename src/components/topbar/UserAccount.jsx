import React from 'react'

export const UserAccount = () => {
  return (
    <div className="btn-group">
        <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">My Account</button>
        <div className="dropdown-menu dropdown-menu-right">
            <button className="dropdown-item" type="button">Sign in</button>
            <button className="dropdown-item" type="button">Sign up</button>
        </div>
    </div>
  )
}
