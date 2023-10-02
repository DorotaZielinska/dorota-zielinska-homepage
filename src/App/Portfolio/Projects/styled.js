import styled from "styled-components";

export const ProjectsContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    grid-template-columns: 1fr;
    grid-gap: 16px;
  }
`;
