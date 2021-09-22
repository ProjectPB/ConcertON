import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { db } from "../../firebase/utils";
import CountdownTimer from "../CountdownTimer";
import {
  PlayerContainer,
  ScreenContainer,
  Screen,
  TimerContainer,
  LoadingContainer,
  LoadingIcon,
  Typography,
  Title,
} from "./Styles";

const Player = () => {
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
          <ScreenContainer>
            <Screen
              url={
                data?.url
                  ? data?.url
                  : "https://cdn.videvo.net/videvo_files/video/free/2013-09/large_watermarked/DiscoLights2Videvo_preview.mp4"
              }
              loop
              playing={true}
              muted={true}
              height="100%"
              width="100%"
            />
            <TimerContainer>
              <Typography>Event starts at</Typography>
              <CountdownTimer date={data?.timestamp?.seconds * 1000} />
            </TimerContainer>
          </ScreenContainer>
          <Title>{data?.name}</Title>
        </>
      ) : (
        <LoadingContainer>
          <LoadingIcon type="bubbles" width={100} />
        </LoadingContainer>
      )}
    </PlayerContainer>
  );
};

export default Player;
