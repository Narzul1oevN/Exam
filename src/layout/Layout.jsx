import React, { useEffect, useState } from "react";
import Switcher from "../components/switcher";
import { useTranslation } from "react-i18next";
import { Box, InputLabel, TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, Outlet } from "react-router-dom";


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
      <div className="bg-transparent bg-slate-200 text-[black] w-[100%] h-[100px] flex justify-evenly items-center absolute z-10">
        <h1 className=" text-[52px] text-[white] font-[1000]">DB-</h1>

        <select name="" className="sm:block xl:hidden text-[black] h-[40px] rounded-[5px] hidden outline-none" id="">
          <option value="">Home</option>
          <option value="">About</option>
          <option value="">Contact</option>
          <option value="">Galler</option>
          <option value="">News</option>
          <option value="">ProccesDetail</option>
          <option value="">Galler</option>
        </select>

        <div className="sm:hidden xl:flex w-[700px] flex justify-between items-center">
          <Link to={"/"} className="text-[white] cursor-pointer hover:text-[lightgray]"> {t("Home")} </Link>
          <Link to={"about"} className="text-[white] cursor-pointer hover:text-[lightgray]"> {t("About")} </Link>
          <Link to={"contact"} className="text-[white] cursor-pointer hover:text-[lightgray]"> {t("Contact")} </Link>
          <Link to={"gallery"} className="text-[white] cursor-pointer hover:text-[lightgray]"> {t("Gallery")} </Link>
          <Link to={"news"} className="text-[white] cursor-pointer hover:text-[lightgray]"> {t("News")} </Link>
          <Link to={"proccesDetalis"} className="text-[white] cursor-pointer hover:text-[lightgray]"> {t("Proccess")} </Link>
          <Link to={"career"} className="text-[white] cursor-pointer hover:text-[lightgray]"> {t("Career")} </Link>
          <Link to={"ourStory"} className="text-[white] cursor-pointer hover:text-[lightgray]"> {t("OurStory")} </Link>
          <Link to={"service"} className="text-[white] cursor-pointer hover:text-[lightgray]"> {t("Service")} </Link>
        </div>

        <div className="flex items-center gap-[30px]">
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
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
