import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectLoading } from "./redux/loadingSlice";

import Loading from "./components/Loading";

import Homepage from "./pages/Homepage";
import Streampage from "./pages/Streampage";

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
          <Streampage />
        </Route>
        <Route path="/">
          {loading && <Loading />}
          <Homepage
            style={
              loading
                ? {
                    visibility: "hidden",
                    height: "0px",
                    overflow: "hidden",
                  }
                : {}
            }
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
