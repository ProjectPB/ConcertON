import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import firebase from "firebase/app";
import { db } from "../../firebase";
import Message from "./Message";
import SendIcon from "@material-ui/icons/Send";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/userSlice";
import UserInput from "./UserInput";
import { UnfoldMore } from "@material-ui/icons";

function Chat() {
    const username = useSelector(selectUser);
    const { eventId } = useParams();
    const messagesBottom = useRef();
    const messagesTop = useRef();
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);
    const [nextMessages, setNextMessages] = useState([]);
    const [lastVisibleMessage, setLastVisibleMessage] = useState();

    useEffect(() => {
        db.collection("events")
            .doc(eventId)
            .collection("messages")
            .orderBy("timestamp", "desc")
            .limit(50)
            .onSnapshot((snapshot) =>
                setMessages(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    }))
                )
            );
        scrollToBottom();
    }, [eventId]);

    useEffect(() => {
        setLastVisibleMessage(messages[messages.length - 1]);
    }, [messages]);

    useEffect(() => {
        setMessages(messages.concat(nextMessages));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [nextMessages]);

    const getNextMessages = (e) => {
        e.preventDefault();
        db.collection("events")
            .doc(eventId)
            .collection("messages")
            .orderBy("timestamp", "desc")
            .startAfter(lastVisibleMessage?.data?.timestamp)
            .limit(50)
            .onSnapshot((snapshot) =>
                setNextMessages(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    }))
                )
            );
    };

    const scrollToBottom = () => {
        messagesBottom.current?.scrollIntoView({ behavior: "smooth" });
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
                <MessagesBottomRef ref={messagesBottom} />
                {messages.map(({ id, data }) => (
                    <Message key={id} author={data?.author} text={data?.text} />
                ))}
                <MoreIcon onClick={getNextMessages} ref={messagesTop} />
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

const MessagesBottomRef = styled.div``;

const MoreIcon = styled(UnfoldMoreIcon)`
    padding: 5px;
    margin: 0 auto;
    margin-top: 5px;
    color: darkblue;
    background-color: whitesmoke;
    cursor: pointer;
    border-radius: 100%;
    border: 1px solid;
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
