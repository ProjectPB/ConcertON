import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

function Player({ data }) {
    console.log(data.timestamp);
    return (
        <PlayerContainer>
            <Screen>
                <ReactPlayer
                    url="https://static.videezy.com/system/resources/previews/000/005/038/original/Alive_4K_Motion_Background_Loop.mp4"
                    loop
                    playing={true}
                    muted={true}
                    width="100%"
                    height="100%"
                />
                <TimerContainer>
                    <Typography>Event starts at</Typography>
                    <Timer>33333</Timer>
                </TimerContainer>
            </Screen>
            <Title>{data.name}</Title>
        </PlayerContainer>
    );
}

const PlayerContainer = styled.div`
    flex: 0.75;
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    @media (max-width: 1000px) {
        flex: 0;
        margin: 0 auto;
        max-width: 600px;
        padding-bottom: 10px;
    }
`;

const Screen = styled.div`
    position: relative;
`;
const TimerContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    align-items: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
const Typography = styled.h2`
    color: white;
    font-size: 20px;
`;
const Timer = styled.h3`
    color: white;
    font-size: 50px;
`;

const Title = styled.h1`
    color: white;
    margin-top: 5px;
`;

export default Player;
