import React from 'react'
import l1 from "../assets/suratikalon.png"
import l2 from "../assets/fon.png"
import l3 from "../assets/cardPhoto1.png"
import l4 from "../assets/cardphoto2.png"
import l5 from "../assets/cardphoto3.png"

const News = () => {
  return (
    <div>
      {/* header */}
      <div className='w-[100%] h-[450px] bg-[url("./assets/sss.png")] bg-cover bg-no-repeat bg-center flex justify-center items-center'>
        <h1 className="sm:text-[40px] md:text-[44px] lg:text-[48px] xl:text-[52px] text-[white]  font-[800] text-center">
        Article and news about property and constructions
        </h1>
      </div>


      <div>
        <img
          className="w-[1300px h-[436px] m-auto mt-[100px]"
          src={l1}
          alt=""
        />
      </div>

      <div className='bg-[url("./assets/fon.png")] w-full h-[580px] bg-no-repeat bg-cover mt-[-330px]'></div>

      <div className="mb-[200px] flex flex-wrap gap-[50px] relative w-[80%] m-auto top-[-150px]">
        <div
          data-aos="fade-right"
          className="w-[420px] h-[544px] shadow-lg shadow-indigo-500/40"
        >
          <img className="w-[420px] h-[250px]" src={l3} alt="" />
          <h1 className="text-[#056088] font-[700] text-[24px] pl-[30px] pt-[20px]">
            Tips of the week
          </h1>
          <p className="text-[#434343] font-[400] text-[16px] w-[330px] pl-[30px] pt-[20px]">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry'
          </p>
          <button className="w-[158px] h-[72px] text-[white] font-[500] text-[16px] bg-gradient-to-r from-[#056088] to-[#09A7CA] ml-[30px] mt-[40px]">
            Read more
          </button>
        </div>

        <div
          data-aos="flip-left"
          className="w-[420px] h-[544px] shadow-lg shadow-indigo-500/40"
        >
          <img className="w-[420px] h-[250px]" src={l4} alt="" />
          <h1 className="text-[#056088] font-[700] text-[24px] pl-[30px] pt-[20px]">
            House price is high now
          </h1>
          <p className="text-[#434343] font-[400] text-[16px] w-[330px] pl-[30px] pt-[20px]">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry'
          </p>
          <button className="w-[158px] h-[72px] text-[white] font-[500] text-[16px] bg-gradient-to-r from-[#056088] to-[#09A7CA] ml-[30px] mt-[40px]">
            Read more
          </button>
        </div>

        <div
          data-aos="fade-left"
          className="w-[420px] h-[544px] shadow-lg shadow-indigo-500/40"
        >
          <img className="w-[420px] h-[250px]" src={l5} alt="" />
          <h1 className="text-[#056088] font-[700] text-[24px] pl-[30px] pt-[20px]">
            Good investment in property
          </h1>
          <p className="text-[#434343] font-[400] text-[16px] w-[330px] pl-[30px] pt-[20px]">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry'
          </p>
          <button className="w-[158px] h-[72px] text-[white] font-[500] text-[16px] bg-gradient-to-r from-[#056088] to-[#09A7CA] ml-[30px] mt-[40px]">
            Read more
          </button>
        </div>
      </div>
      
      <h1 className="text-[#056088] font-[700] text-[24px] text-center relative top-[-220px]">
        See more
      </h1>



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
  )
}

export default News
