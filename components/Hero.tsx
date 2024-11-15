"use client"

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import Gsap from './Gsap';



const Hero = () => {

    const divRef = useRef(null)

    useEffect(() => {
        gsap.fromTo(divRef.current, 
        {  x: 200, opacity: 0},
        {
            x: 0,
            delay:1,
            opacity: 1,
            duration: 2,
            ease: "power2.out",
        }
    );
    },[])
    


  return (
    <div className='flex flex-col lg:flex-row items-center lg:items-center justify-around bg-[#002F69] lg:h-screen h-full'>
        <div>
            <Gsap/>
        </div>

        <div className="flex flex-col gap-y-10 mb-10 lg:mb-0" ref={divRef}>
            <div>
                <h1 className='text-xl font-bold italic'>VAL Construction</h1>
            </div>
            <div className="h-52 w-64">
                <h1 className='text-4xl text-balance font-bold uppercase'>Let{"'"}s make your vision come to life</h1>
            </div>
            <button className='font-bold py-2 px-3 bg-[#0087FF] hover:bg-[#2291ff] hover:scale-105'>Learn more </button>
        </div>

    </div>
  )
}

export default Hero