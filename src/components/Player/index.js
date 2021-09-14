import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { db } from "../../firebase/utils";
import CountdownTimer from "../CountdownTimer";
import {
  PlayerContainer,
  Screen,
  TimerContainer,
  LoadingContainer,
  LoadingIcon,
  Typography,
  Title,
} from "./Styles";

function Player() {
  const history = useHistory();
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const { eventId } = useParams();

  useEffect(() => {
    db.collection("events")
      .doc(eventId)
      .get()
      .then((doc) => {
        setData(doc.data());
        setLoaded(true);
      });
  }, [eventId]);

  return !data ? (
    history.goBack()
  ) : (
    <PlayerContainer style={!loaded ? { flex: "1" } : {}}>
      {loaded ? (
        <>
          <Screen>
            <ReactPlayer
              url={data?.url}
              loop
              playing={true}
              muted={true}
              width="100%"
              height="100%"
            />
            <TimerContainer>
              <Typography>Event starts at</Typography>
              <CountdownTimer date={data?.timestamp?.seconds * 1000} />
            </TimerContainer>
          </Screen>
          <Title>{data?.name}</Title>
        </>
      ) : (
        <LoadingContainer>
          <LoadingIcon type="bubbles" width={100} />
        </LoadingContainer>
      )}
    </PlayerContainer>
  );
}

export default Player;
