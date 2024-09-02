import React from "react";
import Man1 from "../assets/man1.png";
import Man2 from "../assets/man2.png";
import Man3 from "../assets/man3.png";
import r1 from "../assets/r1.png";
import r2 from "../assets/r2.png";
import r3 from "../assets/r3.png";
import bg from "../assets/BG.png"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './contact.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const OurStory = () => {
  return (
    <div className="dark:bg-slate-800">
      {/* header */}
      <div className='w-[100%] h-[450px] bg-[url("./assets/sss.png")] bg-cover bg-no-repeat bg-center flex justify-center items-center'>
        <h1 className="sm:text-[40px] md:text-[44px] lg:text-[48px] xl:text-[52px] text-[white]  font-[800] text-center">
          Read some story from clients!
        </h1>
      </div>

      <div className="dark:bg-slate-800 w-[full] justify-center h-[auto] pb-[150px] flex flex-wrap gap-[50px] bg-[white] pt-[75px] ">
       
       
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
        <SwiperSlide>        <div
          data-aos="flip-up"
          className='bg-[url("./assets/Rec.png")] bg-center w-[416px] p-[20px] h-[373px] bg-no-repeat bg-cover flex flex-col justify-around '
        >
          <img className="w-[102px]  h-[102px]" src={Man1} alt="" />
          <p className="text-[#FFFFFF] font-[400] text-[16px] w-[310px]">
            I really happy to see the result my new home. It’s really good house
            and good price too. And they work so fast becasue they have the best
            team. Once again, thankyou. I really appreciate it.
          </p>
          <h3 className="text-[#FFFFFF] font-[600] text-[16px]">- Mr. James</h3>
        </div></SwiperSlide>
        <SwiperSlide>        <div
          data-aos="flip-up"
          className="w-[416px] h-[373px] shadow-lg p-[20px] shadow-indigo-500/40 flex flex-col justify-around"
        >
          <img className="w-[102px] h-[102px]" src={Man2} alt="" />
          <p className="dark:text-[white] text-[black] font-[400] text-[16px] w-[310px]">
            I really happy to see the result my new home. It’s really good house
            and good price too. And they work so fast becasue they have the best
            team. Once again, thankyou. I really appreciate it.
          </p>
          <h3 className="dark:text-[white]  text-[black] font-[600] text-[16px]">
            - Mr. Ahmed
          </h3>
        </div></SwiperSlide>
        <SwiperSlide>        <div
          data-aos="flip-up"
          className="w-[416px] h-[373px]   shadow-lg shadow-indigo-500/40  flex flex-col justify-around pl-[30px]"
        >
          <img className="w-[102px] h-[102px]" src={Man3} alt="" />
          <p className="text-[black] font-[400] text-[16px] w-[310px] dark:text-[white]">
            I really happy to see the result my new home. It’s really good house
            and good price too. And they work so fast becasue they have the best
            team. Once again, thankyou. I really appreciate it.
          </p>
          <h3 className="text-[black] font-[600] text-[16px] dark:text-[white]">
            - Mr. Marco
          </h3>
        </div></SwiperSlide>
        <SwiperSlide>        <div
          data-aos="flip-up"
          className='bg-[url("./assets/Rec.png")] bg-center w-[416px] p-[20px] h-[373px] bg-no-repeat bg-cover flex flex-col justify-around '
        >
          <img className="w-[102px]  h-[102px]" src={Man1} alt="" />
          <p className="text-[#FFFFFF] font-[400] text-[16px] w-[310px]">
            I really happy to see the result my new home. It’s really good house
            and good price too. And they work so fast becasue they have the best
            team. Once again, thankyou. I really appreciate it.
          </p>
          <h3 className="text-[#FFFFFF] font-[600] text-[16px]">- Mr. James</h3>
        </div></SwiperSlide>
        <SwiperSlide>        <div
          data-aos="flip-up"
          className="w-[416px] h-[373px] shadow-lg p-[20px] shadow-indigo-500/40 flex flex-col justify-around"
        >
          <img className="w-[102px] h-[102px]" src={Man2} alt="" />
          <p className="dark:text-[white] text-[black] font-[400] text-[16px] w-[310px]">
            I really happy to see the result my new home. It’s really good house
            and good price too. And they work so fast becasue they have the best
            team. Once again, thankyou. I really appreciate it.
          </p>
          <h3 className="dark:text-[white]  text-[black] font-[600] text-[16px]">
            - Mr. Ahmed
          </h3>
        </div></SwiperSlide>
        <SwiperSlide>        <div
          data-aos="flip-up"
          className="w-[416px] h-[373px]   shadow-lg shadow-indigo-500/40  flex flex-col justify-around pl-[30px]"
        >
          <img className="w-[102px] h-[102px]" src={Man3} alt="" />
          <p className="text-[black] font-[400] text-[16px] w-[310px] dark:text-[white]">
            I really happy to see the result my new home. It’s really good house
            and good price too. And they work so fast becasue they have the best
            team. Once again, thankyou. I really appreciate it.
          </p>
          <h3 className="text-[black] font-[600] text-[16px] dark:text-[white]">
            - Mr. Marco
          </h3>
        </div></SwiperSlide>

      </Swiper>
       
       
       





      </div>

      <div className='w-[100%] h-[auto] pt-[50px] pb-[50px] flex flex-wrap items-center justify-center gap-[100px] bg-[url("./assets/BG.png")] bg-cover bg-no-repeat bg-center'>
        <img src={Man1} className="w-[300px] h-[300px] rounded-[50%]" alt="" />
        <div className="w-[517px] h-[auto] flex flex-col gap-[20px] items-start">
          <h1 className="text-[24px] text-[white] font-[800]">Mr. James’s says : “I’m so happy!”</h1>
          <p className="w-[517px] text-justify text-[white] text-[16px]">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>
      </div>

      {/* images */}
      <div className="dark:bg-slate-800 w-full h-[auto] pt-[150px] pb-[50px] justify-center bg-[white] mt-[-36px] flex flex-wrap gap-[50px] items-center  ">
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

export default OurStory;
