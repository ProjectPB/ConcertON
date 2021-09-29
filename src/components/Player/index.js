import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CountdownTimer from "../CountdownTimer";
import { fetchStreamData } from "./../../redux/Streams/streams.helpers";
import { setStreamData } from "./../../redux/Streams/streams.actions";
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

const mapState = ({ streams }) => ({
  data: streams.streamData,
});

const Player = () => {
  const dispatch = useDispatch();
  const { data } = useSelector(mapState);
  const [loaded, setLoaded] = useState(false);
  const { eventId } = useParams();

  useEffect(() => {
    async function getData() {
      const streamData = await fetchStreamData(eventId);
      dispatch(setStreamData(streamData));
      setLoaded(true);
    }

    getData();
  }, [dispatch, eventId]);

  return (
    <PlayerContainer>
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
