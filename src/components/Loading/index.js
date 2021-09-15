import React from "react";
import ReactLoading from "react-loading";
import Logo from "../Logo";
import { LoadingContainer } from "./Styles";

const Loading = () => {
  return (
    <LoadingContainer>
      <Logo />
      <ReactLoading type="bubbles" width={75} />
    </LoadingContainer>
  );
};

export default Loading;
