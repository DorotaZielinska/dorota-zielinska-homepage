import styled from "styled-components";
import { ReactComponent as GitHub } from "./gitHub.svg";

export const PortfolioWrapper = styled.div`
  margin: 72px 0 24px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    margin-top: 48px;
  }
`;

export const PortfolioIcon = styled(GitHub)`
  width: 40px;
  height: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 32px;
    height: 32px;
  }
`;

export const PortfolioHeader = styled.h2`
  font-size: 30px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  letter-spacing: 1.5px;
  margin-top: 12px;
  color: ${({ theme }) => theme.header.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 18px;
    font-weight: 900;
    letter-spacing: 0.9px;
  }
`;

export const PortfolioParagraph = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.header.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 17px;
    font-weight: 400;
    letter-spacing: 0.85px;
    margin-bottom: 24px;
    margin-top: 16px;
  }
`;
