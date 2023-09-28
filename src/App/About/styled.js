import styled from "styled-components";

export const AboutWrapper = styled.div`
display: grid;
align-items: center;
grid-template-columns: auto 1fr;
grid-gap: 66px;

@media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    max-width: 450px;
    grid-template-columns: 1fr;
    grid-gap: 12px;
  }
`