import React from 'react'

export const Searchbar = () => {
  return (
    <div className="col-lg-4 col-6 text-left">
        <form>
            <div className="input-group">
            <input type="text" className="form-control" placeholder="Search for products" />
            <div className="input-group-append">
                <span className="input-group-text bg-transparent text-primary">
                <i className="fa fa-search" />
                </span>
            </div>
            </div>
        </form>
    </div>
  )
}
