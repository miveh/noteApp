import React from "react";
import { Link } from "react-router-dom";

const LinkStyle = {
  right: "35px",
  width: "70px",
  border: "none",
  height: "70px",
  bottom: "60px",
  display: "flex",
  flexShrink: "0",
  cursor: "pointer",
  position: "fixed",
  textAlign: "center",
  alignItems: "center",
  borderRadius: "50px",
  background: "#252525",
  justifyContent: "center",
  filter: `drop-shadow(-5px 0px 10px rgba(0, 0, 0, 0.4)) 
    drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.4))`,
};

function Add() {
  return (
    <Link as="button" to="/add" style={LinkStyle}>
      <img src="./images/HomePage/add.svg" alt="" />
    </Link>
  );
}

export default Add;
