import styled from "styled-components";

export const StreampageContainer = styled.div`
  height: 100vh;
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
