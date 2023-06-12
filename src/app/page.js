import DarkModeToggle from '@/components/DarkModeToggle'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='h-screen'>
    <div className='flex items-center lg:flex-row max-md:flex-col-reverse h-full'>
      <div className='flex flex-col flex-1 gap-6'>
        <DarkModeToggle />
        <h1 className='text-7xl'>Better design for your digital products.</h1>
        <p>Turning your Ideas info Reality. We bring together the teams from the global tech industry. </p>
        <button>See our Works</button>
      </div>
      <Image src='/Heart.svg' alt='' priority={true} height={500} width={500} className='flex flex-1 image_animation' />
    </div>
    </div>
  )
}
