import Image from 'next/image'
import React from 'react'
import { items } from './data'
import { notFound } from 'next/navigation'

const getData = (cat) => {
    const data = items[cat]

    if (data) {
        return data
    }
    return notFound()
}

const Category = ({ params }) => {
    const data = getData(params.category)
    return (
        <div>
            <h1 className='text-teal-200 text-xl pb-24'>{params.category}</h1>
            <div>
                {data.map(item => (
                    <div key={item.id} className='flex items-center odd:flex-row-reverse gap-6'>
                        <div className='flex-1'>
                            <h1>{item.title}</h1>
                            <p>{item.body}</p>
                        </div>
                        <Image src={item.image} alt='' priority={true} height={500} width={500} className='flex flex-1 image_animation' />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Category