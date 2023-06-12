"use client"
import React, { useEffect, useState } from 'react'

const Dashboard = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      const res = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: "no-store" })

      if (!res.ok) {
        throw new Error('Failed to fetch data')
        setError(true)
      }

      const data = await res.json()
      setData(data)
      setLoading(false)
    }
    getData()
  }, [])
  console.log(data)
  
  // const url = 'https://jsonplaceholder.typicode.com/posts'
  // const fetcher = (...args) => fetch(...args).then(res => res.json())
  // const { data, error, isLoading } = useSWR(url, fetcher)
 
  // if (error) return <div>failed to load</div>
  // if (isLoading) return <div>loading...</div>
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard