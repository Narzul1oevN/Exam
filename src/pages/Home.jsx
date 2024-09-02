import React, { useEffect, useState } from "react";
import bgImage from "../assets/IMG.png";
import image1 from "../assets/Rectangle 5.png";
import image2 from "../assets/Rectangle 8.png";
import image3 from "../assets/Rectangle 6.png";
import image4 from "../assets/Rectangle 7.png";
import card1 from "../assets/Rec.png";
import uuuu from "../assets/uuu.png";
import yyy from "../assets/fewf.png";
import icon1 from "../assets/ic_baseline-design-services (2).png";
import icon2 from "../assets/mdi_sofa.png";
import bgimagee from "../assets/qqq.png";
import photo1 from "../assets/1.png";
import photo2 from "../assets/2.png";
import photo3 from "../assets/3.png";
import photo4 from "../assets/4.png";
import photo5 from "../assets/5.png";
import photo6 from "../assets/6.png";
import photo7 from "../assets/7.png";
import photo8 from "../assets/8.png";
import photo9 from "../assets/9.png";
import ppp from "../assets/ppp.png";
import avatart from "../assets/avatart.png";
import AOS from "aos";
import "aos/dist/aos.css";
import video from "../assets/Video.png";
import bg from "../assets/BG.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./home.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { useTranslation } from "react-i18next";

