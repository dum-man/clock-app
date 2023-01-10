import React from "react";
import styled from "styled-components";
import night from "../assets/night.jpg";
import morning from "../assets/morning.jpg";
import afternoon from "../assets/afternoon.jpg";
import evening from "../assets/evening.jpg";
import { getTimeOfDay } from "../utils";

const currentTime = () => {
  switch (getTimeOfDay(new Date())) {
    case "night":
      return night;
    case "morning":
      return morning;
    case "afternoon":
      return afternoon;
    default:
      return evening;
  }
};

const ContainerEl = styled.main`
  position: relative;
  min-width: 100vw;
  width: 1450px;
  height: 100vh;
  background-image: url(${currentTime()});
  background-size: cover;
`;

type PropsType = {
  children: React.ReactNode;
};

const Wrapper: React.FC<PropsType> = ({ children }) => {
  return <ContainerEl>{children}</ContainerEl>;
};

export default Wrapper;
