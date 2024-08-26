import React from "react";
import image2 from "../assets/Imageer (1).png";
import ico from "../assets/Icon.svg";
import imageer from "../assets/Imageer (2).png";
import icon1 from "../assets/icons (1).png";
import icon2 from "../assets/icons (2).png";
import icon3 from "../assets/icons (3).png";
import icon4 from "../assets/icons (4).png";
import user1 from "../assets/person (1).png";
import user2 from "../assets/person (2).png";
import user3 from "../assets/person (3).png";
import social1 from "../assets/Follow.png";
import food1 from "../assets/lk (1).png";
import food2 from "../assets/lk (2).png";
import food3 from "../assets/lk (3).png";
import food4 from "../assets/lk (4).png";

const About = () => {
  return (
    <div>
      <div className='w-[100%] h-[450px] bg-[url("./assets/pp.png")] bg-cover bg-no-repeat bg-center flex justify-center items-center'>
        <h1 className="text-[80px] text-[#274C5B] font-[800] ">About Us</h1>
      </div>

      <div className="sm:flex-col md:flex-col  lg:flex-col xl:flex-row w-[100%] h-auto pb-[50px] bt-[50px] bg-[white] flex justify-evenly items-center gap-[30px]">
        <img
          className="sm:w-[550px] md:w-[650px] xl:w-[700px]"
          src={image2}
          alt=""
        />
        <div className="flex  flex-col gap-[10px] items-start">
          <p className="text-[32px] text-[#7EB693] italic font-[500]">
            About Us
          </p>
          <h1 className="lg:text-[40px] lg:w-[500px] text-[50px] w-[600px] font-[800] text-[#274C5B]">
            We do Creative Things for Success
          </h1>
          <p className="sm:w-[400px] lg:w-[600px] text-[16px] text-[#525C60] ">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley. Simply dummy text of
            the printing and typesetting industry. Lorem had ceased to been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley.
          </p>

          <div className="flex items-center gap-[20px]">
            <div className="flex items-center gap-[10px]">
              <img src={ico} alt="" />
              <h1 className="w-[250px] text-[25px] text-[#274C5B] font-[600]">
                Modern Agriculture Equipment
              </h1>
            </div>
            <div className="flex items-center gap-[10px]">
              <img src={ico} alt="" />
              <h1 className="w-[250px] text-[25px] text-[#274C5B] font-[600]">
                Modern Agriculture Equipment
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:flex-col md:flex-col lg:flex-col xl:flex-row w-[100%] h-auto pb-[50px] bt-[50px] bg-[white] flex justify-evenly items-center gap-[30px]">
        <div className="flex  flex-col gap-[10px] items-start">
          <p className="text-[32px] text-[#7EB693] italic font-[500]">
            About Us
          </p>
          <h1 className="lg:text-[40px] lg:w-[500px] text-[50px] w-[600px] font-[800] text-[#274C5B]">
            We do not buy from the open market & traders.
          </h1>
          <p className="sm:w-[400px] lg:w-[600px] text-[16px] text-[#525C60] ">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard the 1500s, when an
            unknown
          </p>

          <div className="flex items-center gap-[20px]">
            <div className="flex items-center gap-[10px]">
              <img src={ico} alt="" />
              <h1 className="w-[250px] text-[25px] text-[#274C5B] font-[600]">
                Modern Agriculture Equipment
              </h1>
            </div>
            <div className="flex items-center gap-[10px]">
              <img src={ico} alt="" />
              <h1 className="w-[250px] text-[25px] text-[#274C5B] font-[600]">
                Modern Agriculture Equipment
              </h1>
            </div>
          </div>
        </div>
        <img
          className="sm:w-[550px] md:w-[650px] lg:w-[500px] xl:w-[700px] "
          src={imageer}
          alt=""
        />
      </div>

      <div className="w-[100%] h-auto pb-[100px] pt-[100px] m-auto justify-evenly items-center bg-white flex flex-wrap">
        <div className="w-[250px] h-[330px] bg-[#d4d4d468] rounded-[10px] flex flex-col gap-[10px] p-[10px] items-center">
          <img src={icon1} alt="" />
          <h1 className="text-[25px] font-[700] text-[#274C5B]">
            Return Policy
          </h1>
          <p className="w-[180px] text-[18px] text-[#525C60] text-center ">
            Simply dummy text of the printintypesetting industry.
          </p>
        </div>
        <div className="w-[250px] h-[330px] bg-[#d4d4d468] rounded-[10px] flex flex-col gap-[10px] p-[10px] items-center">
          <img src={icon2} alt="" />
          <h1 className="text-[25px] font-[700] text-[#274C5B]">
            Return Policy
          </h1>
          <p className="w-[180px] text-[18px] text-[#525C60] text-center ">
            Simply dummy text of the printintypesetting industry.
          </p>
        </div>
        <div className="w-[250px] h-[330px] bg-[#d4d4d468] rounded-[10px] flex flex-col gap-[10px] p-[10px] items-center">
          <img src={icon3} alt="" />
          <h1 className="text-[25px] font-[700] text-[#274C5B]">
            Return Policy
          </h1>
          <p className="w-[180px] text-[18px] text-[#525C60] text-center ">
            Simply dummy text of the printintypesetting industry.
          </p>
        </div>
        <div className="w-[250px] h-[330px] bg-[#d4d4d468] rounded-[10px] flex flex-col gap-[10px] p-[10px] items-center">
          <img src={icon4} alt="" />
          <h1 className="text-[25px] font-[700] text-[#274C5B]">
            Return Policy
          </h1>
          <p className="w-[180px] text-[18px] text-[#525C60] text-center ">
            Simply dummy text of the printintypesetting industry.
          </p>
        </div>
      </div>

      <div className="w-[100%] h-[auto]  flex flex-col gap-[30px] items-center justify-center pt-[50px] pb-[50px]">
        <h1 className="text-[50px] text-[#274C5B] font-[800]">
          Our Organic Experts
        </h1>
        <p className="sm:w-[600px] md:w-[700px] lg:w-[750px] xl:w-[800px] text-[18px] text-[#525C60] text-center">
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley.
        </p>
        <div className="sm:justify-center w-[80%] h-auto m-[auto] flex flex-wrap gap-[30px]">
          <div className="w-[350px] rounded-[20px] h-[480px] bg-[white]">
            <img src={user1} alt="" />
            <div className="flex justify-evenly items-center h-[100px]">
              <h1 className="text-[25px] text-[#274C5B] font-[500]">
                Giovani Bacardo
              </h1>
              <img src={social1} alt="" />
            </div>
          </div>

          <div className="w-[350px] rounded-[20px] h-[480px] bg-[white]">
            <img src={user2} alt="" />
            <div className="flex justify-evenly items-center h-[100px]">
              <h1 className="text-[25px] text-[#274C5B] font-[500]">
                Giovani Bacardo
              </h1>
              <img src={social1} alt="" />
            </div>
          </div>

          <div className="w-[350px] rounded-[20px] h-[480px] bg-[white]">
            <img src={user3} alt="" />
            <div className="flex justify-evenly items-center h-[100px]">
              <h1 className="text-[25px] text-[#274C5B] font-[500]">
                Giovani Bacardo
              </h1>
              <img src={social1} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-[100%] h-[auto] pt-[50px] pb-[50px] mb-[100px] flex flex-col justify-center bg-[#274C5B] items-center ">
        <p className="text-[32px] text-[#7EB693] italic font-[500]">About Us</p>
        <h1 className="text-[50px] text-[white] font-[800] ">
          What We Offer for You
        </h1>
        <div className="sm:justify-center w-[90%] flex flex-wrap gap-[30px]">
          <div className="flex flex-col text-center">
            <img
              className="w-[300px] h-[300px] rounded-[10px]"
              src={food4}
              alt=""
            />
            <h1 className="text-[25px] text-[white] font-[600]">Spicy</h1>
          </div>

          <div className="flex flex-col text-center">
            <img
              className="w-[300px] h-[300px] rounded-[10px]"
              src={food4}
              alt=""
            />
            <h1 className="text-[25px] text-[white] font-[600]">Spicy</h1>
          </div>

          <div className="flex flex-col text-center">
            <img
              className="w-[300px] h-[300px] rounded-[10px]"
              src={food4}
              alt=""
            />
            <h1 className="text-[25px] text-[white] font-[600]">Spicy</h1>
          </div>

          <div className="flex flex-col text-center">
            <img
              className="w-[300px] h-[300px] rounded-[10px]"
              src={food4}
              alt=""
            />
            <h1 className="text-[25px] text-[white] font-[600]">Spicy</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
