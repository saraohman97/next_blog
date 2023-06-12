"use client"
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import Login from './(auth)/login/page'

const Dashboard = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const session = useSession()
  console.log(session)

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

  // const url = 'https://jsonplaceholder.typicode.com/posts'
  // const fetcher = (...args) => fetch(...args).then(res => res.json())
  // const { data, error, isLoading } = useSWR(url, fetcher)

  return (
    <div>
      <Login />
    </div>
  )
}

export default Dashboard