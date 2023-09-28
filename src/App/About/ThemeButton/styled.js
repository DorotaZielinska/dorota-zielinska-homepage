import styled from "styled-components";
import { ReactComponent as SunIcon } from "./sunIcon.svg";
import { ReactComponent as BackgroundIcon } from "./backgroundIcon.svg";
import { ReactComponent as ToggleIcon } from "./toggleIcon.svg";

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 60px auto 0;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    align-self: flex-start;
  }
`;

export const Wrapper = styled.div`
   display: inline-flex; 
  justify-content: center;
  align-items: center;
  gap: 12px; 
`;

export const Button = styled.button`
background-color: transparent;
border: none;
/* display: flex; */
/* align-items: center; */
cursor: pointer;
width: 48px;
/* position: relative; */
`;

export const Title = styled.p`
  font-size: 12px;
  font-weight: 700;
  line-height: 1.3;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.slateGray};

  @media (max-width: ${({ theme }) => theme. breakpoints.mobileMax}) {
    display: none;
  }
`;

export const ThemeBackgroundIcon = styled(BackgroundIcon)`
  /* position: absolute; */
  width: 48px;
  height: 26px;
  display: flex;
  
`;

export const ThemeSunIcon = styled(SunIcon)`
  /* position: absolute; */
  width: 14px;
  height: 14px;
  /* transition: transform 0.3s ease; */
`;

export const ThemeToggleIcon = styled(ToggleIcon)`
  /* position: absolute; */
  display: flex;
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
`;
