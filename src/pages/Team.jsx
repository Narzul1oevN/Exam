import React from "react";
import user1 from "../assets/person (1).png";
import user2 from "../assets/person (2).png";
import user3 from "../assets/person (3).png";
import social1 from "../assets/Follow.png";
import team from "../assets/team (1).png"
import team1 from "../assets/team (2).png"
import team3 from "../assets/team (3).png"

const Team = () => {
  return (
    <div>
      <div className='w-[100%] h-[450px] bg-[url("./assets/BackgroundImage.jpg")] bg-cover bg-no-repeat bg-center flex justify-center items-center '>
        <h1 className="sm:text-[50px] text-[80px] text-[#274C5B] font-[800] ">
        Our Team
        </h1>
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
              Scott Lawrence
              </h1>
              <img src={social1} alt="" />
            </div>
          </div>

          <div className="w-[350px] rounded-[20px] h-[480px] bg-[white]">
            <img src={user3} alt="" />
            <div className="flex justify-evenly items-center h-[100px]">
              <h1 className="text-[25px] text-[#274C5B] font-[500]">
              Karen Allen
              </h1>
              <img src={social1} alt="" />
            </div>
          </div>
        </div>

        <div className="sm:justify-center w-[80%] h-auto m-[auto] flex flex-wrap gap-[30px]">
          <div className="w-[350px] rounded-[20px] h-[480px] bg-[white]">
            <img src={team} alt="" />
            <div className="flex justify-evenly items-center h-[100px]">
              <h1 className="text-[25px] text-[#274C5B] font-[500]">
              Keira Knightley
              </h1>
              <img src={social1} alt="" />
            </div>
          </div>

          <div className="w-[350px] rounded-[20px] h-[480px] bg-[white]">
            <img src={team1} alt="" />
            <div className="flex justify-evenly items-center h-[100px]">
              <h1 className="text-[25px] text-[#274C5B] font-[500]">
              Marianne Loreno
              </h1>
              <img src={social1} alt="" />
            </div>
          </div>

          <div className="w-[350px] rounded-[20px] h-[480px] bg-[white]">
            <img src={team3} alt="" />
            <div className="flex justify-evenly items-center h-[100px]">
              <h1 className="text-[25px] text-[#274C5B] font-[500]">
              Riga Pelore
              </h1>
              <img src={social1} alt="" />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Team;
