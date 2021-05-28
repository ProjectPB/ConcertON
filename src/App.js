import React from "react";
import styled from "styled-components";
import Slideshow from "./components/Slideshow/Slideshow";

function App() {
    return (
        <AppContainer>
            <Slideshow />
        </AppContainer>
    );
}

export default App;

const AppContainer = styled.div`
    background-color: gray;
`;
