"use client"

import gsap from 'gsap'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import off from '../public/office.jpg'

const Gsap = () => {

    const imagRef = useRef(null)
    useEffect(() =>{
        gsap.fromTo(imagRef.current,

        {  x: -200, opacity: 0},
        {
            x: 0,
            delay:1,
            opacity: 1,
            duration: 2,
            ease: "power2.out",
        }
        )
    })
  return (
    <div className="flex items-center justify-center h-screen">
    <div className="  shadow-lg rounded-lg overflow-hidden">
      <Image
        ref={imagRef}
        height={400}
        width={400}
        src={off}
        alt="Animated"
        className="w-full h-auto"
      />
    </div>
  </div>
  )
}

export default Gsap