import styled from "styled-components";

export default styled.a`
  background-color: ${({ theme }) => theme.primaryBlue.background};
  padding: 12px 16px;
  font-size: 20px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border-radius: 4px;
  border: 1px solid rgba(209, 213, 218, 0.3);
  color: ${({ theme }) => theme.white.text};
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s linear;

  &:hover {
    box-shadow: 0px 2px 0px 0px rgba(20, 70, 32, 0.2) inset;
  }

  &:focus {
    box-shadow: -2px -2px 0px 0px #8cc2ff;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}) {
    font-size: 18px;
    letter-spacing: 0.9px;
    gap: 12px;
  }
`;
