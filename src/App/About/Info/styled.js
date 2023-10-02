import styled from "styled-components";
import { ReactComponent as emailIcon } from "./emailIcon.svg";

export const InfoWrapper = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    margin: 13px 29px 48px 0;
  }
`;
export const MiniTitle = styled.p`
  font-size: 12px;
  font-weight: 700;
  line-height: 1.3;
  text-transform: uppercase;
  color: ${({ theme }) => theme.primary.text};
  margin-bottom: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}) {
    margin-bottom: 8px;
  }
`;

export const InfoTitle = styled.h1`
  font-size: 38px;
  font-weight: 900;
  letter-spacing: 1.9px;
  margin-bottom: 35px;
  color: ${({ theme }) => theme.header.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}) {
    font-size: 22px;
    letter-spacing: 1.1px;
    margin-bottom: 16px;
  }
`;

export const InfoDescription = styled.p`
  font-size: 20px;
  line-height: 1.4;
  margin-bottom: 32px;
  color: ${({ theme }) => theme.primary.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}) {
    font-size: 17px;
    margin-bottom: 24px;
  }
`;

export const MessageIcon = styled(emailIcon)`
  width: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}) {
    width: 20px;
  }
`;
