import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Portfolio = () => {
  return (
    <div className='flex gap-4 items-center mb-40 mt-28 max-sm:flex-col'>
      <Link href='/portfolio/illustrations' className='rounded h-60 w-auto flex flex-col justify-end gap-4 p-4 border-2 border-gray-500/100 hover:border-gray-500/50'>
        <Image src='/Science.svg' alt='' priority={true} height={300} width={300} className='flex image_animation' />
        <div>Illustrations</div>
      </Link>
      <Link href='/portfolio/websites' className='rounded h-60 w-auto flex flex-col justify-end gap-4 p-4 border-2 border-gray-500/100 hover:border-gray-500/50'>
        <Image src='/Yoga.svg' alt='' priority={true} height={300} width={300} className='flex image_animation' />
        <div>Websites</div>
      </Link>
      <Link href='/portfolio/websites' className='rounded h-60 w-auto flex flex-col justify-end gap-4 p-4 border-2 border-gray-500/100 hover:border-gray-500/50'>
        <Image src='/Walking.svg' alt='' priority={true} height={300} width={300} className='flex image_animation' />
        <div>Applications</div>
      </Link>
    </div>
  )
}

export default Portfolio