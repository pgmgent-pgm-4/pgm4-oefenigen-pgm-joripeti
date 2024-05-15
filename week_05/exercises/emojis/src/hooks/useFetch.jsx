import React, { useEffect, useState } from 'react'

export default function useFetch(url, options = {}) {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
      const fetchData = async () => {
        try {
          setIsLoading(true)
          const response = await fetch(url)
          const data = await response.json();
          setData(data)
          setIsLoading(false)
        }
        catch (error) {
          setError(error)
          setIsLoading(false)
        }
      }
      fetchData()
    }, [url]);
  return  {data, isLoading, error} 
}
