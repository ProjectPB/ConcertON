import React from "react";
import {
  HeaderContainer,
  NavContainer,
  Typography,
  LeftContainer,
} from "./Styles";
import { Link } from "react-scroll";
import Logo from "../Logo";

const Header = ({ options }) => {
  return (
    <HeaderContainer>
      <LeftContainer>
        <Logo />
      </LeftContainer>
      {options && (
        <NavContainer>
          <Link to="watch" smooth duration={500}>
            <Typography>Watch</Typography>
          </Link>
          <Link to="sponsors" smooth duration={500}>
            <Typography>Sponsors</Typography>
          </Link>
        </NavContainer>
      )}
    </HeaderContainer>
  );
};

export default Header;
