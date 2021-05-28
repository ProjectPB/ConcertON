import React from "react";
import styled from "styled-components";
import Header from "./components/Header/Header";
import Slideshow from "./components/Slideshow/Slideshow";

function App() {
    return (
        <AppContainer>
            <Header />
            <Slideshow />
        </AppContainer>
    );
}

export default App;

const AppContainer = styled.div`
    background-color: lightgray;
`;
