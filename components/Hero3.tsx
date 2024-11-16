import { CheckCircle2 } from 'lucide-react'
import React from 'react'

const Hero3 = () => {
  return (
    <div className='h-full lg:h-screen bg-[#0087FF]'>
        <div className="flex flex-col items-center justify-center pt-10 lg:pt-20 px-10">
            <h2 className='text-5xl font-semibold text-center'>Count on Vandemar Construction to <br/> look after your building needs</h2>
            <p className='mt-10 lg:mt-10 text-lg'>Share your services or product offerings here. List them down as bullet points for easy reading, even for people on mobile. You can also use this space for other purposes where the information is best presented as concise bullet pointed lists.</p>
        </div>
        {/* 4 white section */}

        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 mt-10 lg:mt-20 pb-10">
            <div className="flex gap-10">
                <div className="h-28 w-32 bg-[#EEEEF0] flex flex-col items-center justify-center overflow-hidden">
                    <CheckCircle2 className='h-12 w-12 fill-blue-900 text-[#EEEEF0]'/>
                    <p className='text-[#002F69] uppercase font-bold tracking-tighter px-1 leading-4 mt-4'>reliability</p>
                </div>
                <div className="h-28 w-32 bg-[#EEEEF0] flex flex-col items-center justify-center overflow-hidden">
                    <CheckCircle2 className='h-12 w-12 fill-blue-900 text-[#EEEEF0]'/>
                    <p className='text-[#002F69] uppercase font-bold tracking-tighter px-1 text-center leading-4 mt-2'>personalized approach</p>
                </div>
            </div>

            <div className="flex gap-10">
                <div className="h-28 w-32 bg-[#EEEEF0] flex flex-col items-center justify-center overflow-hidden">
                    <CheckCircle2 className='h-12 w-12 fill-blue-900 text-[#EEEEF0]'/>
                    <p className='text-[#002F69] uppercase font-bold tracking-tighter px-1 text-center leading-4 mt-2'>timely delivery</p>
                </div>
                <div className="h-28 w-32 bg-[#EEEEF0] flex flex-col items-center justify-center overflow-hidden">
                    <CheckCircle2 className='h-12 w-12 fill-blue-900 text-[#EEEEF0]'/>
                    <p className='text-[#002F69] uppercase font-bold tracking-tighter px-1 text-center leading-4 mt-2'>high standards</p>
                </div>
            </div>
            

        </div>
    </div>
  )
}

export default Hero3