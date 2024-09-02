import React from "react";
import l1 from "../assets/suratikalon.png"
import l2 from "../assets/fon.png"
import l3 from "../assets/cardPhoto1.png"
import l4 from "../assets/cardphoto2.png"
import l5 from "../assets/cardphoto3.png"
import r1 from "../assets/r1.png";
import r2 from "../assets/r2.png";
import r3 from "../assets/r3.png";
import wee from "../assets/we.png"
import sec2 from "../assets/imgpp.png"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const ProccesDetalis = () => {
  return (
    <div className="dark:bg-slate-800">
      {/* header */}
      <div className='w-[100%] h-[450px] bg-[url("./assets/sss.png")] bg-cover bg-no-repeat bg-center flex justify-center items-center'>
        <h1 className="sm:text-[40px] md:text-[44px] lg:text-[48px] xl:text-[52px] text-[white]  font-[800] text-center">
        Process details : Build villa two floors
        </h1>
      </div>


      <div className="dark:bg-slate-800 w-[100%] h-auto pt-[50px] pb-[50px] flex flex-wrap gap-[50px] items-center justify-center">
        <div className="w-[511px] h-auto flex flex-col gap-[10px] items-start">
          <h1 className="dark:text-[white] text-[#056088] text-[24px] font-[800]">Villa De Borusdz</h1>
          <p className="dark:text-[white] text-[16px] text-[#434343] text-justify">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          <div className="flex gap-[50px] items-center">
          <h1 className="dark:text-[white] text-[#056088] text-[24px] font-[800]">Budget : $90.000</h1>
          <h1 className="dark:text-[white] text-[#056088] text-[24px] font-[800]">Time : 3 months</h1>
          </div>
        </div>

        <img src={sec2} alt="" />
      </div>



      <div>
        <img
          className="w-[1300px h-[436px] m-auto mt-[100px]"
          src={wee}
          alt=""
        />
      </div>

      <div className='bg-[url("./assets/fon.png")] w-full h-[580px] bg-no-repeat bg-cover mt-[-330px]'></div>

      <div className="mb-[200px] flex flex-wrap gap-[50px] relative w-[80%] justify-center m-auto top-[-100px]">
      {/* images */}


      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>        <img className="w-[420px] h-[260px] mt-[-70px]" src={r1} alt="" /></SwiperSlide>
        <SwiperSlide>        <img className="w-[420px] h-[260px] mt-[-70px]" src={r2} alt="" /></SwiperSlide>
        <SwiperSlide>        <img className="w-[420px] h-[260px] mt-[-70px]" src={r3} alt="" /></SwiperSlide>
        <SwiperSlide>        <img className="w-[420px] h-[260px] mt-[-70px]" src={r1} alt="" /></SwiperSlide>
        <SwiperSlide>        <img className="w-[420px] h-[260px] mt-[-70px]" src={r2} alt="" /></SwiperSlide>
        <SwiperSlide>        <img className="w-[420px] h-[260px] mt-[-70px]" src={r3} alt="" /></SwiperSlide>

      </Swiper>
      
     




      </div>
      
      <h1 className="text-[#056088] font-[700] text-[24px] text-center relative ">
        See more
      </h1>

      {/* footer */}
      <div className="w-[100%] h-auto bg-[#023957]  flex flex-wrap gap-[100px] items-center justify-center pt-[50px]    ">
        <div className="flex flex-col gap-[10px]">
          <h1 className="text-[66px] font-[700] text-[white]">DB-</h1>
          <p className="w-[180px] text-[16px] text-[white]">
            Lizenzo street number 12 Jakarta, Indonesia
          </p>
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
          <p className="text-[16px] text-[#434343]">
            2021 - Copyright ZHB Studio
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProccesDetalis;
