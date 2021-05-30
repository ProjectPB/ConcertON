import React from "react";
import styled from "styled-components";
import Header from "./components/Header/Header";
import Slideshow from "./components/Slideshow/Slideshow";
import Sponsors from "./components/Sponsors/Sponsors";
import Streams from "./components/Streams/Streams";

function App() {
    return (
        <AppContainer>
            <Header />
            <Slideshow />
            <Streams />
            <Sponsors />
        </AppContainer>
    );
}

export default App;

const AppContainer = styled.div`
    background-color: lightgray;
`;
