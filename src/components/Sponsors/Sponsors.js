import React from "react";
import styled from "styled-components";

function Sponsors() {
    return (
        <SponsorsContainer id="sponsors">
            <Typography>Sponsors</Typography>
            <ImagesContainer>
                <Image
                    src="https://image.flaticon.com/icons/png/512/546/546490.png"
                    alt=""
                />
                <Image
                    src="https://image.freepik.com/free-vector/fashion-logo_23-2148558723.jpg"
                    alt=""
                />
                <Image
                    src="https://image.freepik.com/free-vector/simple-spartan-vector-template-logo-design_115591-16.jpg"
                    alt=""
                />
                <Image
                    src="https://image.freepik.com/free-vector/logo-with-house-wave_1017-1013.jpg"
                    alt=""
                />
            </ImagesContainer>
        </SponsorsContainer>
    );
}

const SponsorsContainer = styled.div`
    padding: 10px;
`;

const Typography = styled.h3`
    width: 100%;
    text-align: center;
    font-size: 20px;
    font-weight: 400;
    display: block;
    margin-bottom: 10px;
`;

const ImagesContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    padding: 5px;
    flex-wrap: wrap;
    justify-content: center;
`;

const Image = styled.img`
    margin: 0 30px;
    width: 100px;
    object-fit: contain;
`;

export default Sponsors;
