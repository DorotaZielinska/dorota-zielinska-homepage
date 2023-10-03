import styled from "styled-components";
import { ReactComponent as EllipseIcon } from "./ellipseIcon.svg";

export const SkillsContainer = styled.div`
  max-width: 1216px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.section.background};
  box-shadow: 0px 16px 58px 0px rgba(9, 10, 51, 0.03);
  margin-bottom: 72px;
`;

export const SkillsHeader = styled.h2`
  font-size: 30px;
  font-weight: 900;
  letter-spacing: 1.5px;
  padding: 32px;
  color: ${({ theme }) => theme.header.text};
 
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 18px;
    letter-spacing: 0.9px;
    padding: 16px;
  }
`;
export const Divider = styled.div`
  max-width: 1151px;
  height: 1px;
  margin: auto;
  background: ${({ theme }) => theme.divider.background};
`;

export const SkillsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  justify-content: space-between;
  grid-row-gap: 8px;
  padding: 30px 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    grid-template-columns: 1fr;
    padding: 16px;
    padding-top: 0;
    margin-bottom: 0;
  }
`;

export const SkillsItem = styled.li`
  display: flex;
  align-items: center;
  list-style-type: none;
`;

export const EllipseIconItem = styled(EllipseIcon)`
  margin-right: 16px;
  height: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 6px;
    height: 6px;
  }
`;
