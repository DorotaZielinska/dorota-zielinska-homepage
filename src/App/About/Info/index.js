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
      I was looking for something creative to do and I have found it in
      programming.
      <br /> So on that way I have start to develop my passion and knowledge
      about Frontend with React.
      <br /> I'a highly motivated Frontend Developer currently looking for new
      job opportunities to increase my experience, explore new technologies to
      improve my skills and become a better programmer.
    </InfoDescription>
    <Link href={`mailto:${email}`} title={email} rel="noopener noreferrer">
      <MessageIcon />
      Hire Me
    </Link>
  </InfoWrapper>
);
