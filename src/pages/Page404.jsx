import React from 'react'
import rt from "../assets/rt.png"

const Page404 = () => {
  return (
    <div>
      <div className='w-[100%] flex justify-end bg-[url("./assets/rt.png")] bg-cover bg-no-repeat bg-center mb-[100px]'>
          <div className='text-center flex flex-col pb-[100px]'>
            <h1 className='sm:text-[400px] md:text-[450px] lg:text-[500px] xl:text-[520px] text-[#8FA8A8] '>404</h1>
            <h1 className='sm:text-[30px] md:text-[40px] lg:text-[50px] xl:text-[70px] font-[800] text-[#274C5B] mt-[-100px]'>Not Found</h1>
          </div>
      </div>
    </div>
  )
}

export default Page404