const Home = () => {

  const [age, setAge] = useState("");
  const { i18n, t } = useTranslation();



  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <div className="w-[100%] h-[700px]">
        <div className="sm:h-[auto] sm:flex sm:flex-col sm:items-start sm:gap-[50px] lg:flex-row   w-[100%] h-[690px] bg-gradient-to-r from-cyan-950 to-blue-500 flex justify-start items-center ">
          <div className="sm:h-[auto] sm:pb-[50px] md:pb-[100px] sm:left-[50px] pt-[300px] pb-[300px] w-[45%] h-[auto] flex flex-col gap-[30px] relative justify-center ">
            <h1 className="sm:w-[500px] md:w-[550px] lg:w-[600px] xl:w-[740px] sm:text-[32px] md:text-[42px] lg:text-[48px]  xl:text-[52px] font-[900] text-[white]">
            {t("sec11")}
            </h1>
            <p className="sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[445px]  sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-[white]">
            {t("sec12")}
            </p>
            <button className="w-[120px] h-[60px] bg-gradient-to-t from-cyan-700 to-blue-500 border-[2px] border-[solid] border-[green] text-[white] font-[600]">
            {t("sec13")}
            </button>
          </div>
          <img
            className="lg:hidden xl:block sm:w-[100%] w-[55%]"
            src={bgImage}
            alt=""
          />
        </div>
      </div>

      <div className="dark:bg-[#22406e]  sm:pb-[400px] md:pb-[200px] lg:pb-[100px] sm:flex-col sm:mt-[300px] md:flex-col md:mt-[700px] w-[100%] lg:flex-row lg:mt-[0px] h-[full] pt-[200px] flex justify-evenly gap-[30px] items-center ">
        {/* sec2Images */}
        <div
          data-aos="fade-down-right"
          className="w-[640px] h-[419px] grid grid-cols-2 gap-[10px]"
        >
          <img src={image1} alt="" />
          <img src={image2} alt="" />
          <img src={image3} alt="" />
          <img className="mt-[-83px]" src={image4} alt="" />
        </div>

        <div
          data-aos="fade-down-left"
          className="dark:text-[white] flex flex-col gap-[20px]"
        >
          <h1 className="dark:text-[white] text-[24px] text-[#056088] font-[800]  ">
          {t("sec31")}
          </h1>
          <p className=" dark:text-[white] w-[425px] text-[16px] text-[#434343]">
          {t("sec22")}
          </p>
          <p className=" dark:text-[white] text-[16px] text-[#434343] font-[600]">
          {t("sec23")}
          </p>
          <div className="flex items-center gap-[20px]">
            <h1 className="dark:text-[white] text-[#056088] text-[20px] font-[800]">
            {t("sec24")}
            </h1>
            <h1 className="dark:text-[white] text-[#056088] text-[20px] font-[800]">
            {t("sec25")}
            </h1>
            <h1 className="dark:text-[white] text-[#056088] text-[20px] font-[800]">
            {t("sec26")}
            </h1>
          </div>
          <button className="w-[120px] h-[60px] bg text-[white] text-[] font-[600] bg-gradient-to-r from-cyan-700 to-blue-500">
          {t("sec27")}
          </button>
        </div>
      </div>

      <div className="dark:bg-[#2c5797] sm:pb-[800px] md:pb-[600px] lg:pb-[500px] xl:pb-[400px] w-[100%] h-[500px] flex flex-col justify-center items-center gap-[30px] pt-[200px]">
        <h1 className="dark:text-[white] text-[#056088] text-[24px] font-[800]">
        {t("sec31")}
        </h1>
        <p className="dark:text-[white] w-[348px] text-[#434343] text-[16px] text-center">
        {t("sec32")}
        </p>
        <div className="w-[90%] flex flex-wrap gap-[30px] justify-center">
          <div
            data-aos="flip-left"
            className='w-[310px] h-[240px] bg-[url("./assets/Rec.png")] bg-cover bg-no-repeat bg-center flex flex-col gap-[20px] p-[20px] '
          >
            <img className="w-[80px] h-[80px]" src={icon1} alt="" />
            <h1 className="text-[20px] text-[#FFFFFF] font-[700]">
                          {t("sec33")}
            </h1>
            <p className="w-[230px] text-[16px] text-[#FFFFFF] font-[700]">
                          {t("sec34")}
            </p>
          </div>

          <div
            data-aos="flip-left"
            className="w-[310px] h-[240px]  flex flex-col gap-[20px] p-[20px] "
          >
            <img className="w-[80px] h-[80px] " src={icon2} alt="" />
            <h1 className="dark:text-[white] text-[20px] text-[#434343] font-[700]">
                          {t("sec33")}
            </h1>
            <p className="dark:text-[white] w-[230px] text-[16px] text-[#434343] font-[700]">
                          {t("sec34")}
            </p>
          </div>

          <div
            data-aos="flip-left"
            className="w-[310px] h-[240px]  flex flex-col gap-[20px] p-[20px] "
          >
            <img className="w-[80px] h-[80px] " src={icon2} alt="" />
            <h1 className="dark:text-[white] text-[20px] text-[#434343] font-[700]">
                          {t("sec33")}
            </h1>
            <p className="dark:text-[white] w-[230px] text-[16px] text-[#434343] font-[700]">
                          {t("sec34")}
            </p>
          </div>

          <div
            data-aos="flip-left"
            className="w-[310px] h-[240px]  flex flex-col gap-[20px] p-[20px] "
          >
            <img className="w-[80px] h-[80px] " src={icon2} alt="" />
            <h1 className="dark:text-[white] text-[20px] text-[#434343] font-[700]">
                          {t("sec33")}
            </h1>
            <p className="dark:text-[white] w-[230px] text-[16px] text-[#434343] font-[700]">
                          {t("sec34")}
            </p>
          </div>
        </div>
      </div>

      <div className="dark:bg-[#2c5797] sm:pb-[400px] md:pb-[200px] lg:pb-[100px] sm:pt-[500px] md:pt-[100px] w-[100%] h-[600px]  flex flex-col justify-center items-center gap-[30px] ">
        <h1 className="dark:text-[white] text-[#056088] text-[24px] font-[800]">
        {t("sec41")}
        </h1>
        <p className="dark:text-[white] w-[348px] text-[#434343] text-[16px] text-center">
        {t("sec42")}
        </p>
        <div className="w-[90%] flex flex-wrap gap-[30px] justify-center">
          <div
            data-aos="fade-right"
            className='w-[420px] h-[310px] bg-[url("./assets/uuu.png")] bg-cover bg-no-repeat bg-center flex flex-col items-center gap-[20px] p-[20px] '
          >
            <img className="w-[80px] h-[80px]" src={yyy} alt="" />
            <h1 className="dark:text-[white] text-[20px] text-[#FFFFFF] font-[700]">
                          {t("sec43")}
            </h1>
            <p className="dark:text-[white] w-[230px] text-[16px] text-[#FFFFFF] font-[500] text-center">
                          {t("sec44")}
            </p>
          </div>

          <div
            data-aos="fade-up"
            className='w-[420px] h-[310px] bg-[url("./assets/uuu.png")] bg-cover bg-no-repeat bg-center flex flex-col items-center gap-[20px] p-[20px] '
          >
            <img className="w-[80px] h-[80px]" src={yyy} alt="" />
            <h1 className="dark:text-[white] text-[20px] text-[white] font-[700]">
                          {t("sec43")}
            </h1>
            <p className="dark:text-[white] w-[230px] text-[16px] text-[white] font-[500] text-center">
                          {t("sec44")}
            </p>
          </div>

          <div
            data-aos="fade-left"
            className='w-[420px] h-[310px] bg-[url("./assets/uuu.png")] bg-cover bg-no-repeat bg-center flex flex-col items-center gap-[20px] p-[20px] '
          >
            <img className="w-[80px] h-[80px]" src={yyy} alt="" />
            <h1 className="dark:text-[white] text-[20px] text-[white] font-[700]">
                          {t("sec43")}
            </h1>
            <p className="dark:text-[white] w-[230px] text-[16px] text-[white] font-[500] text-center">
                          {t("sec44")}
            </p>
          </div>
        </div>
      </div>

      <div className='w-[100%] h-[auto] pt-[200px] pb-[100px] bg-[url("./assets/qqq.png")] bg-cover bg-no-repeat bg-center flex flex-col items-center gap-[20px]'>
        <h1 className="text-[white] text-[24px] font-[800]">Our works</h1>
        <p className="w-[348px] text-[16px] text-[white] text-center">
        {t("sec52")}
        </p>

        <div className="w-[70%] flex flex-wrap gap-[10px] items-center ">
          <div className="w-[200px] flex flex-col gap-[10px]">
            <img src={photo1} alt="" />
            <img src={photo2} alt="" />
          </div>
          <img src={photo3} alt="" />
          <div className="w-[420px] flex flex-col gap-[10px]">
            <img src={photo4} alt="" />
            <img src={photo5} alt="" />
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="w-[400] flex gap-[10px]">
              <img className="w-[200px]" src={photo6} alt="" />
              <div className="w-[200px] flex flex-col gap-[16px]">
                <img src={photo7} alt="" />
                <img src={photo8} alt="" />
              </div>
            </div>
            <img className="w-[410px]" src={photo9} alt="" />
          </div>
        </div>

        <div className="w-[65%] flex justify-end">
          <button className="w-[130px] h-[50px] bg-gradient-to-r from-cyan-700 to-blue-500 text-[white]">
          {t("sec63")}
          </button>
        </div>

        <div className="w-full lg:w-[75%] flex flex-wrap">
          <div className="dark:bg-[#13203b] dark:text-white w-full lg:w-[330px] h-auto lg:h-[320px] bg-white p-5 rounded-tl-[10px] rounded-bl-[10px] flex flex-col justify-evenly mb-5 lg:mb-0">
            <h1 className="dark:text-white text-[20px] lg:text-[24px] text-[#056088] font-extrabold">
                          {t("sec61")}
            </h1>
            <p className="dark:text-white text-[16px] lg:text-[18px] text-[#434343]">
            {t("sec62")}
            </p>
            <button className="dark:text-white w-[120px] lg:w-[130px] h-[40px] lg:h-[50px] bg-gradient-to-r from-cyan-700 to-blue-500 text-white mt-4 lg:mt-0">
            {t("sec63")}
            </button>
          </div>

          <div className="relative w-full lg:w-auto flex flex-col items-center lg:items-start">
            <img
              className="absolute lg:static w-full lg:w-auto"
              src={ppp}
              alt="Background Image"
            />
            <div className="w-full lg:w-[446px] h-auto lg:h-[300px] bg-gradient-to-r from-cyan-700 to-blue-500 relative p-5 lg:p-5 flex flex-col gap-3 mt-[180px] lg:mt-[-100px] ">
              <img
                className="w-[80px] lg:w-[100px] h-[80px] lg:h-[100px] relative z-10 -top-[40px] lg:-top-[50px] left-[50px] lg:-left-[50px]"
                src={avatart}
                alt="Avatar"
              />
              <p className="w-full lg:w-[342px] text-white text-[14px] lg:text-[16px]">
              {t("sec64")}
              </p>
              <p className="text-white font-extrabold">- Mr. Roberto</p>
            </div>
          </div>
        </div>
      </div>

      <div className="dark:bg-[#22406e] w-[100%] h-[auto] pt-[50px] pb-[50px] flex justify-center flex-wrap gap-[30px]">
        <h1 className="dark:text-white text-[#056088] text-[24px] font-[800]">
        {t("sec71")}
        </h1>
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
          <SwiperSlide>
            {" "}
            <h1 className="dark:text-[white] text-[32px] text-[darkgray]">
              J.constructor
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <h1 className="dark:text-[white] text-[32px] text-[darkgray]">
              Arch
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <h1 className="dark:text-[white] text-[32px] text-[darkgray]">
              Whix.com
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <h1 className="dark:text-[white] text-[32px] text-[darkgray]">
              DZIKRA
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <h1 className="dark:text-[white] text-[32px] text-[darkgray]">
              J.constructor
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <h1 className="dark:text-[white] text-[32px] text-[darkgray]">
              Arch
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <h1 className="dark:text-[white] text-[32px] text-[darkgray]">
              Whix.com
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <h1 className="dark:text-[white] text-[32px] text-[darkgray]">
              DZIKRA
            </h1>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className=" dark:bg-[#22406e] w-[100%] h-auto  pt-[50px] pb-[50px] flex justify-center items-center">
        <div className='w-[60%] h-[500px] m-auto bg-[url("./assets/Video.png")] bg-cover bg-no-repeat bg-center'>
          <div className="sm:w-[285px] md:w-[300px] lg:w-[400px] xl:w-[500px] h-[150px] bg-gradient-to-r from-cyan-700 to-blue-500 relative sm:left-[100px] md:left-[257px] lg:left-[400px] xl:left-[615px] top-[350px] flex justify-center items-center  p-[20px]">
            <p className="w-[450px] text-[white] text-[16px]  ">
            {t("sec81")}
            </p>
          </div>
        </div>
      </div>

      <div data-aos="zoom-in-up" className='dark:bg-[#22406e] w-[80%] h-auto m-auto rounded-[10px] mb-[30px] flex flex-col items-center justify-center gap-[30px] bg-[url("./assets/BG.png")] bg-cover bg-no-repeat bg-center mt-[30px] pt-[30px] pb-[30px]'>
        <h1 className="sm:w-[600px] md:w-[640px] lg:w-[700px] xl:w-[740px] sm:text-[40px] md:text-[44px] lg:text-[48px] xl:text-[52px] text-[white] text-center font-[800]">
        {t("sec91")}
        </h1>
        <p className="w-[517px] text-[16px] text-center text-white">
        {t("sec92")}
        </p>
        <div className="flex">
          <input
            type="text"
            className=" sm:w-[350px] md:w-[400px] lg:w-[450px] xl:w-[500px] h-[62px] bg-[white] p-[10px]"
            placeholder="Enter your e-mail here"
          />
          <button className="w-[130px] h-[62px] bg-gradient-to-r from-cyan-700 to-blue-500 text-[white]">
          {t("sec63")}
          </button>
        </div>
      </div>


          {/* footer */}
          <div className="w-[100%] h-auto bg-[#023957]  flex flex-wrap gap-[100px] items-center justify-center pt-[50px]    "> 
          <div className="flex flex-col gap-[10px]">
            <h1 className="text-[66px] font-[700] text-[white]">DB-</h1>
            <p className="w-[180px] text-[16px] text-[white]">{t("footer1")}</p>
            <button className="w-[130px] h-[62px] bg-gradient-to-r from-cyan-700 to-blue-500 text-[white]">
            {t("footer2")}
          </button>
          </div>

          <div className="w-[70px] flex flex-col items-start gap-[20px]">
            <h1 className="text-[24px] text-[white] font-[800]">{t("footer3")}</h1>
            <p className="text-[16px] text-[white]">{t("footer4")}</p>
            <p className="text-[16px] text-[white]">{t("footer5")}</p>
            <p className="text-[16px] text-[white]">{t("footer6")}</p>
            <p className="text-[16px] text-[white]">{t("footer7")}</p>
          </div>

          <div className="w-[70px] flex flex-col items-start gap-[20px]">
            <h1 className="text-[24px] text-[white] font-[800]">{t("footer8")}</h1>
            <p className="text-[16px] text-[white]">{t("footer9")}</p>
            <p className="text-[16px] text-[white]">{t("footer10")}</p>
            <p className="text-[16px] text-[white]">{t("footer11")}</p>
            <p className="text-[16px] text-[white]">{t("footer12")}</p>
          </div>

          <div className="w-[70px] flex flex-col items-start gap-[20px]">
            <h1 className="text-[24px] text-[white] font-[800]">{t("footer13")}</h1>
            <p className="text-[16px] text-[white]">{t("footer14")}</p>
            <p className="text-[16px] text-[white]">{t("footer15")}</p>
            <p className="text-[16px] text-[white]">{t("footer16")}</p>
            <p className="text-[16px] text-[white]">{t("footer17")}</p>
          </div>

          <div className="w-[70px] flex flex-col items-start gap-[20px]">
            <h1 className="text-[24px] text-[white] font-[800]">{t("footer18")}</h1>
            <p className="text-[16px] text-[white]">{t("footer19")}</p>
            <p className="text-[16px] text-[white]">{t("footer20")}</p>
            <p className="text-[16px] text-[white]">{t("footer21")}</p>
            <p className="text-[16px] text-[white]">{t("footer22")}</p>
          </div>

          <div className="w-[100%] h-[80px] bg-[white] flex justify-center items-center">
            <p className="text-[16px] text-[#434343]">2021 - Copyright ZHB Studio</p>
          </div>
      </div>

    </div>
  );
};

export default Home;
