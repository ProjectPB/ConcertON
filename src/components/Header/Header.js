import React from "react";
import styled from "styled-components";
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

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    justify-content: space-between;
    z-index: 99;
    width: 100%;
    padding: 20px;
    background-image: linear-gradient(
        to top,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.9)
    );
`;

const Logo = styled.div`
    font-size: 32px;
    color: white;
    flex: 0.75;
    padding: 10px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    @media (max-width: 768px) {
        font-size: 24px;
    }
`;

const NavContainer = styled.div`
    display: flex;
    align-items: center;
    flex: 0.25;
    justify-content: space-evenly;
`;

const Typography = styled.p`
    font-size: 24px;
    color: white;
    cursor: pointer;
    text-align: center;
    margin-right: 20px;
    padding: 10px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    @media (max-width: 768px) {
        font-size: 18px;
        margin-right: 10px;
    }
`;
