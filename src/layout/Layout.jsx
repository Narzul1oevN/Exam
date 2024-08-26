import React, { useEffect, useState } from "react";
import Switcher from "../components/switcher";
import { useTranslation } from "react-i18next";
import { Box, InputLabel, TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../assets/Logo.svg";
import { Link, Outlet } from "react-router-dom";
import soc1 from "../assets/1.png"
import soc2 from "../assets/2.png"
import soc3 from "../assets/3.png"
import soc4 from "../assets/4.png"

const Layout = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [age, setAge] = useState("");
  const { i18n, t } = useTranslation();


  const handleChange = (event) => {
    setAge(event.target.value);
    i18n.changeLanguage(event.target.value);
  };
  return (
    <div className="">
      <div className="dark:bg-[#0A2640] dark:text-[white] bg-slate-200 text-[black] w-[100%] h-[100px] flex justify-evenly items-center">
        <img className="sm:w-[100px] md:w-[150px] xl:w-[198px] h-[53px]" src={logo} alt="" />

        <select name="" className="sm:block xl:hidden text-[black] h-[40px] rounded-[5px] hidden outline-none" id="">
          <option value="">{t("Organic")}</option>
          <option value="">About</option>
          <option value="">404</option>
          <option value="">Portfolio</option>
        </select>

        <div className="sm:hidden xl:block xl:flex w-[600px] flex justify-between items-center">
          <Link to={"/"} className="cursor-pointer hover:text-[gray]"> {t("Organic")} </Link>
          <Link to={"about"} className="cursor-pointer hover:text-[gray]"> {t("About")} </Link>
          <Link to={"shop"} className="cursor-pointer hover:text-[gray]">{t("Shop")}</Link>
          <Link to={"shopSingle"} className="cursor-pointer hover:text-[gray]">{t("Single")} </Link>
          <Link to={"portfolio"} className="cursor-pointer hover:text-[gray]"> {t("Portfolio")} </Link>
          <Link to={"team"} className="cursor-pointer hover:text-[gray]"> {t("Team")} </Link>
          <Link to={"page404"} className="cursor-pointer hover:text-[gray]"> 404  </Link>
          <Link to={"service"} className="cursor-pointer hover:text-[gray]"> {t("Service")} </Link>
        </div>

        <TextField
          sx={{ background: "white", borderRadius: "5px" }}
          id="outlined-basic"
          label="Search..."
          variant="outlined"
          size="small"
        />
        <Box sx={{ minWidth: 120 }}>
          <FormControl size="small" sx={{ width: "100px" }}>
            <InputLabel id="demo-simple-select-label">Translation</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              onChange={handleChange}
              sx={{ background: "white", borderRadius: "5px" }}
              label="Translation"
            >
              <MenuItem value={"en"}>English</MenuItem>
              <MenuItem value={"ru"}>Русский</MenuItem>
              <MenuItem value={"tj"}>Точики</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Switcher />
      </div>
      <Outlet />

      <div className="dark:bg-[#0A2640] dark:text-[white] w-[100%] h-[auto] pb-[100px] ">
        {/* limon */}
          <div className='sm:flex-col sm:gap-[30px] sm:pb-[50px] sm:pt-[50px] lg:flex-row w-[80%] h-[auto] m-[auto] flex justify-evenly items-center rounded-[10px] bg-[url("./assets/oi.png")] bg-cover bg-no-repeat bg-center'>
              <h1 className="w-[350px] text-[40px] text-[white] font-[800]"> {t("footer")} </h1>
              <div className="flex items-center gap-[10px]">
                <input type="text" placeholder="Your Email Address" className="w-[340px] h-[60px] pl-[20px] rounded-[10px]" />
                <button className="text-[20px] w-[150px] h-[60px] bg-[#274C5B] rounded-[10px] text-[white] font-[500] "> {t("footer1")} </button>
              </div>
          </div>

          {/* footer */}
          <div className=" sm:flex-col lg:flex-row w-[90%] h-[auto] mt-[100px] flex justify-evenly items-center gap-[30px] ">
            <div className="sm:items-center w-[250px] h-auto flex flex-col gap-[10px] items-end">
              <h1 className="text-[24px] font-[700] text-[#274C5B]"> {t("footer2")} </h1>
              <div className="sm:items-center lg:items-end flex flex-col gap-[0px] items-end">
              <p className="text-[18px] text-[#525C60] font-[800]"> {t("footer3")} </p>
              <p>needhelp@Organia.com</p>
              </div>

              <div className="sm:items-center lg:items-end flex flex-col gap-[0px]">
              <p className="text-[18px] text-[#525C60] font-[800]"> {t("footer4")} </p>
              <p>666 888 888</p>
              </div>

              <div className="sm:items-center sm:text-center lg:items-end flex flex-col gap-[0px] items-end">
              <p className="text-[18px] text-[#525C60] font-[800]"> {t("footer5")} </p>
              <p>88 road, borklyn street, USA</p>
              </div>
            </div>


            <div className="w-[250px] h-auto flex flex-col gap-[10px] items-center">
              <img src={logo} alt="" />
              <div className="flex flex-col gap-[0px] items-center">
              <p className="w-[543px] text-center text-[16px] text-[#525C60]"> {t("footer6")} </p>
              </div>

              <div className="flex justify-between items-center gap-[10px]">
                <img src={soc1} alt="" />
                <img src={soc2} alt="" />
                <img src={soc3} alt="" />
                <img src={soc4} alt="" />
              </div>

            </div>


            <div className="w-[250px] h-auto flex flex-col gap-[10px] items-end">
              <h1 className="text-[24px] font-[700] text-[#274C5B]">{t("footer7")}</h1>
              <div className="flex flex-col gap-[0px] items-end">

              <p>{t("footer8")}</p>
              </div>
              <div className="flex flex-col gap-[0px] items-end">

              <p> {t("footer9")} </p>
              </div>

              <div className="flex flex-col gap-[0px] items-end">

              <p> {t("footer10")} </p>
              </div>


              <div className="flex flex-col gap-[0px] items-end">

              <p> {t("footer9")} </p>
              </div>

              <div className="flex flex-col gap-[0px] items-end">

              <p> {t("footer10")} </p>
              </div>
              
            </div>
          </div>
      </div>

    </div>
  );
};

export default Layout;
