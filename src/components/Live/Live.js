import React from "react";
import { useHistory } from "react-router-dom";

import Chat from "./Chat/Chat";
import Player from "./Player/Player";

import { LiveContainer, LogoContainer, Logo, MainContainer } from "./Styles";

function Live() {
    const history = useHistory();

    return (
        <LiveContainer>
            <LogoContainer>
                <Logo onClick={() => history.push("/")}>EventStream</Logo>
            </LogoContainer>
            <MainContainer>
                <Player />
                <Chat />
            </MainContainer>
        </LiveContainer>
    );
}

export default Live;
