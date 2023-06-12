import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

async function getData() {
  const res = await fetch('http://localhost:3000/api/posts', { cache: "no-store" })
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

const Blog = async () => {
  const data = await getData()

  return (
    <div>
      <h1 className='text-6xl my-16 text-center'>Blog</h1>
      <div>
        {data.map(item => (
        <Link href={`/blog/${item._id}`} key={item.id} className='flex items-center odd:flex-row-reverse mb-5'>
          <Image src={item.img} alt='' width={300} height={300} />
          <div>
            <h3 className='text-2xl'>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        </Link>
        ))}
        
      </div>
    </div>
  )
}

export default Blog