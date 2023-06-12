import Image from 'next/image'
import {notFound} from 'next/navigation'

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { cache: "no-store" })
 
  if (!res.ok) {
    return notFound()
  }
  return res.json()
}

const SinglePost = async ({params}) => {
  const data = await getData(params.id)

  return (
    <div className='py-20'>
      <Image src='/Walking.svg' alt='' priority={true} height={300} width={300} className='flex float-right w-4/12 m-9 p-9 bg-white' />
      <div className='flex justify-between items-center mb-5 mt-40'>
        <h3 className='text-5xl w-fit'>{data.title}</h3>
        <div className='flex items-center gap-4 w-96'>
          <div className='text-right'>
            <p className='text-lg'>Harley Quinn</p>
            <p className='text-xs'>Keep bashing heads in, bitches!</p>
          </div>
          <div className='rounded-full p-2 bg-white h-16 w-16 flex image_animation'>
            <Image src='/Heart.svg' alt='' height={50} width={50} />
          </div>
        </div>
      </div>
      <p>{data.body}</p>
    </div>
  )
}

export default SinglePost