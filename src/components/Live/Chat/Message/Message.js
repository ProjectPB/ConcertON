import React from "react";
import { MessageContainer, MessageBody, Author, Text } from "./Styles";

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
