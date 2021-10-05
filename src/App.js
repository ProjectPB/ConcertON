import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "./components/Loading";
import Homepage from "./pages/Homepage";
import Streampage from "./pages/Streampage";
import Authpage from "./pages/Authpage";

const mapState = ({ loading }) => ({
  slideshowLoaded: loading.slideshowLoaded,
  streamsLoaded: loading.streamsLoaded,
  sponsorsLoaded: loading.sponsorsLoaded,
});

const App = () => {
  const [loading, setLoading] = useState(true);
  const { slideshowLoaded, streamsLoaded, sponsorsLoaded } =
    useSelector(mapState);

  useEffect(() => {
    if (slideshowLoaded && sponsorsLoaded && streamsLoaded) {
      setLoading(false);
    }
    return () => {
      setLoading(true);
    };
  }, [slideshowLoaded, sponsorsLoaded, streamsLoaded, loading]);

  return (
    <Router>
      <Switch>
        <Route path="/live/:eventId">
          <Streampage />
        </Route>
        <Route path="/auth">
          <Authpage />
        </Route>
        <Route path="/" exact>
          {loading && <Loading />}
          <Homepage loading={loading} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
