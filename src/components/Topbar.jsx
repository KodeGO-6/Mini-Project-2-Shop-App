import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SearchBar } from './SearchBar'
import { ShopContext } from '../context/ShopContext'

export const Topbar = ({token, setToken}) => {
    const { setCartItems, setLikeItems } = useContext(ShopContext)

    const navigate = useNavigate()

    const logOutHandler = () => {
        setToken(null)
        setCartItems(null)
        setLikeItems(null)
        localStorage.clear()
        navigate('/')
        window.location.reload()
    }

    const logInHandler = () => {
        navigate('/login')
    }

  return (
    <div className="container-fluid">
        <div className="row bg-secondary py-1 px-xl-5">
            <div className="col-lg-6 d-none d-lg-block">
                <div className="d-inline-flex align-items-center h-100">
                    <a className="text-body mr-3" href='#'>About</a>
                    <a className="text-body mr-3" href='#'>Contact</a>
                    <a className="text-body mr-3" href='#'>Help</a>
                    <a className="text-body mr-3" href='#'>FAQs</a>
                </div>
            </div>
            <div className="col-lg-6 text-center text-lg-right">
                <div className="d-inline-flex align-items-center">
                    <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">My Account</button>
                        <div className="dropdown-menu dropdown-menu-right">
                            {token ? <button className='dropdown-item' type='button' onClick={logOutHandler}>Sign out</button> : <button className='dropdown-item' type='button' onClick={logInHandler}>Sign in</button>}
                            <button className="dropdown-item" type="button">Sign up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex">
            <div className="col-lg-4">
            <Link to='/' className="text-decoration-none">
                <span className="h1 text-uppercase text-primary bg-dark px-2">Go</span>
                <span className="h1 text-uppercase text-dark bg-primary px-2 ml-n1">Shop</span>
            </Link>
            </div>
            <SearchBar />
            <div className="col-lg-4 col-6 text-right">
                <p className="m-0">Customer Service</p>
                <h5 className="m-0">+012 345 6789</h5>
            </div>
        </div>
    </div>
  )
}
