import React from "react";
import port from "../assets/portfolio.png"
import vega1 from "../assets/vage1 (1).png"
import vega2 from "../assets/vage1 (2).png"
import vega3 from "../assets/vage1 (3).png"
import vega4 from "../assets/vage1 (4).png"
import vega5 from "../assets/vage1 (5).png"
import vega6 from "../assets/vage1 (6).png"


const Portfolio = () => {
  return (
    <div>
      <div className='w-[100%] h-[450px] bg-[url("./assets/portfolio.png")] bg-cover bg-no-repeat bg-center flex justify-center items-center '>
        <h1 className="sm:text-[50px] text-[80px] text-[#274C5B] font-[800] ">Portfolio Standard</h1>
      </div>

      <div className="w-[100%] h-[auto] pt-[100px] pb-[100px]">
        <div className="sm:justify-center w-[80%] m-[auto] flex flex-wrap gap-[50px]">

          <div className="w-[] h-[] flex flex-col  items-start">
            <img className="w-[350px]" src={vega1} alt="" />
            <h1 className="text-[25px] text-[#274C5B]">Green & Tasty Lemon</h1>
          </div>

          <div className="w-[] h-[] flex flex-col  items-start">
            <img className="w-[350px]" src={vega2} alt="" />
            <h1 className="text-[25px] text-[#274C5B]">Green & Tasty Lemon</h1>
          </div>

          <div className="w-[] h-[] flex flex-col  items-start">
            <img className="w-[350px]" src={vega3} alt="" />
            <h1 className="text-[25px] text-[#274C5B]">Green & Tasty Lemon</h1>
          </div>

          <div className="w-[] h-[] flex flex-col  items-start">
            <img className="w-[350px]" src={vega4} alt="" />
            <h1 className="text-[25px] text-[#274C5B]">Green & Tasty Lemon</h1>
          </div>

          <div className="w-[] h-[] flex flex-col  items-start">
            <img className="w-[350px]" src={vega5} alt="" />
            <h1 className="text-[25px] text-[#274C5B]">Green & Tasty Lemon</h1>
          </div>

          <div className="w-[] h-[] flex flex-col  items-start">
            <img className="w-[350px]" src={vega6} alt="" />
            <h1 className="text-[25px] text-[#274C5B]">Green & Tasty Lemon</h1>
          </div>


        </div>
      </div>

    </div>
  );
};

export default Portfolio;
