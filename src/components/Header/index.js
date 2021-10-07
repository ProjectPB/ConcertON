import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as ScrollLink } from "react-scroll";
import Logo from "../Logo";
import { Link } from "react-router-dom";
import { signOutUserStart } from "./../../redux/User/user.actions";
import {
  HeaderContainer,
  NavContainer,
  Typography,
  LeftContainer,
  BorderedTypography,
} from "./Styles";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const Header = ({ options }) => {
  const { currentUser } = useSelector(mapState);
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(signOutUserStart());
  };

  return (
    <HeaderContainer
      style={!options ? { justifyContent: "center", height: "50px" } : {}}
    >
      <LeftContainer>
        <Logo />
      </LeftContainer>
      {options && (
        <NavContainer>
          <ScrollLink to="watch" smooth duration={500}>
            <Typography>Watch</Typography>
          </ScrollLink>
          <ScrollLink to="sponsors" smooth duration={500}>
            <Typography>Sponsors</Typography>
          </ScrollLink>
          {!currentUser && (
            <Link to="/auth">
              <BorderedTypography>Sign In</BorderedTypography>
            </Link>
          )}
          {currentUser && (
            <BorderedTypography onClick={signOut}>Sign out</BorderedTypography>
          )}
        </NavContainer>
      )}
    </HeaderContainer>
  );
};

export default Header;
