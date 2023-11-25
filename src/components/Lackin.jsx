import { styled } from "@mui/material";
import React from "react";
import { LackinImage } from "../assets";

const Lackin = ({ onClick }) => {
  return (
    <Container onClick={onClick}>
      <img src={LackinImage} alt="logo" />
      <div>
        <h1>LACK</h1>
        <h2>N</h2>
      </div>
    </Container>
  );
};

export default Lackin;

const Container = styled("div")(() => ({
  width: "100%",
  height: "100%",
  backgroundColor: "#dd8500",
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "center",
  gap: "1rem",
  img: {
    width: "10rem",
    height: "10rem",
    marginLeft: "1rem",
  },
  div: {
    textAlign: "start",
    marginBottom: "8rem",
    h1: {
      fontSize: "7rem",
      color: "#ffffff",
      marginLeft: "0.3rem",
    },
    h2: {
      fontSize: "7rem",
      color: "#ffffff",
    },
  },
}));
