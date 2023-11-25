import { styled } from "@mui/material";
import React from "react";
import { WerkiImage } from "../assets";

const Werki = ({ onClick }) => {
  return (
    <Container onClick={onClick}>
      <img src={WerkiImage} alt="logo" />
      <div>
        <h1>WERK</h1>
        <h2>I</h2>
      </div>
    </Container>
  );
};

export default Werki;

const Container = styled("div")(() => ({
  width: "100%",
  height: "100%",
  backgroundColor: "#363d43",
  display: "flex",
  flexDirection: "column",
  alignItems: "end",
  justifyContent: "center",
  gap: "1rem",
  img: {
    width: "10rem",
    height: "10rem",
    marginRight: "1rem",
  },
  div: {
    textAlign: "end",
    marginBottom: "8rem",
    h1: {
      fontSize: "7rem",
      color: "#ffffff",
      marginRight: "1rem",
    },
    h2: {
      fontSize: "7rem",
      color: "#ffffff",
      marginLeft: "0.2rem",
    },
  },
}));
