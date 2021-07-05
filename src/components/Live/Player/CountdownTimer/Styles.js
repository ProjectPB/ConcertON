import styled from "styled-components";

export const CountdownTimerContainer = styled.div`
    width: 100%;
`;

export const ItemContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    margin: 15px 5px;
    border: 1px solid white;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    @media (max-width: 1200px) {
        height: 50px;
        width: 50px;
    }
`;

export const Time = styled.h3`
    color: white;
    font-size: 40px;
    @media (max-width: 1200px) {
        font-size: 20px;
    }
`;
export const Typography = styled.p`
    color: white;
    font-size: 16px;
    @media (max-width: 1200px) {
        font-size: 8px;
    }
`;
