import React from "react";
import back from "../assets/Background.png"
import photo from "../assets/Photo444.png"
import logo1 from "../assets/logoService (1).svg"
import logo2 from "../assets/logoService (2).svg"
import logo3 from "../assets/logoService (3).svg"
import serc from "../assets/sercviece.png"
import icon from "../assets/VideoIcon.png"

const Service = () => {
  return (
    <div>
      <div className='w-[100%] h-[450px] bg-[url("./assets/Background.png")] bg-cover bg-no-repeat bg-center flex justify-center items-center '>
        <h1 className="sm:text-[50px] text-[80px] text-[#274C5B] font-[800] ">
        Services
        </h1>
      </div>

      <div className=" w-[100%] h-[auto] flex flex-col items-center pt-[100px] pb-[100px] bg-[white]">
          <p className="text-[36px] text-[#7EB693] italic ">What we Grow</p>
          <h1 className="w-[500px] text-[50px] text-center text-[#274C5B] font-[600] ">Better Agriculture for Better Future</h1>
          <div className="sm:flex-col lg:flex-row w-[90%] flex justify-evenly">
            <div className="flex flex-col gap-[60px] justify-center">
                <div className="sm:text-[center] sm:items-center w-[] flex flex-col items-end">
                  <img src={logo1} alt="" />
                  <h1 className="text-[25px] text-[#274C5B] font-[600]">Dairy Products</h1>
                  <p className="sm:text-center sm:w-[300px] lg:text-[12px] lg:w-[200px] xl:w-[300px] text-end xl:text-[14px] text-[#525C60]">Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</p>
                </div>

                <div className="sm:text-[center] sm:items-center w-[] flex flex-col items-end">
                  <img src={logo2} alt="" />
                  <h1 className="text-[25px] text-[#274C5B] font-[600]">Dairy Products</h1>
                  <p className="sm:text-center sm:w-[300px] lg:text-[12px] lg:w-[200px] xl:w-[300px] text-end xl:text-[14px] text-[#525C60]">Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</p>
                </div>

                <div className="sm:text-[center] sm:items-center w-[] flex flex-col items-end">
                  <img src={logo3} alt="" />
                  <h1 className="text-[25px] text-[#274C5B] font-[600]">Dairy Products</h1>
                  <p className="sm:text-center sm:w-[300px] lg:text-[12px] lg:w-[200px] xl:w-[300px] text-end xl:text-[14px] text-[#525C60]">Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</p>
                </div>
            </div>


            <img className="lg:w-[500px]" src={photo} alt="" />


            <div className="flex flex-col gap-[60px] justify-center">
                <div className="sm:text-[center] sm:items-center w-[] flex flex-col items-start">
                  <img src={logo1} alt="" />
                  <h1 className="text-[25px] text-[#274C5B] font-[600]">Dairy Products</h1>
                  <p className="sm:text-center sm:w-[300px] lg:text-[12px] lg:w-[200px] xl:w-[300px] text-start xl:text-[14px] text-[#525C60]">Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</p>
                </div>

                <div className="sm:text-[center] sm:items-center w-[] flex flex-col items-start">
                  <img src={logo2} alt="" />
                  <h1 className="text-[25px] text-[#274C5B] font-[600]">Dairy Products</h1>
                  <p className="sm:text-center sm:w-[300px] lg:text-[12px] lg:w-[200px] xl:w-[300px] text-start xl:text-[14px] text-[#525C60]">Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</p>
                </div>

                <div className="sm:text-[center] sm:items-center w-[] flex flex-col items-start">
                  <img src={logo3} alt="" />
                  <h1 className="text-[25px] text-[#274C5B] font-[600]">Dairy Products</h1>
                  <p className="sm:text-center sm:w-[300px] lg:text-[12px] lg:w-[200px] xl:w-[300px] text-start xl:text-[14px] text-[#525C60]">Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</p>
                </div>
            </div>
          </div>
          <button className="w-[180px] rounded-[10px] h-[80px] border-[2px] border-[solid] border-[#335B6B] text-[20px] font-[600] bg-transparent text-[#335B6B]">Explore More</button>
      </div>

      <div className='w-[100%] h-[800px] bg-[url("./assets/sercviece.png")] bg-cover bg-no-repeat bg-center mb-[100px] flex flex-col justify-start pt-[100px] items-center'>
          <div className="flex flex-col gap-[10px] items-center justify-center">
              <p className="text-[#7EB693] text-[36px] italic">Organic Only</p>
              <h1 className="text-[50px] text-[#274C5B] text-center font-[800]">Everyday Fresh & Clean</h1>
              <p className="w-[600px] text-[#274C5B] text-center text-[18px] ">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the </p>
              <img src={icon} alt="" />
          </div>
      </div>
    </div>
  );
};

export default Service;
