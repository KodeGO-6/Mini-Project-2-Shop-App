import { useState, useEffect } from 'react'
import axios from 'axios'

const useFetchProduct = (pid) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  localStorage.setItem('PRODUCTS', Object.keys(data).length)

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/${pid}`)
            setData(response.data)
            setLoading(false)
        } catch (err) {
            setError(err)
            setLoading(false)
        }
    }
    fetchData()
  }, [pid])

  console.log(data)
  return { data, loading, error }
}

export default useFetchProduct