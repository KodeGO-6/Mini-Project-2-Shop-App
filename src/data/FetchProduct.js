import React, { useEffect, useState } from 'react'
import axios from 'axios'

const FetchProduct = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(url)
                const shuffledResponse = response.data.sort(() => 0.5 - Math.random())
                setData(shuffledResponse)
                localStorage.setItem('products', response.data.length)
                setLoading(false)
            } catch (err) {
                setError(err)
                setLoading(false)
            }
        }
        fetchProduct()
    }, [url])

  return { data, loading, error }
}

export default FetchProduct