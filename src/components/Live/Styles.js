import styled from "styled-components";

export const LiveContainer = styled.div`
    background-color: black;
    height: 100vh;
    max-width: 1400px;
    margin: 0 auto;
`;
export const LogoContainer = styled.div`
    width: 100%;
`;
export const Logo = styled.h1`
    text-align: center;
    font-size: 24px;
    color: white;
    cursor: pointer;
    width: fit-content;
    padding: 10px;
    margin: 0 auto;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;

export const MainContainer = styled.div`
    display: flex;
    background-color: black;
    height: calc(100vh - 55px);
    margin: 0 auto;
    padding-bottom: 30px;
    justify-content: center;
    @media (max-width: 1200px) {
        flex-direction: column;
        padding: 0;
    }
`;
