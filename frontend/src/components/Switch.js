import React from "react";
import { styled } from "../stitches.config";

const Container = styled("div", {
  display: "flex",
  "& input": {
    height: 0,
    width: 0,
    visibility: "hidden",
  },
  "& label": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    cursor: "pointer",
    width: "25px",
    height: "13px",
    background: "grey",
    borderRadius: "25px",
    position: "relative",
    transition: "backgroundColor .2s",
  },
  "& label span": {
    content: "",
    position: "absolute",
    top: ".6px",
    left: ".6px",
    width: "11px",
    height: "11px",
    borderRadius: "11px",
    transition: "0.2s",
    background: "#fff",
    boxShadow: "0 0 2px 0 rgba(10, 10, 10, 0.29)",
  },
  "& input:checked + label span": {
    left: "calc(100% - 2px)",
    transform: "translateX(-100%)",
  },
  "& label:active span": {
    width: "15px",
  },
});

export default function Switch({ isOn, handleToggle, onColor }) {
  return (
    <Container>
      <input
        checked={isOn}
        onChange={handleToggle}
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        style={{ background: isOn && onColor }}
        htmlFor={`react-switch-new`}
      >
        <span />
      </label>
    </Container>
  );
}
