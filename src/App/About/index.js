import React from "react";
import { AboutWrapper } from "./styled";
import { Image } from "./Image";
import { Info } from "./Info";
import picture from "./Image/dorota.zielinska.jpg";

export const About = () => (
  <AboutWrapper>
    <Image src={picture} alt="my profile picture" />
    <Info />
  </AboutWrapper>
);
