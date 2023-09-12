import styled from "styled-components";
import { ReactComponent as Warning } from "./warning.svg";

export const ErrorWrapper = styled.div`
  border: 0px solid ${({ theme }) => theme.color.iron};
  display: grid;
  grid-template-columns: 1fr;
  /* justify-content: center; */
  text-align: center; 
`;
export const ErrorIcon = styled(Warning)`
  width: 48px;
  height: 48px;
  margin-top: 88px;
  margin-bottom: 16px;
`;
export const ErrorHeader = styled.h2`
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 1.2px;
  line-height: normal;
  margin-bottom: 32px;
  color: ${({ theme }) => theme.color.mineShaft};
`;

export const ErrorParagraph = styled.p`
  line-height: 1.4;
  letter-spacing: 1px;
  margin-bottom: 32px;
  font-size: 20px;
`;

