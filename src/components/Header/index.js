import React from "react";
import { HeaderContainer, Logo, NavContainer, Typography } from "./Styles";
import { Link } from "react-scroll";

function Header() {
    return (
        <HeaderContainer>
            <Logo>EventStream</Logo>
            <NavContainer>
                <Link to="watch" smooth duration={500}>
                    <Typography>Watch</Typography>
                </Link>
                <Link to="sponsors" smooth duration={500}>
                    <Typography>Sponsors</Typography>
                </Link>
            </NavContainer>
        </HeaderContainer>
    );
}

export default Header;
