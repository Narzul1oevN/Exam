import React, { useEffect } from "react";
import bground from "../assets/sss.png";
import www from "../assets/wwewewe.png"
import ww3 from "../assets/wwwewe (1).png"
import io from "../assets/ioio.png"
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="bg-[white]">
      <div className='w-[100%] h-[450px] bg-[url("./assets/sss.png")] bg-cover bg-no-repeat bg-center flex justify-center items-center'>
        <h1 className="sm:text-[40px] md:text-[44px] lg:text-[48px] xl:text-[52px] text-[white] text-[52px] font-[800] text-center">
          About our story - We are <br /> the best team
        </h1>
      </div>

      <div className= "dark:bg-[#22406e] w-[100%] h-[auto] pt-[50px] pb-[50px] flex flex-wrap gap-[100px] justify-center items-center ">
        <img src={io} alt="" />
        <div className="w-[510px] flex flex-col gap-[20px] items-start">
          <h1 className="dark:text-[white]  text-[24px] text-[#056088] font-[700]">Here were the story begins</h1>
          <p className="dark:text-[white]  text-[#434343] text-[16px] text-justify">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          <p className="dark:text-[white]  text-[#434343] text-[16px] text-justify">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>
      </div>
      
      <div  className='w-[100%] h-[auto] pt-[50px] pb-[50px] bg-[url("./assets/wwewewe.png")] bg-cover bg-no-repeat bg-center flex flex-wrap gap-[50px] items-center justify-center  mt-[30px] mb-[50px]'>
      <div data-aos="zoom-out-right" className="w-[530px] h-auto flex flex-col gap-[30px] items-start">
          <h1 className="text-[white] text-[32px] font-[800]">We love to make perfect   <span className="italic">home</span></h1>
          <p className="w-[510px] text-[white] text-justify text-[16px]">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>
        <img data-aos="zoom-out-left" src={ww3} alt="" />
      </div>


          {/* footer */}
          <div className="w-[100%] h-auto bg-[#023957]  flex flex-wrap gap-[100px] items-center justify-center pt-[50px]    "> 
          <div className="flex flex-col gap-[10px]">
            <h1 className="text-[66px] font-[700] text-[white]">DB-</h1>
            <p className="w-[180px] text-[16px] text-[white]">Lizenzo street number 12 Jakarta, Indonesia</p>
            <button className="w-[130px] h-[62px] bg-gradient-to-r from-cyan-700 to-blue-500 text-[white]">
            Get directions
          </button>
          </div>

          <div className="w-[70px] flex flex-col items-start gap-[20px]">
            <h1 className="text-[24px] text-[white] font-[800]">Menu</h1>
            <p className="text-[16px] text-[white]">Home</p>
            <p className="text-[16px] text-[white]">About</p>
            <p className="text-[16px] text-[white]">Gallery</p>
            <p className="text-[16px] text-[white]">Service</p>
          </div>

          <div className="w-[70px] flex flex-col items-start gap-[20px]">
            <h1 className="text-[24px] text-[white] font-[800]">Contact</h1>
            <p className="text-[16px] text-[white]">E-mail</p>
            <p className="text-[16px] text-[white]">Mobile</p>
            <p className="text-[16px] text-[white]">Whatsapp</p>
            <p className="text-[16px] text-[white]">Fax</p>
          </div>

          <div className="w-[70px] flex flex-col items-start gap-[20px]">
            <h1 className="text-[24px] text-[white] font-[800]">Career</h1>
            <p className="text-[16px] text-[white]">Job</p>
            <p className="text-[16px] text-[white]">Part-time</p>
            <p className="text-[16px] text-[white]">Intership</p>
            <p className="text-[16px] text-[white]">Service</p>
          </div>

          <div className="w-[70px] flex flex-col items-start gap-[20px]">
            <h1 className="text-[24px] text-[white] font-[800]">Business</h1>
            <p className="text-[16px] text-[white]">Affiliate</p>
            <p className="text-[16px] text-[white]">Collaboration</p>
            <p className="text-[16px] text-[white]">Investment</p>
            <p className="text-[16px] text-[white]">People</p>
          </div>

          <div className="w-[100%] h-[80px] bg-[white] flex justify-center items-center">
            <p className="text-[16px] text-[#434343]">2021 - Copyright ZHB Studio</p>
          </div>
      </div>
    </div>
  );
};

export default About;
