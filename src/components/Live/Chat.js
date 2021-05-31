import React from "react";
import styled from "styled-components";

function Chat() {
    return (
        <ChatContainer>
            <h1>chat</h1>
            <h1>chat</h1>
            <h1>chat</h1>
            <h1>chat</h1>
            <h1>chat</h1>
            <h1>chat</h1>
            <h1>chat</h1>
            <h1>chat</h1>
            <h1>chat</h1>
            <h1>chat</h1>
            <h1>chat</h1>
            <h1>chat</h1>
            <h1>chat</h1>
            <h1>chat</h1>
            <h1>chat</h1>
            <h1>chat</h1>
            <h1>chat</h1>
            <h1>chat</h1>
            <h1>chat</h1>
            <h1>chat</h1>
        </ChatContainer>
    );
}

const ChatContainer = styled.div`
    flex: 0.25;
    width: 100%;
    max-width: 450px;
    overflow-y: scroll;
    overflow-x: hidden;
    margin: 10px auto;
    background-color: white;
    @media (max-width: 1200px) {
        flex: 0.5;
    }
`;

export default Chat;
