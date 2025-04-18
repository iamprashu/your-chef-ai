import React from 'react'
import { GiCampCookingPot } from "react-icons/gi";


function Loader() {
  return (
    <div className='min-h-[90%] flex flex-col justify-evenly items-center gap-12'>
       <p className='md:text-xl'>Please Wait we are Loading Recepie.....</p>
       <div role="status" className=" animate-bounce "> 
            <GiCampCookingPot  size={200}/>
    </div>
    </div>
    
  )
}

export default Loader
