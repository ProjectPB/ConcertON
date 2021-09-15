import React from "react";
import { useHistory } from "react-router";
import { LogoContainer, LogoText, LogoSpan } from "./Styles.js";

const Logo = () => {
  const history = useHistory();

  return (
    <LogoContainer>
      <LogoText onClick={() => history.push("/")}>
        Concert<LogoSpan>ON</LogoSpan>
      </LogoText>
    </LogoContainer>
  );
};

export default Logo;
