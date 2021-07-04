import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

function Stream({ id, name, timestamp, image, loadStream }) {
    const history = useHistory();
    const [imgLoaded, setImgLoaded] = useState(false);

    useEffect(() => {
        if (imgLoaded) {
            loadStream();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [imgLoaded]);

    return (
        <StreamContainer style={imgLoaded ? {} : { visibility: "hidden" }}>
            <Image
                src={image}
                alt={name}
                loading="lazy"
                onClick={() => history.push(`/live/${id}`)}
                onLoad={() => setImgLoaded(true)}
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
