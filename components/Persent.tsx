import React from 'react'

const Persent = () => {
  return (
    <div className='h-1/2 grid grid-cols-1 lg:grid-cols-3 bg-white py-10 '>

        <div className="flex flex-col items-center justify-center bg-[#0087FF] py-20">
        <p className="text-5xl text-center font-bold">90%</p>
            <p className='text-5xl text-center font-bold'>
            Projects completed</p>
        </div>

        <div className="flex flex-col items-center justify-center  bg-[#EEEEF0] text-[#002F69] py-20">
            <p className="text-5xl text-center font-bold">8+</p>
            <p className='text-5xl text-center font-bold'>
                Years in Operation</p>
        </div>

        <div className="flex flex-col items-center justify-center bg-[#002F69]  text-[#0087FF] py-20">
        <p className="text-5xl text-center font-bold">3</p>
            <p className='text-5xl text-center font-bold'>Offices Nationwide</p>
        </div>
    </div>
  )
}

export default Persent