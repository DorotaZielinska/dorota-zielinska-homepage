import React from "react";
import {
  InfoDescription,
  InfoTitle,
  InfoWrapper,
  MessageIcon,
  MiniTitle,
} from "./styled";
import Link from "../Link";
import { email } from "../../Contact/personalContact";

export const Info = () => (
  <InfoWrapper>
    <MiniTitle>This is</MiniTitle>
    <InfoTitle>Dorota Zielińska</InfoTitle>
    <InfoDescription>
      I was searching for a creative outlet, and I discovered it through
      programming. This is where my journey into Frontend development with React
      began. I am a highly motivated Frontend Developer, actively seeking new
      job opportunities to further enhance my experience, delve into emerging
      technologies, refine my skills, and evolve as a proficient programmer.
    </InfoDescription>
    <Link href={`mailto:${email}`} title={email} rel="noopener noreferrer">
      <MessageIcon />
      Hire Me
    </Link>
  </InfoWrapper>
);
