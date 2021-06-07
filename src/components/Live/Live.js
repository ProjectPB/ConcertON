import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";

import Chat from "./Chat";
import Player from "./Player";
import { db } from "../../firebase";

function Live() {
    const history = useHistory();
    const [messages, setMessages] = useState([]);
    const [data, setData] = useState([]);
    const { eventId } = useParams();

    useEffect(() => {
        db.collection("events")
            .doc(eventId)
            .collection("messages")
            .orderBy("timestamp", "asc")
            .onSnapshot((snapshot) =>
                setMessages(snapshot.docs.map((doc) => doc.data()))
            );

        db.collection("events")
            .doc(eventId)
            .get()
            .then((doc) => {
                setData(doc.data());
            });
    }, [eventId]);

    return !data ? (
        history.goBack()
    ) : (
        <LiveContainer>
            <Logo onClick={() => history.push("/")}>EventStream</Logo>
            <Container>
                <Player />
                <Chat messages={messages} />
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
