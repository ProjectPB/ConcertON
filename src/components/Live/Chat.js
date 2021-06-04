import React, { useState } from "react";
import styled from "styled-components";
import Message from "./Message";
import SendIcon from "@material-ui/icons/Send";

function Chat() {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
        {
            author: "Patryk",
            text: "Lubie jesc makaron",
            timestamp: "11.05.2021 12:35",
        },
        {
            author: "Patryk",
            text: "Lubie jesc makaron",
            timestamp: "11.05.2021 12:35",
        },
        {
            author: "Patryk",
            text: "Lubie jesc makaron",
            timestamp: "11.05.2021 12:35",
        },
    ]);

    const autoSendMessage = (e) => {
        if (e.keyCode === 13 && e.shiftKey === false && input) {
            e.preventDefault();
            alert(input);
            setInput("");
        }
    };

    const sendMessage = (e) => {
        if (input) {
            e.preventDefault();
            alert(input);
            setInput("");
        }
    };

    return (
        <ChatContainer>
            <Header>Comments</Header>
            <Messages>
                {messages.map((message) => (
                    <Message
                        author={message.author}
                        text={message.text}
                        timestamp={message.timestamp}
                    />
                ))}
            </Messages>
            <InputContainer>
                <Input
                    onKeyDown={autoSendMessage}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Write a comment..."
                    spellCheck="false"
                />
                <InputBottomContainer>
                    <TextLength>{input.length} / 200</TextLength>
                    <SendIcon
                        onClick={sendMessage}
                        style={{
                            cursor: "pointer",
                            color:
                                input.length === 0 ? "lightgray" : "darkblue",
                        }}
                    />
                </InputBottomContainer>
            </InputContainer>
        </ChatContainer>
    );
}

const ChatContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 0.25;
    width: 100%;
    max-width: 450px;
    margin: 10px auto;
    padding: 5px;
    background-color: white;
    overflow: hidden;
    outline: 1px solid darkblue;
    @media (max-width: 1200px) {
        flex: 0.5;
    }
    @media (max-width: 768px) {
        max-width: 350px;
        margin: 0 auto;
    }
`;
const Header = styled.h1`
    font-size: 14px;
    font-weight: 500;
    border-bottom: 1px solid darkblue;
    padding: 5px;
    margin-bottom: -3px;
`;
const Messages = styled.div`
    overflow-x: hidden;
    overflow-y: scroll;
    margin: 5px 0 5px 0;
    display: flex;
    flex-direction: column;
    align-items: right;
    flex: 1;
`;

const InputContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    border: 1px solid darkblue;
    justify-content: flex-end;
    padding: 5px;
    border-radius: 5px;
`;

const Input = styled.textarea`
    width: 100%;
    height: 100%;
    resize: none;
    border: none;
    outline: none;
`;

const InputBottomContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const TextLength = styled.p`
    margin-right: 5px;
    font-size: 12px;
    font-weight: 400;
`;

export default Chat;
