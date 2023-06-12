import Image from 'next/image'
import { notFound } from 'next/navigation'

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, { cache: "no-store" })

  if (!res.ok) {
    return notFound()
  }
  return res.json()
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);

  return (
    <div className='py-20'>
      <Image src={data.img} alt='' priority={true} height={300} width={300} className='flex float-right w-4/12 m-9 bg-white' />
      <div className='flex justify-between items-center mb-5 mt-40'>
        <h3 className='text-5xl w-fit'>{data.title}</h3>
        <div className='flex items-center gap-4 w-96'>
          <div className='text-right'>
            <p className='text-lg'>{data.username}</p>
            <p className='text-xs'>Keep bashing heads in, bitches!</p>
          </div>
            <Image src={data.img} alt='' height={50} width={50} className='rounded-full bg-white h-16 w-16 flex image_animation' />
        </div>
      </div>
      <p>{data.desc}</p>
      <p>{data.content}</p>
    </div>
  )
}

export default BlogPost