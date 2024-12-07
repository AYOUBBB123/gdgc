
import React from 'react'



const Feature = ({bg,name , img ,desc}) => {
  return (

      <div className='w-1/6 flex flex-wrap lg:flex-nowrap pb-3 space-x-3'>
        <img  className={` rounded-xl py-2 px- bg-${bg}  ` } src={img} alt="" />
        <div className='w-full'>
        <p className='font-semibold text-[14px]'>{name}</p>
        <span className='w-full text-sm text-gray-800'>{desc}</span>
        </div>
      </div>

  )
}

export default Feature


