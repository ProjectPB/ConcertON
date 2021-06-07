import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

function Stream({ id, name, description, timestamp, image }) {
    const history = useHistory();

    return (
        <StreamContainer>
            <Image src={image} alt={name} />
            <Name>{name}</Name>
            <Date>{timestamp}</Date>
            <Button onClick={() => history.push(`/live/${id}`)}>WATCH</Button>
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
