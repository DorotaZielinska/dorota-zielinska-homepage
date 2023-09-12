import React from "react";
import { LoaderIcon, LoaderParagraph, LoaderWrapper } from "./styled";

export const Loader = () => (
    <LoaderWrapper>
        <LoaderParagraph>
        Please wait, projects are being loaded...
        </LoaderParagraph>
        <LoaderIcon />
    </LoaderWrapper>
)