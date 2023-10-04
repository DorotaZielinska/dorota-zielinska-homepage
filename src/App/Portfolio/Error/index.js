import React from "react";
import { ErrorHeader, ErrorIcon, ErrorParagraph, ErrorWrapper } from "./styled";
import Link from "../../About/Link";

export const Error = () => (
  <ErrorWrapper>
    <ErrorIcon />
    <ErrorHeader>Ooops! Something went wrong... </ErrorHeader>
    <ErrorParagraph>
      Sorry, failed to load Github projects.
      <br />
      You can check them directly on Github.
    </ErrorParagraph>
    <Link>Go to Github</Link>
  </ErrorWrapper>
);
