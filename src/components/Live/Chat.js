import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import firebase from "firebase/app";
import { db } from "../../firebase";
import Message from "./Message";
import SendIcon from "@material-ui/icons/Send";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/userSlice";
import UserInput from "./UserInput";

function Chat() {
    const username = useSelector(selectUser);
    const { eventId } = useParams();
    const messagesEnd = useRef();
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        db.collection("events")
            .doc(eventId)
            .collection("messages")
            .orderBy("timestamp", "desc")
            .limit(100)
            .onSnapshot((snapshot) =>
                setMessages(snapshot.docs.map((doc) => doc.data()))
            );
    }, [eventId]);

    useEffect(() => {
        scrollToBottom();
    }, []);

    const scrollToBottom = () => {
        messagesEnd.current?.scrollIntoView({ behavior: "smooth" });
    };

    const sendMessage = (e) => {
        if (
            e.keyCode === 13 &&
            e.shiftKey === false &&
            input &&
            input.length <= 200
        ) {
            e.preventDefault();
            db.collection("events").doc(eventId).collection("messages").add({
                author: username,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                text: input,
            });
            setInput("");
        }
    };

    const sendMessageOnIconClick = (e) => {
        if (input && input.length <= 200) {
            e.preventDefault();
            db.collection("events").doc(eventId).collection("messages").add({
                author: username,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                text: input,
            });
            setInput("");
        }
    };

    return (
        <ChatContainer>
            <Header>Comments</Header>
            <Messages>
                <MessagesEndRef ref={messagesEnd} />
                {messages.map((message) => (
                    <Message author={message?.author} text={message?.text} />
                ))}
            </Messages>
            {username ? (
                <InputContainer>
                    <Input
                        onKeyDown={sendMessage}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Write a comment..."
                        spellCheck="false"
                    />
                    <InputBottomContainer>
                        <TextLength>{input.length} / 200</TextLength>
                        <SendIcon
                            onClick={sendMessageOnIconClick}
                            style={{
                                cursor: "pointer",
                                color:
                                    input.length === 0 || input.length > 200
                                        ? "lightgray"
                                        : "darkblue",
                            }}
                        />
                    </InputBottomContainer>
                </InputContainer>
            ) : (
                <UserInput />
            )}
        </ChatContainer>
    );
}

const ChatContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    flex: 0.25;
    padding: 5px;
    background-color: white;
    overflow: hidden;
    border-radius: 5px;
    margin-left: 30px;
    margin-right: 10px;
    @media (max-width: 1200px) {
        width: 100%;
        margin: 0 auto;
        max-width: 600px;
        flex: 1;
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
    flex-direction: column-reverse;
    flex: 1;
    > * {
        &:first-child {
            margin-top: auto !important;
        }
    }
`;

const MessagesEndRef = styled.div``;

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
