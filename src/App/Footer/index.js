import { email, gitHub, linkedin } from "../Contact/personalContact";
import {
  FooterButton,
  FooterContainer,
  FooterHeader,
  FooterLink,
  FooterText,
  IconFooterGitHub,
  IconLinkedIn,
  IconWrapper,
} from "./styled";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterHeader>Let’s talk!</FooterHeader>
      <FooterButton
        href={`mailto:${email}`}
        title={email}
        rel="noopener noreferrer"
      >
        {email}
      </FooterButton>
      <FooterText>
        I’m always open to new projects whenever I have the time. If you have a
        website, dashboard or mobile app in mind and need some help to make your
        ideas come to life, feel free to conatct me ✌
      </FooterText>
      <IconWrapper>
        <FooterLink href={gitHub} rel="noopener noreferrer" target="_blank">
          <IconFooterGitHub />
        </FooterLink>
        <FooterLink href={linkedin} rel="noopener noreferrer" target="_blank">
          <IconLinkedIn />
        </FooterLink>
      </IconWrapper>
    </FooterContainer>
  );
};
