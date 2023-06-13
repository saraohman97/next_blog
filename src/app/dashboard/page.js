"use client"
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import Register from './(auth)/register/page'
import { useRouter } from 'next/navigation'
import useSWR from 'swr'
import Image from 'next/image'

const Dashboard = () => {
  // const [data, setData] = useState([])
  // const [error, setError] = useState(false)
  // const [loading, setLoading] = useState(false)

  const session = useSession()
  const router = useRouter()

  // useEffect(() => {
  //   const getData = async () => {
  //     setLoading(true)
  //     const res = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: "no-store" })

  //     if (!res.ok) {
  //       throw new Error('Failed to fetch data')
  //       setError(true)
  //     }

  //     const data = await res.json()
  //     setData(data)
  //     setLoading(false)
  //   }
  //   getData()
  // }, [])

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  )
  console.log(data)

  if (session.status === "loading") {
    return <p>Loading....</p>
  }
  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login")
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name,
        })
      })
      mutate()
      e.target.reset()
    } catch (error) {
      console.log(error)
    }
  }

  const handleDelete = async (id)=> {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      })
      mutate()
    } catch (error) {
      console.log(error)
    }
  }

  if (session.status === "authenticated") {
    return (
      <div className='flex mt-40'>
        <div className=' flex flex-col gap-4 flex-1 items-center'>
          <h2 className='mb-4 text-2xl'>Posts</h2>
          {isLoading ? "Loading..." : data?.map((post) => (
            <div key={post._id} className='flex gap-4 items-center'>
              <div className='flex-1'><Image src={post.img} width={500} height={100} alt='' /></div>
              
              <div className='flex justify-between flex-1'>
                <div>
                <p className='text-2xl'>{post.title}</p>
                <p>{post.desc}</p>
                </div>
                <span className='cursor-pointer hover:text-red-600' onClick={() => handleDelete(post._id)}>X</span>
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="flex flex-1 flex-col gap-10 items-center justify-center">
          <h2 className='mb-4 text-2xl'>Add new post</h2>
          <input
            type="text"
            placeholder='Title'
            className="p-2 w-96 rounded text-black outline-yellow-500 text-center"
          />
          <input
            type="text"
            placeholder='Description'
            className="p-2 w-96 rounded text-black outline-yellow-500 text-center"
          />
          <input
            type="text"
            placeholder='Image'
            className="p-2 w-96 rounded text-black outline-yellow-500 text-center"
          />
          <textarea
            placeholder='Content'
            cols="30"
            rows="10"
            className="p-2 w-96 rounded text-black outline-yellow-500 text-center"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    )
  }
}

export default Dashboard