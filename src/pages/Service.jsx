import React from "react";
import icon1 from "../assets/ic_baseline-design-services (2).png";
import icon2 from "../assets/mdi_sofa.png";
import xat1 from "../assets/oo1.png"
import pen from "../assets/img554.png"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './service.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';


const Service = () => {
  return (
    <div className="dark:bg-[#2c5797] bg-[white]">
      {/* header */}
      <div className='w-[100%] h-[450px] bg-[url("./assets/sss.png")] bg-cover bg-no-repeat bg-center flex justify-center items-center'>
        <h1 className="sm:text-[40px] md:text-[44px] lg:text-[48px] xl:text-[52px] text-[white]  font-[800] text-center">
        Our team services
        </h1>
      </div>



      <div className="dark:bg-[#2c5797] sm:pb-[800px] md:pb-[600px] lg:pb-[500px] xl:pb-[400px] sm:pt-[800px] md:pt-[600px] lg:pt-[500px] xl:pt-[400px] w-[100%] h-[500px] flex flex-col justify-center items-center gap-[30px] pt-[200px]">
        <h1 className="dark:text-[white] text-[#056088] text-[24px] font-[800]">
          Our services
        </h1>
        <p className="dark:text-[white] w-[348px] text-[#434343] text-[16px] text-center">
          Our services include building new buildings and renovating old
          buildings
        </p>
        <div className="w-[90%] flex gap-[30px] justify-center">


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
        <SwiperSlide>         
          <div
            data-aos="flip-left"
            className='w-[310px] h-[240px] bg-[url("./assets/Rec.png")] bg-cover bg-no-repeat bg-center flex flex-col gap-[20px] p-[20px] '
          >
            <img className="w-[80px] h-[80px]" src={icon1} alt="" />
            <h1 className="text-[20px] text-[#FFFFFF] font-[700]">
              Design building/house
            </h1>
            <p className="w-[230px] text-[16px] text-[#FFFFFF] font-[700]">
              We have an architect for design new buildings
            </p>
          </div>
          </SwiperSlide>
        <SwiperSlide>          <div
            data-aos="flip-left"
            className="w-[310px] h-[240px]  flex flex-col gap-[20px] p-[20px] "
          >
            <img className="w-[80px] h-[80px] " src={icon2} alt="" />
            <h1 className="dark:text-[white] text-[20px] text-[#434343] font-[700]">
              Design building/house
            </h1>
            <p className="dark:text-[white] w-[230px] text-[16px] text-[#434343] font-[700]">
              We have an architect for design new buildings
            </p>
          </div></SwiperSlide>
        <SwiperSlide>          <div
            data-aos="flip-left"
            className="w-[310px] h-[240px]  flex flex-col gap-[20px] p-[20px] "
          >
            <img className="w-[80px] h-[80px] " src={icon2} alt="" />
            <h1 className="dark:text-[white] text-[20px] text-[#434343] font-[700]">
              Design building/house
            </h1>
            <p className="dark:text-[white] w-[230px] text-[16px] text-[#434343] font-[700]">
              We have an architect for design new buildings
            </p>
          </div></SwiperSlide>
        <SwiperSlide>          <div
            data-aos="flip-left"
            className='w-[310px] h-[240px] bg-[url("./assets/Rec.png")] bg-cover bg-no-repeat bg-center flex flex-col gap-[20px] p-[20px] '
          >
            <img className="w-[80px] h-[80px]" src={icon1} alt="" />
            <h1 className="text-[20px] text-[#FFFFFF] font-[700]">
              Design building/house
            </h1>
            <p className="w-[230px] text-[16px] text-[#FFFFFF] font-[700]">
              We have an architect for design new buildings
            </p>
          </div></SwiperSlide>
        <SwiperSlide>          <div
            data-aos="flip-left"
            className="w-[310px] h-[240px]  flex flex-col gap-[20px] p-[20px] "
          >
            <img className="w-[80px] h-[80px] " src={icon2} alt="" />
            <h1 className="dark:text-[white] text-[20px] text-[#434343] font-[700]">
              Design building/house
            </h1>
            <p className="dark:text-[white] w-[230px] text-[16px] text-[#434343] font-[700]">
              We have an architect for design new buildings
            </p>
          </div></SwiperSlide>
        <SwiperSlide>          <div
            data-aos="flip-left"
            className="w-[310px] h-[240px]  flex flex-col gap-[20px] p-[20px] "
          >
            <img className="w-[80px] h-[80px] " src={icon2} alt="" />
            <h1 className="dark:text-[white] text-[20px] text-[#434343] font-[700]">
              Design building/house
            </h1>
            <p className="dark:text-[white] w-[230px] text-[16px] text-[#434343] font-[700]">
              We have an architect for design new buildings
            </p>
          </div></SwiperSlide>

      </Swiper>
        </div>
      </div>







    <div className="h-[auto] pt-[20px] pb-[100px] flex flex-col gap-[50px]">
      <div className='bg-[url("./assets/BG.png")] bg-cover bg-no-repeat bg-center m-auto flex items-center w-[70%] h-[428px]  '>
        <div data-aos="fade-up">
          <img className="sm:hidden xl:block" src={xat1} alt="" />
        </div>
        <div
          data-aos="fade-down"
          className='bg-[url("./src/assets/xat2.png")] w-[600px] h-[428px] flex flex-col items-center justify-center gap-[30px]  '
        >
          <h1 className="text-[white] font-[700] text-[24px]">
            Design building / house
          </h1>
          <p className= "sm:w-[400px] sm:text-[14px] md:w-[420px] md:text-[15px] lg:w-[450px] lg:text-[16px] xl:w-[470px] xl:text-[16px] text-[#FFFFFF] font-[400] text-[16px] w-[470px]">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged.
          </p>
        </div>
      </div>

      <div className=' bg-[url("./assets/BG.png")] bg-cover bg-no-repeat bg-center m-auto flex items-center w-[70%] h-[390px] justify-around'>
        <div
          data-aos="fade-down"
          className=' w-[750px] h-[328px]  flex items-center justify-center mb-[150px]'
        >
          <h1 className="sm:w-[400px] sm:text-[14px] md:w-[420px] md:text-[15px] lg:w-[450px] lg:text-[16px] xl:w-[470px] xl:text-[16px] text-[#FFFFFF] font-[400] text-[16px] w-[450px]">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged.
          </h1>
        </div>
        <div data-aos="fade-up-">
          <img className="sm:hidden xl:block" src={pen} alt="" />
        </div>
      </div>
    </div>

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

export default Service;
