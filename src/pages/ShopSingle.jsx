import React, { useEffect, useState } from "react";
import star from "../assets/Star.png";
import axios from "axios";
import { useParams } from "react-router-dom";

const ShopSingle = () => {
  const { id } = useParams(); // Здесь исправлено
  const api = "https://66ca2cb759f4350f064e95ed.mockapi.io/exam";
  
  const [data, setData] = useState({});

  async function get() {
    try {
      const { data } = await axios.get(`${api}/${id}`);
      setData(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    get();
  }, [id]); // Здесь добавлен id как зависимость

  const [data1, setData1] = useState([]);

  async function get2() {
    try {
      const { data } = await axios.get(api);
      setData1(data.slice(1, 5));
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    get2();
  }, []);

  return (
    <div>
      <div className='w-[100%] h-[450px] bg-[url("./assets/BannerImagesssss.jpg")] bg-cover bg-no-repeat bg-center flex justify-center items-center'>
        <h1 className="text-[80px] text-[#274C5B] font-[800]">Shop Single</h1>
      </div>

      <div className="w-[100%] h-[auto] pt-[100px] pb-[50px] flex flex-wrap gap-[50px] items-center">
        <div className="w-[80%] m-auto flex flex-wrap gap-[30px]">
          <img className="w-[500px] h-[500px]" src={data.image} alt="" />
          <div className="w-[600px] h-[560px] flex flex-col justify-center">
            <h1 className="text-[40px] text-[#274C5B] font-[800]">{data.name}</h1>
            <img className="w-[150px]" src={star} alt="" />
            <h1 className="text-[25px] text-[#274C5B] font-[600]">{data.price + "$"}</h1>
            <p className="w-[500px] text-[18px] text-[#525C60]">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>
            <div className="h-[100px] flex justify-eveleen items-center gap-[10px]">
              <h1 className="text-[#274C5B] text-[20px]">Quantity:</h1>
              <button className="w-[134px] h-[60px] rounded-[20px] border-[2px] border-[#274C5B] text-[#274C5B] border-[solid] text-[20px] font-[600]">
                1
              </button>
              <button className="w-[134px] h-[60px] rounded-[20px] border-[2px] border-[#274C5B] bg-[#274C5B] text-[white] border-[solid] text-[16px] font-[600]">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center pb-[100px] gap-[20px]">
        <div className="w-[100%] flex justify-center gap-[30px]">
          <button className="w-[204px] h-[60px] rounded-[20px] border-[2px] border-[#274C5B] bg-[#274C5B] text-[white] border-[solid] text-[16px] font-[600]">
            Product Description
          </button>
          <button className="w-[204px] h-[60px] rounded-[20px] bg-[#dbdbdb] text-[#274C5B] text-[16px] font-[600]">
            Product Description
          </button>
        </div>

        <p className="sm:w-[600px] text-[16px] text-center text-[#525C60] md:w-[650px] lg:w-[700px] xl:w-[800px]">
          Welcome to the world of natural and organic. Here you can discover the
          bounty of nature. We have grown on the principles of health, ecology,
          and care. We aim to give our customers a healthy chemical-free meal
          for perfect nutrition. It offers about 8–10% carbs. Simple sugars —
          such as glucose and fructose — make up 70% and 80% of the carbs in
          raw.
        </p>
      </div>

      <div className="flex flex-wrap gap-[20px] justify-center w-[100%] pb-[100px]">
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
              <div className="w-[90%] h-[35px] m-auto items-center flex justify-between">
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
  );
};

export default ShopSingle;
