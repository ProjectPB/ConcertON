import styled from "styled-components";

export const LoadingContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Logo = styled.div`
    color: white;
    font-size: 32px;
    padding: 5px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    @media (max-width: 768px) {
        font-size: 24px;
    }
`;