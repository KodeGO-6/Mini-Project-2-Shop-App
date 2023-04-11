import React from 'react'
import { Link } from 'react-router-dom'

export const UserAccount = () => {
  return (
    <div className="btn-group">
        <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">My Account</button>
        <div className="dropdown-menu dropdown-menu-right">
            <Link className="dropdown-item" to='/user'>Sign in</Link>
            <button className="dropdown-item" type="button">Sign up</button>
        </div>
    </div>
  )
}
