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
    justify-content: space-between;
    background-color: black;
    z-index: 99;
    width: 100%;
    padding: 10px 10px 0 10px;
`;

const Logo = styled.div`
    color: white;
    font-size: 32px;
    flex: 1;
    padding: 5px;
    cursor: pointer;
    margin-left: 10px;
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
    justify-content: space-evenly;
`;

const Typography = styled.p`
    font-size: 24px;
    color: white;
    cursor: pointer;
    text-align: center;
    padding: 10px;
    margin: 0 30px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    @media (max-width: 768px) {
        font-size: 18px;
    }
    :hover {
        color: lightgray;
    }
`;
