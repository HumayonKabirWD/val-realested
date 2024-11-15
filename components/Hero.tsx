import React from 'react'
import Gsap from './Gsap'


const Hero = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-around bg-[#002F69]'>
        <div>
            <Gsap/>
        </div>
        <div className="flex flex-col gap-y-10">
            <div className="flex gap-3">
                {/* <Image src={logo} alt='logo' height={40} width={40} className='rounded-full'/> */}
                <h1 className='text-xl font-bold'>VAL Construction</h1>
            </div>
            <div className="h-52 w-64">
                <h1 className='text-4xl text-balance font-bold uppercase'>Let{"'"}s make your vision come to life</h1>
            </div>
            <button className='font-medium py-2 px-3 bg-[#0087FF]'>Learn more </button>
        </div>
    </div>
  )
}

export default Hero