import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

function Player() {
    return (
        <PlayerContainer>
            <ReactPlayer
                url="https://www.youtube.com/watch?v=5qap5aO4i9A"
                controls
                width="100%"
                height="100%"
            />
        </PlayerContainer>
    );
}

const PlayerContainer = styled.div`
    flex: 0.75;
    margin: 10px;
    @media (max-width: 1200px) {
        flex: 0.5;
    }
`;

export default Player;
