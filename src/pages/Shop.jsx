import React, { useEffect, useState } from "react";
import axios from "axios";
import star from "../assets/Star.png";
import iop from "../assets/iop.png";
import { Link } from "react-router-dom";

const Shop = () => {
  const [data, setData] = useState([]);
  const api = "https://66ca2cb759f4350f064e95ed.mockapi.io/exam";

  async function get() {
    try {
      const { data } = await axios.get(api);
      setData(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    get();
  }, []);

  return (
    <div>
      <div className='w-[100%] h-[450px] bg-[url("./assets/iop.png")] bg-cover bg-no-repeat bg-center flex justify-center items-center'>
        <h1 className="text-[80px] text-[#274C5B] font-[800] ">Shop</h1>
      </div>

      <div className="w-[100%] h-[auto] pb-[100px] pt-[100px] flex flex-wrap gap-[30px] justify-center">
        {data.map((element) => {
          return (
            <Link to={`/shopSingle/${element.id}`}>
              <div
                key={element.id}
                className="w-[335px] h-[410px] bg-[white] rounded-[10px]"
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
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
