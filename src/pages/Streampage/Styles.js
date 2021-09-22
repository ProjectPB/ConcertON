import styled from "styled-components";

export const StreampageContainer = styled.div`
  height: 100vh;
`;

export const MainContainer = styled.div`
  display: flex;
  height: calc(100% - 50px);
  padding: 0 10px 10px 10px;
  @media (max-width: 1200px) {
    flex-direction: column;
    padding: 0;
  }
`;
