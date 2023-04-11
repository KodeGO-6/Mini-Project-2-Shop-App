import { useState, useEffect } from 'react'
import axios from 'axios'

const useFetchData = (url) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get(url)
            const shuffledRes = response.data.sort(() => 0.5 - Math.random())
            setData(shuffledRes)
            setLoading(false)
        } catch (err) {
            setError(err)
            setLoading(false)
        }
    }
    fetchData()
  }, [url])

  return { data, loading, error }
}

export default useFetchData