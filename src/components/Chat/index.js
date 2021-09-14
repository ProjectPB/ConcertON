import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/userSlice";
import firebase from "firebase/app";
import { db } from "../../firebase/utils";
import SendIcon from "@material-ui/icons/Send";
import Message from "../Message";
import UserInput from "../UserInput";
import {
  ChatContainer,
  Header,
  Messages,
  MessagesBottomRef,
  MoreIcon,
  InputContainer,
  Input,
  InputBottomContainer,
  TextLength,
} from "./Styles";

function Chat() {
  const username = useSelector(selectUser);
  const { eventId } = useParams();
  const messagesBottom = useRef();
  const messagesTop = useRef();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [nextMessages, setNextMessages] = useState([]);
  const [lastVisibleMessage, setLastVisibleMessage] = useState();
  const [messagesCounter, setMessagesCounter] = useState(0);

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
    db.collection("events")
      .doc(eventId)
      .collection("messages")
      .onSnapshot((snapshot) => {
        setMessagesCounter(snapshot.docs.length);
      });
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
        {messagesCounter > messages.length && (
          <MoreIcon onClick={getNextMessages} ref={messagesTop} />
        )}
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

export default Chat;
