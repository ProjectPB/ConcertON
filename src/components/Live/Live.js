import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import Chat from "./Chat";
import Player from "./Player";

function Live() {
    const history = useHistory();

    return (
        <LiveContainer>
            <Logo onClick={() => history.push("/")}>EventStream</Logo>
            <Container>
                <Player />
                <Chat />
            </Container>
        </LiveContainer>
    );
}

const LiveContainer = styled.div`
    background-color: black;
    height: calc(100vh - 55px);
    @media (max-width: 1200px) {
        height: 100vh;
    }
`;

const Logo = styled.h1`
    text-align: center;
    height: 55px;
    font-size: 32px;
    color: white;
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

const Container = styled.div`
    display: flex;
    height: 100%;
    background-color: black;
    @media (max-width: 1200px) {
        flex-direction: column;
    }
`;

export default Live;
