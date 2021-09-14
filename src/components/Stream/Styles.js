import styled from "styled-components";

export const StreamContainer = styled.div`
    width: calc(50% - 40px);
    margin: 20px;
    @media (max-width: 768px) {
        width: 100%;
    }
`;
export const DataContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Name = styled.h1`
    color: white;
    font-size: 20px;
`;
export const Date = styled.h2`
    color: white;
    font-size: 16px;
    font-weight: 400;
`;
export const Image = styled.img`
    width: 100%;
    cursor: pointer;
    :hover {
        opacity: 0.7;
        box-shadow: 0 0 10px 10px #4161b6;
        transition: ease-out 0.3s;
        transform: scale(0.96);
    }
`;
