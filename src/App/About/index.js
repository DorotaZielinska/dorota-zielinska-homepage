import React from "react";
import { AboutWrapper } from "./styled";
import { Image } from "./Image";
import { Info } from "./Info";
import picture from "./Image/zdjecieDZ1.png";

export const About = () => {
  return (
    <AboutWrapper>
      <Image src={picture} />
      <Info />
    </AboutWrapper>
  );
};
