import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchStreamData,
  setStreamData,
} from "./../../redux/Streams/streams.actions";
import CountdownTimer from "../CountdownTimer";
import background__video from "./../../assets/background.mp4";

import {
  PlayerContainer,
  ScreenContainer,
  Screen,
  TimerContainer,
  Typography,
  Title,
} from "./Styles";

const mapState = ({ streams }) => ({
  data: streams.streamData,
});

const Player = () => {
  const dispatch = useDispatch();
  const { data } = useSelector(mapState);
  const { eventId } = useParams();
  const [timestamp, setTimestamp] = useState();

  useEffect(() => {
    dispatch(fetchStreamData(eventId));

    return () => {
      dispatch(setStreamData({}));
    };
  }, [dispatch, eventId]);

  useEffect(() => {
    const time = data?.timestamp?.seconds * 1000;

    if (!isNaN(time)) {
      setTimestamp(time);
    }
  }, [data]);

  return (
    <PlayerContainer>
      <ScreenContainer>
        <Screen
          url={data?.url ? data?.url : background__video}
          loop
          playing={true}
          muted={true}
          height="100%"
          width="100%"
        />
        <TimerContainer>
          <Typography>Event starts at</Typography>
          {timestamp && <CountdownTimer date={timestamp} />}
        </TimerContainer>
      </ScreenContainer>
      <Title>{data?.name}</Title>
    </PlayerContainer>
  );
};

export default Player;
