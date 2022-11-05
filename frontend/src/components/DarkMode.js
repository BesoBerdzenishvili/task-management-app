import React from "react";
import { styled } from "../stitches.config";
import Sun from "../images/Sun.svg";
import Moon from "../images/Moon.png";
import Switch from "./Switch";

const Img = styled("img", {
  maxWidth: 14,
  width: "100%",
});
const Container = styled("div", {
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  backgroundColor: "$black",
  maxWidth: 154,
  width: "100%",
  borderRadius: 4,
  padding: 8,
});
export default function DarkMode({ darkMode, setDarkMode }) {
  const handleChange = () => {
    // setDarkMode(!darkMode);
    console.log("hi");
  };
  return (
    <Container>
      <Img src={Sun} alt="sun" />
      <Switch isOn={darkMode} handleToggle={handleChange} onColor="#645fc7" />
      <Img src={Moon} alt="moon" />
    </Container>
  );
}
