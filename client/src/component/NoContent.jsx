import React from 'react'
import Lottie from "lottie-react";
import noContent from '../assets/animation/noContentDark.json'

function NoContent({message, customClass}) {
  return (
   <div className='w-full flex flex-col'>
   
<h2 className="mt-10 text-3xl text-darkTextPrimary font-bold self-center w-full md:w-8/12 text-center">{message}</h2>

<div className="w-full flex justify-center">
      <Lottie animationData={noContent} speed={0.5} loop={true} className={`${customClass} self-center`} />
</div>
   </div>
  )
}

export default NoContent