import styled from "styled-components";

export const AuthpageContainer = styled.div`
  height: 100%;
  width: 100%;
`;

export const MainContainer = styled.div`
  display: grid;
  place-items: center;
  height: calc(100vh - 60px);
  padding: 0 20px;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  align-items: center;
  min-height: 70%;
  width: 40%;
  min-width: 600px;
  padding: 20px;
  border: 1px solid white;
  border-radius: 10px;
  background-color: #121212;

  @media (max-width: 768px) {
    width: 100%;
    min-width: auto;
  }
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const ButtonContainer = styled.div`
  width: calc(50% - 5px);
`;

export const Typography = styled.h1`
  display: block;
  font-size: 30px;
  font-weight: 600;
  text-transform: uppercase;
  color: white;
  margin-bottom: 15px;
`;
