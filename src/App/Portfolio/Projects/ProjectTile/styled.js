import styled from "styled-components";

export const Tile = styled.li`
  list-style-type: none;
  padding: 56px;
  background-color: ${({ theme }) => theme.section.background};
  border: 6px solid ${({ theme }) => theme.border.border};
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.shadow.colorLight};
  transition: all 0.3s linear 0s;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}) {
    padding: 24px;
  }

  &:hover {
    border: 6px solid ${({ theme }) => theme.border.borderHover};
  }
`;

export const Title = styled.h3`
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 1.2px;
  margin: 0 0 24px;
  color: ${({ theme }) => theme.primaryBlue.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}) {
    font-size: 16px;
  }
`;

export const Description = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0.9px;
  color: ${({ theme }) => theme.primary.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}) {
    font-size: 14px;
    letter-spacing: 0.7px;
    margin-bottom: 16px;
  }
`;
export const Links = styled.dl`
  display: grid;
  grid-gap: 8px;
  font-size: 18px;
  line-height: 1.4;
  letter-spacing: 0.9px;
  margin: 24px 0 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}) {
    font-size: 14px;
    letter-spacing: 0.7px;
    margin-top: 16px;
  }
`;

export const LinkRow = styled.div`
  display: grid;
  grid-template-columns: 4em 1fr;
  margin: 8px 0 0 0;
  color: ${({ theme }) => theme.primary.text};
`;

export const LinkLabel = styled.dt`
  margin: 0 8px 0 0;
  min-width: 60px;
  color: ${({ theme }) => theme.primary.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}) {
    min-width: 47px;
  }
`;

export const LinkValue = styled.dd`
  margin: 0;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.primaryBlue.link};
`;
