import React from "react";
import { useHistory } from "react-router";
import { LogoContainer, LogoImg } from "./Styles.js";

const Logo = () => {
  const history = useHistory();

  return (
    <LogoContainer>
      <LogoImg onClick={() => history.push("/")}>EventStream</LogoImg>
    </LogoContainer>
  );
};

export default Logo;
