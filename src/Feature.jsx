<<<<<<< HEAD
import React from 'react'



const Feature = ({bg,name , img ,desc}) => {
    return (
  
        <div className=' flex flex-wrap lg:flex-nowrap pb-3 space-x-3 c'>
          <img  className={`w-20 lg:w-28 rounded-xl py-2 px-4 text-center bg-${bg}  ` } src={img} alt="" />
          <div className='w-full'>
          <p className='font-semibold text-[14px]'>{name}</p>
          <span className='w-full text-sm text-gray-800'>{desc}</span>
          </div>
        </div>
  
    )
  }
  
  export default Feature
  
=======
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


>>>>>>> 4b5354f189a5b38aae96d66ccacc07004f41ca8b
