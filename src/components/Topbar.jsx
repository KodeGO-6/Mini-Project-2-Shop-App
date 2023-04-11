import React from 'react'
import { Searchbar } from './topbar/Searchbar'
import { UserAccount } from './topbar/UserAccount'
import { Currency } from './topbar/Currency'
import { Language } from './topbar/Language'
import { ItemLikes } from './topbar/ItemLikes'
import { Cart } from './topbar/Cart'

export const Topbar = () => {
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
              <UserAccount />
              <Currency />
              <Language />
            </div>
            <div className="d-inline-flex align-items-center d-block d-lg-none">
              <ItemLikes />
              <Cart />
            </div>
          </div>
        </div>
        <div className="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex">
          <div className="col-lg-4">
            <a href='#' className="text-decoration-none">
              <span className="h1 text-uppercase text-primary bg-dark px-2">React</span>
              <span className="h1 text-uppercase text-dark bg-primary px-2 ml-n1">Shop</span>
            </a>
          </div>
          <Searchbar />
          <div className="col-lg-4 col-6 text-right">
            <p className="m-0">Customer Service</p>
            <h5 className="m-0">+012 345 6789</h5>
          </div>
        </div>
      </div>
  )
}
