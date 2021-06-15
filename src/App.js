import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Slideshow from "./components/Slideshow/Slideshow";
import Sponsors from "./components/Sponsors/Sponsors";
import Streams from "./components/Streams/Streams";
import Live from "./components/Live/Live";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/live/:eventId">
                    <Live />
                </Route>
                <Route path="/">
                    <AppContainer>
                        <Header />
                        <Slideshow />
                        <Streams />
                        <Sponsors />
                    </AppContainer>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;

const AppContainer = styled.div`
    background-color: black;
    max-width: 1400px;
    margin: 0 auto;
`;
