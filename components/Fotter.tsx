import Image from 'next/image'
import React from 'react'
import head from '../public/office.jpg'
import { Facebook, Instagram, Twitter } from 'lucide-react'

const Fotter = () => {
  return (
    <div className='h-full lg:h-screen px-10 bg-[#002F69] text-white' id='#about'>
        <div className="grid grid-cols-1 lg:grid-cols-2">

            <div className="mt-10 lg:mt-28 p-10">
                <Image src={head} alt='headquatare' height={400} width={400}/>
            </div>

            <div className="flex flex-col items-start justify-start mt-10 lg:mt-28 p-10 space-y-3">
                <p className='text-2xl font-semibold'>Headquarters</p>
                <p>123 Anywhere St.Any City, ST 12345 </p>
                <p>Tel. (123) 456-7890 Email: hello@reallygreatsite.com</p>
                <p className='font-semibold pt-4'>Office Hours</p>
                <p>Monday to Friday</p>
                <p> 9:00 am to 5:00 pm</p>
                <p> Weekends by appointment</p>
                <p className='font-semibold pt-4'>Social Media</p>
                <div className="flex items-center justify-center gap-5">
                    <Facebook className='font-bold'/>
                    <Instagram className='font-bold'/>
                    <Twitter className='font-bold'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Fotter