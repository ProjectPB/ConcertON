import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

function Stream({ id, name, timestamp, image }) {
    const history = useHistory();

    return (
        <StreamContainer>
            <Image
                src={image}
                alt={name}
                onClick={() => history.push(`/live/${id}`)}
            />
            <DataContainer>
                <Name>{name}</Name>
                <Date>{timestamp}</Date>
            </DataContainer>
        </StreamContainer>
    );
}

const StreamContainer = styled.div`
    width: calc(50% - 40px);
    margin: 20px;
    @media (max-width: 768px) {
        width: 100%;
    }
`;
const DataContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Name = styled.h1`
    color: white;
    font-size: 20px;
`;
const Date = styled.h2`
    color: white;
    font-size: 16px;
    font-weight: 400;
`;
const Image = styled.img`
    width: 100%;
    cursor: pointer;
    :hover {
        opacity: 0.7;
        box-shadow: 0 0 10px 10px #4161b6;
        transition: ease-out 0.3s;
        transform: scale(0.96);
    }
`;

export default Stream;
