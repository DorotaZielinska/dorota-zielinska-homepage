import styled, { css } from "styled-components";
import { ReactComponent as SunIcon } from "./sunIcon.svg";
import { ReactComponent as BackgroundIcon } from "./backgroundIcon.svg";
import { ReactComponent as ToggleIcon } from "./toggleIcon.svg";

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 60px auto 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    align-self: flex-start;
    margin: 21px auto 0;
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
  cursor: pointer;
  width: 48px;
  position: relative;
`;

export const Title = styled.p`
  font-size: 12px;
  font-weight: 700;
  line-height: 1.3;
  text-transform: uppercase;
  color: ${({ theme }) => theme.primary.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    display: none;
  }
`;

export const ThemeBackgroundIcon = styled(BackgroundIcon)`
  position: absolute;
  width: 48px;
  height: 26px;
  transform: translate(-50%, -50%);
  fill: ${({ theme }) => theme.svgTheme.fillBackGround};
`;

export const ThemeSunIcon = styled(SunIcon)`
  position: absolute;
  width: 14px;
  height: 14px;
  transition: transform 0.3s ease;
  fill: ${({ theme }) => theme.svgTheme.fillSun};
  transform: ${({ moveToRight }) =>
    moveToRight ? "translate(-125%, -50%)" : "translate(20%, -50%)"};
`;

export const ThemeToggleIcon = styled(ToggleIcon)`
  position: absolute;
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
  fill: ${({ theme }) => theme.svgTheme.fillToggle};
  transform: ${({ moveToRight }) =>
    moveToRight ? "translate(-100%, -50%)" : "translate(0%, -50%)"};
`;
