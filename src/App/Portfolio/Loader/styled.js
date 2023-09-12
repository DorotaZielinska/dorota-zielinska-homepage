import styled, { keyframes } from "styled-components";
import { ReactComponent as Loader } from "./loader.svg";

export const LoaderWrapper = styled.div`
  margin-top: 88px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    margin-top: 48px;
  }
`;

export const LoaderParagraph = styled.p`
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.color.mineShaft};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    margin-top: 16px;
    font-size: 17px;
  }
`;
const rotate = keyframes`
from {
    transform: rotate(0deg);
}
to {
    transform: rotate(360deg);
}
`;

export const LoaderIcon = styled(Loader)`
  animation: ${rotate} 1s linear infinite;
  width: 160px;
  height: 160px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    margin-bottom: 48px;
    width: 80px;
    height: 80px;
  }
`;
