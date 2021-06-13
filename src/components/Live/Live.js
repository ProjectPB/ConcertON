import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import Chat from "./Chat";
import Player from "./Player";

function Live() {
    const history = useHistory();

    return (
        <LiveContainer>
            <LogoContainer>
                <Logo onClick={() => history.push("/")}>EventStream</Logo>
            </LogoContainer>
            <Container>
                <Player />
                <Chat />
            </Container>
        </LiveContainer>
    );
}

const LiveContainer = styled.div`
    background-color: black;
    height: 100vh;
    @media (max-width: 1200px) {
        height: 100vh;
    }
`;

const LogoContainer = styled.div`
    width: 100%;
`;

const Logo = styled.h1`
    text-align: center;
    font-size: 25px;
    color: white;
    cursor: pointer;
    width: fit-content;
    padding: 10px;
    margin: 0 auto;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;

const Container = styled.div`
    display: flex;
    background-color: black;
    height: calc(100vh - 55px);
    width: 100vw;
    margin: 0 auto;
    padding-bottom: 30px;
    justify-content: center;
    @media (max-width: 1000px) {
        flex-direction: column;
        padding: 0;
    }
`;

export default Live;
