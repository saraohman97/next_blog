import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='md:container md:mx-auto flex items-center justify-between p-6 lg:px-8'>
            <Link href='/' className='text-2xl'>Logotype</Link>

            <div className='hidden lg:flex lg:gap-x-12 items-center'>
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
                <Link href='/blog'>Blog</Link>
                <Link href='/contact'>Contact</Link>
                <Link href='/dashboard'>Dashboard</Link>
                <Link href='/portfolio'>Portfolio</Link>
                <button>Logout</button>
            </div>

            <div className="flex lg:hidden">
                <div type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5">
                    <span className="sr-only">Open main menu</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Navbar