import React, { useEffect, useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Button } from "@mui/material";
import fruit from "../assets/Photo.png";
import icon1 from "../assets/Icon.png";
import icon2 from "../assets/Icon (1).png";
import { useTranslation } from "react-i18next";
import axios from "axios";
import star from "../assets/Star.png";
import person from "../assets/Imag (1).png";
import ooo from "../assets/ttt.png";
import im1 from "../assets/qq .png";
import im2 from "../assets/qqq.png";
import im3 from "../assets/qqqqqq.png";
import as1 from "../assets/aaaaa.png"
import as2 from "../assets/sssssss.png"
import logo from "../assets/Logo.svg"
import soc1 from "../assets/1.png"
import soc2 from "../assets/2.png"
import soc3 from "../assets/3.png"
import soc4 from "../assets/4.png"
import io from "../assets/oi.png"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './org.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';




const Organic = () => {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const api = "https://66ca2cb759f4350f064e95ed.mockapi.io/exam";
  const { i18n, t } = useTranslation();

  async function get() {
    try {
      const { data } = await axios.get(api);
      setData(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function get2() {
    try {
      const { data1 } = await axios.get(api);
      setData1(data.slice(1, 5));
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    get(), get2();
  }, []);

  return (
    <div>
      <div className='sm:h-[500px] md:h-[600px] lg:h-[700] xl-[800px] w-[100%] h-[898px] bg-[url("./assets/Image.png")] bg-cover bg-no-repeat bg-center flex justify-start items-center'>
        <div className="w-[80%] m-auto">
          <h1 className="sm:text-[24px] italic text-[#68A47F] md:text-[34px] lg:text-[40px]">
            {t("sec1")}
          </h1>
          <h1 className="sm:text-[60px] md:text-[60px] lg:text-[70px] w-[500px] font-[1000] text-[#274C5B]">
            {t("sec12")}
          </h1>
          <Button
            sx={{ background: "#EFD372", color: "#274C5B", fontWeight: "800" }}
            variant="contained"
            endIcon={<ArrowForwardIcon />}
          >
            {t("sec123")}
          </Button>
        </div>
      </div>

      <div
        data-aos="fade-right"
        className="dark:bg-[#0A2640] dark:text-[white] w-[100%] h-[450px] m-auto sm:h-[600px] sm:flex sm:flex-col sm:items-center sm:justify-evenly md:flex md:h-[550px] lg:flex-row lg:h-[500px] "
      >
        <div className=' flex flex-col justify-center items-start sm:w-[500px] sm:h-[250px] rounded-[10px] w-[682px] h-[367px] bg-[url("./assets/Image3.png")] bg-cover bg-no-repeat bg-center'>
          <h1 className="w-[50%] text-[40px] font-[800] pl-[20px] text-[white]">
            {t("sec2")}
          </h1>
        </div>

        <div
          data-aos="fade-left"
          className=' flex flex-col justify-center items-start sm:w-[500px] sm:h-[250px] rounded-[10px] w-[682px] h-[367px] bg-[url("./assets/I.png")] bg-cover bg-no-repeat bg-center'
        >
          <h1 className="w-[70%] text-[40px] font-[800] pl-[20px] text-[#274C5B]">
            {t("sec21")}
          </h1>
        </div>
      </div>

      <div className="sm:flex sm:flex-col-reverse sm:gap-[20px] sm:items-center md:flex md:flex-col-reverse md:h-[1100px] lg:flex lg:flex-row lg:h-[800px] w-[100%] h-[1100px] bg-[#F9F8F8]">
        <img className="sm:w-[600px]" src={fruit} alt="" />
        <div className="flex flex-col items-start gap-[20px]">
          <p className="text-[32px] text-[#7EB693] italic"> {t("sec3")} </p>
          <h1 className="w-[600px] text-[50px] font-[800] text-[#274C5B] lg:text-[36px] lg:w-[400px] xl:text-[50px] xl:w-[600px]">
            {t("sec31")}
          </h1>
          <p className="lg:text-[16px] lg:w-[400px] xl:w-[600px] xl:text-[18px] ">
            {t("sec32")}
          </p>
          <div className=" flex items-center gap-[10px] ">
            <img className="w-[100px]" src={icon1} alt="" />
            <div className="flex flex-col">
              <h1 className="text-[25px] text-[#274C5B] font-[700]">
                {" "}
                {t("sec33")}{" "}
              </h1>
              <p className="w-[304px] text-[#525C60]"> {t("sec34")} </p>
            </div>
          </div>

          <div className=" flex items-center gap-[10px] ">
            <img className="w-[100px]" src={icon2} alt="" />
            <div className="flex flex-col">
              <h1 className="text-[25px] text-[#274C5B] font-[700]">
                {" "}
                {t("sec33")}{" "}
              </h1>
              <p className="w-[304px] text-[#525C60]">{t("sec34")}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:w-[100%] sm:h-[auto] mt-[50px] mb-[50px] flex flex-col items-center justify-center">
        <p className="text-[36px] italic text-[#7EB693] font-[600]">
          {t("sec41")}
        </p>
        <h1 className="text-[50px] text-[#274C5B] font-[800]"> {t("sec42")} </h1>
        <div className="flex flex-wrap gap-[20px] justify-center w-[100%] ">
          {data.map((element) => {
            return (
              <div
                key={element.id}
                className="w-[335px] h-[410px] bg-[#F9F8F8] rounded-[10px]"
              >
                <div className="relative">
                  <img
                    className="rounded-[10px] w-[335px] h-[324px]"
                    src={element.image}
                    alt=""
                  />
                  <h1 className="absolute z-10 top-[30px] left-[30px] w-[110px] h-[30px] bg-[#274C5B] text-[white] flex justify-center rounded-[5px] items-center">
                    {element.condition}
                  </h1>
                </div>
                <h1 className="p-[5px] pl-[15px] text-[20px] text-[#274C5B] font-[600]">
                  {element.name}
                </h1>
                <div className="w-[320px] h-[1px] bg-[#bbbbbb] m-auto"></div>
                <div className=" w-[90%] h-[35px] m-auto items-center flex justify-between">
                  <p className="text-[18px] text-[#274C5B] font-[500]">
                    {element.price + "$"}
                  </p>
                  <img src={star} alt="" />
                </div>
              </div>
            );
          })}
        </div>
        <button className="w-[150px] h-[40px] bg-[#274C5B] rounded-[5px] text-[white] font-[600] mt-[30px] ">
          {t("sec43")}
        </button>
      </div>

      <div className='sm:h-[auto] w-[100%] h-[1200px]  flex flex-col gap-[50px] justify-center items-center bg-[url("./assets/ooo.png")] bg-cover bg-no-repeat bg-center pb-[50px]'>
        <div className="text-center flex flex-col items-center gap-[20px]">
          <h1 className="text-[36px] italic font-[600] text-[#7EB693] ">
            {t("sec51")}
          </h1>
          <h1 className="sm:text-[30px] md:text-[40px] lg:text-[50px] text-[#274C5B] font-[800]">
            {t("sec52")}
          </h1>
          <img src={person} alt="" />
          <img className="w-[122px]" src={star} alt="" />
          <p className="sm:w-[600px] w-[780px] text-[18px] text-[#525C60]">
            {t("sec53")}
          </p>
          <h1 className="w-[] text-[25px] text-[#274C5B] font-[800]">
            {t("sec54")}
          </h1>

          <div className="sm:flex-col sm:w-[600px] sm:items-center md:w-[760px] md:item-center md:flex-row md:justify-center lg:flex-row lg:w-[1100px]   flex flex-wrap gap-[30px]">
            <div className="sm:w-[200px] sm:h-[200px] w-[250px]  h-[250px] rounded-[50%] border-[5px] border-[solid] border-[#7EB693] flex items-center justify-center">
              <div className="sm:w-[180px] sm:h-[180px] w-[220px] h-[220px] rounded-[50%] bg-[#F1F1F1] flex flex-col items-center justify-center">
                <h1 className="text-[50px] text-[#274C5B] font-[800]">100%</h1>
                <p className="text-[20px] text-[#274C5B] font-[600]">
                  {t("sec55")}
                </p>
              </div>
            </div>

            <div className="sm:w-[200px] sm:h-[200px] w-[250px]  h-[250px] rounded-[50%] border-[5px] border-[solid] border-[#7EB693] flex items-center justify-center">
              <div className="sm:w-[180px] sm:h-[180px] w-[220px] h-[220px] rounded-[50%] bg-[#F1F1F1] flex flex-col items-center justify-center">
                <h1 className="text-[50px] text-[#274C5B] font-[800]">100%</h1>
                <p className="text-[20px] text-[#274C5B] font-[600]">
                  {t("sec55")}
                </p>
              </div>
            </div>

            <div className="sm:w-[200px] sm:h-[200px] w-[250px]  h-[250px] rounded-[50%] border-[5px] border-[solid] border-[#7EB693] flex items-center justify-center">
              <div className="sm:w-[180px] sm:h-[180px] w-[220px] h-[220px] rounded-[50%] bg-[#F1F1F1] flex flex-col items-center justify-center">
                <h1 className="text-[50px] text-[#274C5B] font-[800]">100%</h1>
                <p className="text-[20px] text-[#274C5B] font-[600]">
                  {t("sec55")}
                </p>
              </div>
            </div>

            <div className="sm:w-[200px] sm:h-[200px] w-[250px]  h-[250px] rounded-[50%] border-[5px] border-[solid] border-[#7EB693] flex items-center justify-center">
              <div className="sm:w-[180px] sm:h-[180px] w-[220px] h-[220px] rounded-[50%] bg-[#F1F1F1] flex flex-col items-center justify-center">
                <h1 className="text-[50px] text-[#274C5B] font-[800]">100%</h1>
                <p className="text-[20px] text-[#274C5B] font-[600]">
                  {t("sec55")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[100%] h-[auto] pt-[50px] pb-[50px] bg-[#274C5B] flex flex-col gap-[30px]   ">
        <div className="sm:flex sm:flex-col sm:gap-[10px] lg:flex-row lg:justify-evenly">
          <h1 className="sm:text-[40px] text-[50px] font-[800] text-[white] ">
            {t("sec61")}
          </h1>
          <button className="sm:text-[16px] sm:w-[170px] w-[206px] h-[50px] text-[#274C5B] text-[18px] rounded-[10px] font-[500] bg-[#EFD372]      ">
            {t("sec62")}
          </button>
        </div>

        <div className="flex flex-wrap gap-[20px] justify-center w-[100%]">
          {data1.map((element) => {
            return (
              <div
                key={element.id}
                className="w-[335px] h-[410px] bg-[#F9F8F8] rounded-[10px]"
              >
                <div className="relative">
                  <img
                    className="rounded-[10px] w-[335px] h-[324px]"
                    src={element.image}
                    alt=""
                  />
                  <h1 className="absolute z-10 top-[30px] left-[30px] w-[110px] h-[30px] bg-[#274C5B] text-[white] flex justify-center rounded-[5px] items-center">
                    {element.condition}
                  </h1>
                </div>
                <h1 className="p-[5px] pl-[15px] text-[20px] text-[#274C5B] font-[600]">
                  {element.name}
                </h1>
                <div className="w-[320px] h-[1px] bg-[#bbbbbb] m-auto"></div>
                <div className=" w-[90%] h-[35px] m-auto items-center flex justify-between">
                  <p className="text-[18px] text-[#274C5B] font-[500]">
                    {element.price + "$"}
                  </p>
                  <img src={star} alt="" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-[100%] h-[931px]">
        <img className="w-[952px] absolute h-[931px]" src={ooo} alt="" />
        <div className="dark:bg-[#0A2640] dark:text-[white] sm:left-[20px] md:left-[90px] lg:left-[200px] xl:left-[800px] relative w-[600px] h-[500px] rounded-[10px] bg-[#FFFFFF] top-[280px] p-[20px] ">
          <h1 className="dark:bg-[#0A2640] dark:text-[white]   w-[500px] text-[40px] font-[800] text-[#274C5B]">
            {t("sec71")}
          </h1>
          <div className="flex flex-col gap-[10px]">
            <h1 className="dark:bg-[#0A2640] dark:text-[white] text-[25px] text-[#274C5B] font-[500]">
              {t("sec72")}
            </h1>
            <p className="dark:bg-[#0A2640] dark:text-[white] w-[500px] text-[18px] text-[#525C60]">
              {t("sec73")}
            </p>
            <h1 className="dark:bg-[#0A2640] dark:text-[white] text-[25px] text-[#274C5B] font-[500]">
              Learn How to Grow Yourself
            </h1>
            <p className="dark:bg-[#0A2640] dark:text-[white] w-[500px] text-[18px] text-[#525C60]">
              {t("sec73")}
            </p>
            <h1 className="dark:bg-[#0A2640] dark:text-[white] text-[25px] text-[#274C5B] font-[500]">
              Farming Strategies of Today
            </h1>
            <p className="dark:bg-[#0A2640] dark:text-[white] w-[500px] text-[18px] text-[#525C60]">
              {t("sec73")}
            </p>
          </div>
        </div>
      </div>

      <div className="w-[100%] h-[auto] pt-[100px] pb-[100px] bg-[#F1F8F4] flex flex-wrap gap-[20px] items-centerc">
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
        <SwiperSlide>        <div className="xl:w-[400px] m-auto relative ">
          <img className="relative z-10 w-[477px]" src={im1} alt="" />
          <h1 className="absolute top-[150px] left-[50px] z-30 text-[25px] text-[#274C5B] font-[500] w-[280px] h-[76px] flex justify-center items-center rounded-[10px] bg-[#FFFFFF] ">
            {t("sec74")}
          </h1>
        </div></SwiperSlide>
        <SwiperSlide>        <div className="xl:w-[400px] m-auto relative">
          <img className="relative z-10 w-[477px]" src={im2} alt="" />
          <h1 className="absolute top-[150px] left-[50px] z-30 text-[25px] text-[#274C5B] font-[500] w-[280px] h-[76px] flex justify-center items-center rounded-[10px] bg-[#FFFFFF] ">
            {t("sec74")}
          </h1>
        </div></SwiperSlide>
        <SwiperSlide>        <div className="xl:w-[400px] m-auto relative">
          <img className="relative z-10 w-[477px]" src={im3} alt="" />
          <h1 className="absolute top-[150px] left-[50px] z-30 text-[25px] text-[#274C5B] font-[500] w-[280px] h-[76px] flex justify-center items-center rounded-[10px] bg-[#FFFFFF] ">
            {t("sec74")}
          </h1>
        </div></SwiperSlide>
        <SwiperSlide>        <div className="xl:w-[400px] m-auto relative ">
          <img className="relative z-10 w-[477px]" src={im1} alt="" />
          <h1 className="absolute top-[150px] left-[50px] z-30 text-[25px] text-[#274C5B] font-[500] w-[280px] h-[76px] flex justify-center items-center rounded-[10px] bg-[#FFFFFF] ">
            {t("sec74")}
          </h1>
        </div></SwiperSlide>
        <SwiperSlide>        <div className="xl:w-[400px] m-auto relative">
          <img className="relative z-10 w-[477px]" src={im2} alt="" />
          <h1 className="absolute top-[150px] left-[50px] z-30 text-[25px] text-[#274C5B] font-[500] w-[280px] h-[76px] flex justify-center items-center rounded-[10px] bg-[#FFFFFF] ">
            {t("sec74")}
          </h1>
        </div></SwiperSlide>
        <SwiperSlide>        <div className="xl:w-[400px] m-auto relative">
          <img className="relative z-10 w-[477px]" src={im3} alt="" />
          <h1 className="absolute top-[150px] left-[50px] z-30 text-[25px] text-[#274C5B] font-[500] w-[280px] h-[76px] flex justify-center items-center rounded-[10px] bg-[#FFFFFF] ">
            {t("sec74")}
          </h1>
        </div></SwiperSlide>
      </Swiper>
      </div>

      <div className=" w-[100%] h-[auto] flex flex-col gap-[50px] pt-[50px] pb-[50px]">
        <div className="w-[80%] flex items-center">
          <h1 className="sm:text-[30px] lg:text-[35px] text-[40px] text-[#274C5B] w-[600px] font-[700] m-auto">
            {t("sec81")}
          </h1>
          <button className="w-[200px] h-[50px] bg-transparent border-[3px] border-[#274C5B] border-[solid] text-[#274C5B] font-[800] rounded-[10px] ">
            {t("sec82")}
          </button>
        </div>

        <div className="sm:flex sm:flex-col sm:gap-[150px] lg:flex-row w-[80%] m-auto flex justify-evenly items-center gap-[20px] pt-[100px] pb-[100px]"> 

          <div className='relative w-[640px] h-[592px] bg-[url("./assets/sssssss.png")] bg-cover bg-no-repeat bg-center rounded-[30px] p-[20px] '>
            <h1 className="absolute w-[100px] h-[100px] rounded-[50%] bg-[white] flex justify-center items-center text-center text-[25px] text-[#274C5B] font-[900]">25 <br /> Nov</h1>
            
            <div className="sm:w-[590px] md:w-[500px] lg:w-[450px] xl:w-[470px] absolute top-[500px] w-[460px] h-[200px] bg-[#e9e9e9] rounded-[20px] p-[10px] flex flex-col gap-[10px] items-start justify-evenly ">
              <h1 className="text-[20px] text-[#274C5B] font-[800] " >{t("sec83")}</h1>
              <p className="text-[18px] text-[#525C60]  ">{t("sec84")}</p>
              <button className="text-[20px] text-[#274C5B] font-[600] bg-[#EFD372] w-[180px] h-[50px] rounded-[10px] "> {t("ser85")} </button>
            </div>

          </div>

          <div className='relative w-[640px] h-[592px] bg-[url("./assets/aaaaa.png")] bg-cover bg-no-repeat bg-center rounded-[30px] p-[20px] '>
            <h1 className="absolute w-[100px] h-[100px] rounded-[50%] bg-[white] flex justify-center items-center text-center text-[25px] text-[#274C5B] font-[900]">25 <br /> Nov</h1>

            <div className="sm:w-[590px] md:w-[500px] lg:w-[450px] xl:w-[470px] absolute top-[500px] w-[460px] h-[200px] bg-[#e9e9e9] rounded-[20px] p-[10px] flex flex-col gap-[10px] items-start justify-evenly ">
              <h1 className="text-[20px] text-[#274C5B] font-[800] " >{t("sec83")}</h1>
              <p className="text-[18px] text-[#525C60]  ">{t("sec84")}</p>
              <button className="text-[20px] text-[#274C5B] font-[600] bg-[#EFD372] w-[180px] h-[50px] rounded-[10px] "> {t("ser85")} </button>
            </div>

          </div>



        </div>
      </div>

    </div>
  );
};

export default Organic;
