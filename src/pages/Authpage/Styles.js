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
  height: 75%;
  min-width: 400px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 2px solid #8b0000;
  border-radius: 10px;
  padding: 20px;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ButtonContainer = styled.div`
  width: calc(50% - 5px);
`;

export const Typography = styled.h1`
  display: block;
  font-size: 30px;
  font-weight: 600;
  text-transform: uppercase;
`;
