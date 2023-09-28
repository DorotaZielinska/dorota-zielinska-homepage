import styled from "styled-components";

export const Image = styled.img`
max-width: 398px;
border-radius: 50%;

@media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    max-width: 132px;
}
`

