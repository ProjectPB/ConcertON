import styled from "styled-components";
import ReactLoading from "react-loading";

export const PlayerContainer = styled.div`
    flex: 0.75;
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    @media (max-width: 1200px) {
        flex: 0;
        margin: 0 auto;
        max-width: 600px;
        padding-bottom: 10px;
    }
`;
export const Screen = styled.div`
    position: relative;
`;

export const TimerContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    align-items: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const LoadingContainer = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
`;

export const LoadingIcon = styled(ReactLoading)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const Typography = styled.h2`
    color: white;
    font-size: 20px;
    @media (max-width: 1200px) {
        font-size: 12px;
    }
`;
export const Title = styled.h1`
    color: white;
    margin-top: 10px;
    font-size: 24px;
    @media (max-width: 1200px) {
        font-size: 16px;
        margin-left: 10px;
        margin-top: 5px;
    }
`;
