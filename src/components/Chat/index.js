import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import firebase from "firebase/app";
import { db } from "../../firebase/utils";
import Message from "../Message";
import FormButton from "./../FormButton";
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
  Typography,
  NoAccountBar,
  SendMessageIcon,
} from "./Styles";
import { Link } from "react-router-dom";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const Chat = () => {
  const { currentUser } = useSelector(mapState);
  const { eventId } = useParams();
  const messagesBottom = useRef();
  const messagesTop = useRef();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [nextMessages, setNextMessages] = useState([]);
  const [lastVisibleMessage, setLastVisibleMessage] = useState();
  const [messagesCounter, setMessagesCounter] = useState(0);
  const [writing, setWriting] = useState(false);

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

  useEffect(() => {
    if (input.length === 0 || input.length > 200) {
      setWriting(false);
    } else {
      setWriting(true);
    }
  }, [input]);

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
        author: currentUser.displayName,
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
        author: currentUser.displayName,
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
      {currentUser ? (
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
            <SendMessageIcon
              onClick={sendMessageOnIconClick}
              active={writing}
            />
          </InputBottomContainer>
        </InputContainer>
      ) : (
        <NoAccountBar>
          <Typography>Please Sign In to comment</Typography>
          <Link to="/auth">
            <FormButton primary>Sign In</FormButton>
          </Link>
        </NoAccountBar>
      )}
    </ChatContainer>
  );
};

export default Chat;
