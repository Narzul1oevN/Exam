import React from "react";
import useDarkside from './../hook/switcherData';
import { DarkModeSwitch } from 'react-toggle-dark-mode';


const Switcher = ({}) => {
  const [colorTheme, setTheme] = useDarkside();
  const [isDarkMode, setDarkMode] = React.useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkMode(checked);
  };
  const defaultProperties = {
    dark: {
      circle: {
        r: 6,
      },
      mask: {
        cx: "70%",
        cy: "20%",
      },
      svg: {
        transform: "rotate(40deg)",
      },
      lines: {
        opacity: 0,
      },
    },
    light: {
      circle: {
        r: 5,
      },
      mask: {
        cx: "100%",
        cy: "0%",
      },
      svg: {
        transform: "rotate(90deg)",
      },
      lines: {
        opacity: 1,
      },
    },
    springConfig: { mass: 4, tension: 250, friction: 35 },
  };
  return (
    <DarkModeSwitch
      animationProperties={defaultProperties}
      // style={{ marginBottom: "2rem" }}
      checked={isDarkMode}
      onChange={toggleDarkMode}
      moonColor="lightgray"
      sunColor="darkorange"
      size={40}
    />
  );
};

export default Switcher;