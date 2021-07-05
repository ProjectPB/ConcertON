import styled from "styled-components";

export const ImageContainer = styled.div`
    -webkit-box-shadow: inset 0px -10px 30px 40px rgba(0, 0, 0, 1);
    -moz-box-shadow: inset 0px -10px 30px 40px rgba(0, 0, 0, 1);
    box-shadow: inset 0px -10px 30px 40px rgba(0, 0, 0, 1);
    position: relative;
    width: 100%;
    height: 90vh;
    @media (max-width: 768px) {
        height: 55vh;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    display: block;
    position: relative;
    object-fit: cover;
    z-index: -1;
`;

export const CaptionContainer = styled.div`
    top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
`;

export const Caption = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

export const Title = styled.h1`
    color: white;
    text-align: center;
    width: 80%;
    font-size: 50px;
    margin-bottom: 10px;
    @media (max-width: 768px) {
        font-size: 25px;
        width: 70%;
    }
`;
export const Date = styled.h2`
    color: white;
    font-size: 30px;
    font-weight: 300;
    @media (max-width: 768px) {
        font-size: 15px;
    }
`;
