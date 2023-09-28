import styled from "styled-components";
import { ReactComponent as IconGitHub } from "./footerGitHubIcon.svg";
import { ReactComponent as LinkedInIcon } from "./linkedIcon.svg";

export const FooterContainer = styled.div`
  max-width: 691px;
  margin-bottom: 109px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    margin: 0 16px 30px 16px;
  }
`;

export const FooterHeader = styled.h3`
  font-size: 12px;
  font-weight: 700;
  line-height: 1.3;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.slateGray};
`;

export const FooterButton = styled.a`
  color: ${({ theme }) => theme.color.mineShaft};
  font-family: Inter;
  font-size: 32px;
  font-weight: 900;
  letter-spacing: 1.6px;
  text-decoration-line: none;
  margin-top: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 18px;
    letter-spacing: 0.9px;
    margin-top: 12px;
  }

  &:hover {
    transition: 0.3s ease;
    color: ${({ theme }) => theme.color.scienceBlue};
  }
`;

export const FooterText = styled.p`
  color: ${({ theme }) => theme.color.mineShaft};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0.9px;
  margin-bottom: 56px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 14px;
    letter-spacing: 0.7px;
    margin-bottom: 40px;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  gap: 24px;
`;

export const IconFooterGitHub = styled(IconGitHub)`
  width: 48px;
  height: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 32px;
    height: 32px;
  }
`;

export const IconLinkedIn = styled(LinkedInIcon)`
  width: 48px;
  height: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 32px;
    height: 32px;
  }
`;
export const FooterLink = styled.a`
  cursor: pointer;

  &:hover {
    transition: 0.3s ease;
  }
`;
