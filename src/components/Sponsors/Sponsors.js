import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { db } from "../../firebase";

function Sponsors() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        db.collection("sponsors")
            .get()
            .then((querySnapshot) =>
                setImages(querySnapshot.docs.map((doc) => doc.data()))
            );
    }, []);

    return (
        <SponsorsContainer id="sponsors">
            <Typography>Sponsors</Typography>
            <ImagesContainer>
                {images.map((item) => (
                    <Image src={item.url} alt="" />
                ))}
            </ImagesContainer>
        </SponsorsContainer>
    );
}

const SponsorsContainer = styled.div`
    padding: 10px;
`;

const Typography = styled.h1`
    width: 100%;
    color: white;
    text-align: center;
    font-size: 20px;
    margin-bottom: 10px;
`;

const ImagesContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

const Image = styled.img`
    margin: 15px 30px;
    height: 75px;
    object-fit: contain;
    cursor: pointer;
`;

export default Sponsors;
