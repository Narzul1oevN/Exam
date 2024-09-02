import React, { useEffect } from "react";
import io from "../assets/ioio.png"
import page3 from "../assets/page3.png"
import AOS from "aos";
import "aos/dist/aos.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './contact.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Contact = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="bg-[white]">
        {/* header */}
      <div className='w-[100%] h-[450px] bg-[url("./assets/sss.png")] bg-cover bg-no-repeat bg-center flex justify-center items-center'>
        <h1 className="sm:text-[40px] md:text-[44px] lg:text-[48px] xl:text-[52px] text-[white] text-[52px] font-[800] text-center">
        Need some consultation or want to <br /> collaborarion with us? Let’s connect!
        </h1>
      </div>



      <div className= "dark:bg-[#22406e] w-[100%] h-[auto] pt-[50px] pb-[50px] flex flex-wrap justify-center items-center ">
        <img  src={page3} alt="" />
        <div  className="dark:bg-[#567db9] sm:w-[530px] md:w-[530px] lg:w-[580px] xl:w-[769px] h-[481px] flex flex-col gap-[20px] items-start p-[20px] bg-[#F5F5F5]">
          <h1 className="dark:text-[white] text-[24px] text-[#056088] font-[700]">Let’s talk about anything you need</h1>
          <div className="flex flex-wrap gap-[30px] items-center">
            <input type="text" className="w-[340px] h-[50px] bg-[white] p-[10px]" placeholder="Your name/company name" name="" id="" />
            <input type="text" className="w-[340px] h-[50px] bg-[white] p-[10px]" placeholder="Phone/E-mail" name="" id="" />
          </div>
          <textarea placeholder="Message" className="sm:w-[450px] md:w-[480px] lg:w-[500px] xl:w-[710px] h-[183px] bg-white p-[10px]" name="" id="" cols="30" rows="10"></textarea>
          <button className="w-[130px] h-[62px] bg-gradient-to-r from-cyan-700 to-blue-500 text-[white]">
          Submit
          </button>
        </div>
      </div>

      <div className="dark:bg-[#22406e] w-[100%] h-[auto] pt-[50px] pb-[50px] flex flex-col gap-[50px] ">
        <h1 className="text-[24px] text-[#056088] text-center font-[800]">Or contact us via e-mails or even mobile call or Whatsapp messages</h1>
        <div className="">

        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>          <h1 className="w-[200px] flex justify-center items-center h-[70px] bg-gradient-to-r from-cyan-700 to-blue-500 text-[white]">E-mails</h1></SwiperSlide>
        <SwiperSlide>          <h1 className="w-[200px] flex justify-center items-center h-[70px] bg-gradient-to-r from-cyan-700 to-blue-500 text-[white]">Whatsapp</h1></SwiperSlide>
        <SwiperSlide>          <h1 className="w-[200px] flex justify-center items-center h-[70px] bg-gradient-to-r from-cyan-700 to-blue-500 text-[white]">Message</h1></SwiperSlide>
        <SwiperSlide>          <h1 className="w-[200px] flex justify-center items-center h-[70px] bg-gradient-to-r from-cyan-700 to-blue-500 text-[white]">E-mails</h1></SwiperSlide>
        <SwiperSlide>          <h1 className="w-[200px] flex justify-center items-center h-[70px] bg-gradient-to-r from-cyan-700 to-blue-500 text-[white]">Whatsapp</h1></SwiperSlide>
        <SwiperSlide>          <h1 className="w-[200px] flex justify-center items-center h-[70px] bg-gradient-to-r from-cyan-700 to-blue-500 text-[white]">Message</h1></SwiperSlide>

      </Swiper>






        </div>
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

export default Contact;
