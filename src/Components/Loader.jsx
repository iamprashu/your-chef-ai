import React from 'react'
import { GiCampCookingPot } from "react-icons/gi";


function Loader() {
  return (
    <div className='min-h-[90%] flex flex-col justify-evenly items-center'>
       <p className='md:text-xl'>Please Wait we are Loading Recepie.....</p>
       <div role="status" className=" animate-pulse ">
     
            {/* <div className="h-5.5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-4"></div>
            <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
            <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
            <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
            <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
            <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div> */}
            <GiCampCookingPot  size={200}/>
            
    </div>
    </div>
    
  )
}

export default Loader
