import React, { useContext, useState } from 'react'
import { SearchContext } from '../context/SearchContext'

export const SearchBar = () => {
  const { query, searchHandler, onSearchClick } = useContext(SearchContext)

  return (
    <div className="col-lg-4 col-6 text-left">
        <form>
            <div className="input-group">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Search for products"
                  value={query}
                  onChange = {searchHandler} />
                <div className="input-group-append">
                    <span 
                      className="input-group-text bg-transparent text-primary" 
                      onClick={onSearchClick}>
                    <i className="fa fa-search" />
                    </span>
                </div>
            </div>
        </form>
    </div>
  )
}
