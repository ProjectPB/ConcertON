import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectLoading } from "./redux/loadingSlice";

import Header from "./components/Header/Header";
import Slideshow from "./components/Slideshow/Slideshow";
import Sponsors from "./components/Sponsors/Sponsors";
import Streams from "./components/Streams/Streams";
import Live from "./components/Live/Live";
import Loading from "./components/Loading/Loading";

import { AppContainer } from "./Styles";

function App() {
    const [loading, setLoading] = useState(true);
    const loadingStates = useSelector(selectLoading);

    useEffect(() => {
        if (
            loadingStates.slideshowLoaded &&
            loadingStates.sponsorsLoaded &&
            loadingStates.streamsLoaded
        ) {
            setLoading(false);
        }
    }, [loadingStates, loading]);

    return (
        <Router>
            <Switch>
                <Route path="/live/:eventId">
                    <Live />
                </Route>
                <Route path="/">
                    {loading && <Loading />}
                    <AppContainer style={loading ? { display: "none" } : {}}>
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
