import React, { createContext, useEffect, useMemo, useState } from 'react'
import FetchProduct from '../data/FetchProduct'
import { useNavigate } from 'react-router-dom'

export const SearchContext = createContext(null)

export const SearchContextProvider = (props) => {
    const [query, setQuery] = useState('')
    const [category, setCategory] = useState('all')
    const { data } = FetchProduct('https://fakestoreapi.com/products')
    const navigate = useNavigate()

    const searchHandler = (e) => {
        setQuery(e.target.value)
    }

    const onSearchClick = () => {
        navigate(`/search/${query}`)
    }

    const categoryHandler = (e) => {
        setCategory(e.target.value)
        navigate(`/category/${category}`)
    }

    const filteredItem = useMemo(() => {
        return data.filter(item => {
            if (item.title.toLowerCase().includes(query.toLowerCase())) {
                return true
            }
            return false
        })
    }, [data, query])

    const filteredCategory = useMemo(() => {
        return (category) => {
            return data.filter(item => category === 'all' || item.category === category)
        }
    }, [data])

  const contextValue =  { 
        query, 
        category, 
        filteredItem,
        searchHandler, 
        categoryHandler, 
        filteredCategory,
        onSearchClick 
    }

  return (
    <SearchContext.Provider value={contextValue}>
        {props.children}
    </SearchContext.Provider>
  )
}
