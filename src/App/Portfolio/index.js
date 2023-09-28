import React from "react";
import {
  PortfolioHeader,
  PortfolioIcon,
  PortfolioParagraph,
  PortfolioWrapper,
} from "./styled";
import { Projects } from "./Projects";

export const Portfolio = () => (
  <>
    <PortfolioWrapper>
      <PortfolioIcon />
      <PortfolioHeader>Portfolio</PortfolioHeader>
      <PortfolioParagraph>My recent projects</PortfolioParagraph>
    </PortfolioWrapper>
    <Projects />
  </>
);
