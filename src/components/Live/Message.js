import React from "react";
import styled from "styled-components";

function Message({ author, text, timestamp }) {
    return (
        <MessageContainer>
            <MessageBody>
                <Author>{author}</Author>
                <Text>{text}</Text>
            </MessageBody>
            <Timestamp>{timestamp}</Timestamp>
        </MessageContainer>
    );
}

export default Message;

const MessageContainer = styled.div`
    border-bottom: 1px solid lightgray;
    margin-right: 5px;
    padding: 2.5px 0;
`;

const MessageBody = styled.div`
    display: flex;
    align-items: center;
    padding-bottom: 2px;
`;

const Author = styled.p`
    margin: 0 5px;
    font-size: 12px;
    font-weight: 650;
`;

const Text = styled.h3`
    width: fit-content;
    border-radius: 5px;
    font-size: 12px;
    font-weight: 400;
    word-break: break-all;
`;
const Timestamp = styled.p`
    margin-left: 5px;
    font-size: 10px;
    font-weight: 400;
    color: gray;
    float: right;
`;
