import styled from "styled-components";
import ReactLoading from "react-loading";
import ReactPlayer from "react-player";

export const PlayerContainer = styled.div`
  flex: 0.75;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-right: 10px;
  @media (max-width: 1200px) {
    flex: 0;
    margin: 0 auto;
    max-width: 600px;
  }
`;

export const ScreenContainer = styled.div`
  position: relative;
  height: fit-content;
`;

export const Screen = styled(ReactPlayer)`
  height: 100%;
`;

export const Title = styled.h1`
  color: white;
  display: block;
  padding: 10px 0;
  font-size: 24px;
  @media (max-width: 1200px) {
    font-size: 16px;
    padding: 5px;
  }
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
