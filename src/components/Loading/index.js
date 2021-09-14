import React from "react";
import ReactLoading from "react-loading";
import { LoadingContainer, Logo } from "./Styles";

function Loading() {
    return (
        <LoadingContainer>
            <Logo>EventStream</Logo>
            <ReactLoading type="bubbles" width={100} />
        </LoadingContainer>
    );
}

export default Loading;
