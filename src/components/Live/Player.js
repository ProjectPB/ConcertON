import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import styled from "styled-components";
import { db } from "../../firebase";
import CountdownTimer from "./CountdownTimer";
import ReactLoading from "react-loading";

function Player() {
    const history = useHistory();
    const [data, setData] = useState([]);
    const [timeReady, setTimeReady] = useState(false);
    const { eventId } = useParams();

    useEffect(() => {
        db.collection("events")
            .doc(eventId)
            .get()
            .then((doc) => {
                setData(doc.data());
                setTimeReady(true);
            });
    }, [eventId]);

    return !data ? (
        history.goBack()
    ) : (
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
                {timeReady ? (
                    <TimerContainer>
                        <Typography>Event starts at</Typography>
                        <CountdownTimer
                            date={data?.timestamp?.seconds * 1000}
                        />
                    </TimerContainer>
                ) : (
                    <LoadingContainer>
                        <ReactLoading type="bubbles" width={100} />
                    </LoadingContainer>
                )}
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
    @media (max-width: 1200px) {
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

const LoadingContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const Typography = styled.h2`
    color: white;
    font-size: 20px;
    @media (max-width: 1200px) {
        font-size: 12px;
    }
`;
const Title = styled.h1`
    color: white;
    margin-top: 10px;
    font-size: 24px;
    @media (max-width: 1200px) {
        font-size: 16px;
        margin-left: 10px;
        margin-top: 5px;
    }
`;

export default Player;
