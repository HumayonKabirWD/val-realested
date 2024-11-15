import Image from 'next/image'
import React from 'react'
import logo from '../public/logo.png'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='top-0 z-10 h-16 sticky backdrop-blur-xl bg-[#002F69]'>
        <div className="flex items-center justify-between pt-3">
            <div className="flex gap-4 items-center justify-center pl-3">
                <Image src={logo} alt='logo' height={50} width={50}/>
                <span className='text-2xl font-extrabold italic'>VALC</span>
            </div>
            
            <div className="flex items-center px-3 gap-4 lg:gap-10">
                <Link href="/" className='font-bold hover:scale-105' >HOME</Link>
                <Link href="/" className='font-bold hover:scale-105' >ABOUT</Link>
                <Link href="/" className='font-bold hover:scale-105' >SERVICES</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar