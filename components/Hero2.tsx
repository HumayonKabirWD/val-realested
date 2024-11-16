import Image from 'next/image'
import React from 'react'
import people from '../public/people.png'
import { StarHalf, StarIcon } from 'lucide-react'

const Hero2 = () => {
  return (
    <div className='bg-[#EEEEF0] h-full lg:h-screen text-[#002F69] pb-10'>
        <div className="flex items-center justify-start px-10 text-balance pt-10 lg:pt-32 lg:w-[720px] ml-0 lg:ml-40">
            <p className='text-4xl lg:text-5xl font-bold'>VAL Construction is built on our founders' unique outlook on construction</p>
        </div>
        <div className="flex items-center justify-end right-0 px-10 text-balance pt-10 lg:pt-20 ml-0 lg:ml-80">
            <p className='text-lg'>Write a paragraph that talks about your company here. You can talk about your company's background, history, mission, vision, or philosophy. Anything that will introduce your brand's persona to your clients. This will help build a connection between you and them, that hopefully leads to a working relationship.</p>
        </div>
        <div className="flex flex-col items-center justify-center mt-10">
            <Image src={people} alt='people'/>
            <div className="flex items-center justify-start lg:pl-36 mt-2">
                <StarIcon className='h-5 text-yellow-500 fill-yellow-500'/>
                <StarIcon className='h-5 text-yellow-500 fill-yellow-500'/>
                <StarIcon className='h-5 text-yellow-500 fill-yellow-500'/>
                <StarIcon className='h-5 text-yellow-500 fill-yellow-500'/>
                <StarHalf className='h-5 text-yellow-500 fill-yellow-500'/>
                <p>293000+ people give us rating</p>
            </div>
        </div>
    </div>
  )
}

export default Hero2