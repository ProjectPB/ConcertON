import React from "react";
import styled from "styled-components";

function Message({ author, text }) {
    return (
        <MessageContainer>
            <MessageBody>
                <Author>
                    {author}
                    <Text>{text}</Text>
                </Author>
            </MessageBody>
        </MessageContainer>
    );
}

export default Message;

const MessageContainer = styled.div`
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

const Text = styled.span`
    margin-left: 5px;
    font-size: 12px;
    font-weight: 400;
    word-break: break-all;
`;
