import React from "react";
import styled from "styled-components";

function Stream({ eventData }) {
    return (
        <StreamContainer>
            <Image src={eventData.img} alt={eventData.name} />
            <Name>{eventData.name}</Name>
            <Date>{eventData.date}</Date>
            <Button>WATCH</Button>
        </StreamContainer>
    );
}

const StreamContainer = styled.div`
    width: calc(50% - 20px);
    margin: 10px;
`;
const Name = styled.h3``;
const Date = styled.p``;
const Image = styled.img`
    width: 100%;
`;

const Button = styled.button`
    padding: 15px 30px;
    background-color: #d2042d;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    border: 1px solid black;
`;

export default Stream;
