import React from 'react'
import Lottie from "lottie-react";
import construction from '../assets/animation/underconstruction.json'

function UnderConstruction({message}) {
  return (
   <div className='w-full flex flex-col'>
   
<h2 className="mt-10 text-3xl text-darkTextPrimary font-bold self-center w-full md:w-8/12 text-center">{message}</h2>

<div className="w-full flex justify-center">
      <Lottie animationData={construction} loop={true} className="w-[20rem] md:w-[40rem] self-center" />
</div>
   </div>
  )
}

export default UnderConstruction