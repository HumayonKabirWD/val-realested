"use client"

import Image from 'next/image'
import b1 from '../public/nb3.jpg'
import b2 from '../public/nb1.jpg'
import b3 from '../public/b2.jpg'



const Services = () => {

  return (
    <div className='h-full lg:h-screen px-10 lg:px-20 bg-[#002F69]'>
        <div className="flex flex-col lg:flex-row pt-10">
            <div className="lg:w-2/5 pt-20">
                <h2 className='text-3xl font-semibold'>Our services</h2>
                <p className='pt-10 pr-10 text-lg'>Write a paragraph that talks about your construction company here. Convince your prospective clients to choose you and your team for their construction needs by talking about your unique services, as well as your commitment to getting the job done.</p>
            </div>

            <div className="w-3/5 flex flex-col lg:flex-row gap-2 px-10 pb-10 " >

                <div className="h-[310px] w-[240px] mt-[180px] overflow-hidden flex flex-col relative">
                    <Image  src={b3} alt='b1' className=''/>
                    <div className='absolute bottom-0 bg-slate-50 w-full text-black text-center uppercase text-lg'>Residential Spaces</div>
                </div>
                <div className="h-[380px] w-[240px] mt-[110px]  overflow-hidden flex flex-col relative">
                    <Image src={b2} alt='b1'  className='object-cover'/>
                    <div className='absolute bottom-0 bg-slate-50 w-full text-black text-center uppercase text-lg'>Commercial
                    Buildings </div>
                </div>
                <div className="h-[420px] w-[270px] mt-[70px] overflow-hidden flex flex-col relative">
                    <Image src={b1} alt='b1' className=''/>
                    <div className='absolute bottom-0 bg-slate-50 w-full text-black text-center uppercase text-lg'>Renovations
                    & Upgrades</div>
                </div>
            </div>
        </div>    
    </div>
  )
}

export default Services