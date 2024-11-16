import React from 'react'

const Testomonial = () => {
  return (
    <div className='h-full lg:h-screen bg-[#EEEEF0] px-10 lg:px-20 text-[#002F69] pb-10'>
        <div className="flex items-center justify-start p-10">
            <p className='text-4xl  p-10 font-semibold'>Client testimonial</p>
        </div>
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 px-0 lg:px-20 gap-5">

          <div className="flex flex-col px-10 mb-10">
            <div className='h-1 w-12 bg-[#002F69] rounded-xl'/>
            <p className='mt-10'>Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.</p>
            <p className='mt-10 font-semibold'>Tristan Clousso, Shutter Club NY</p>
          </div>

          <div className="flex flex-col px-10">
            <div className='h-1 w-12 bg-[#002F69] rounded-xl'/>
            <p className='mt-10'>Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.</p>
            <p className='mt-10 font-semibold'>Shani Mensah, Vivarily</p>
          </div>

          <div className="flex flex-col px-10">
            <div className='h-1 w-12 bg-[#002F69] rounded-xl'/>
            <p className='mt-10'>Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.Add them here!</p>
            <p className='mt-10 font-semibold'>Paisley Finwood</p>
          </div>

        </div>
    </div>
  )
}

export default Testomonial