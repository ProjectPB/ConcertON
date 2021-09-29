import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadStreams } from "./../../redux/Loading/loading.actions";
import Stream from "../Stream";
import { StreamsContainer } from "./Styles";
import { setStreams } from "../../redux/Streams/streams.actions";
import { fetchStreams } from "../../redux/Streams/streams.helpers";

const mapState = ({ streams }) => ({
  streams: streams.streams,
});

const Streams = () => {
  const dispatch = useDispatch();
  const { streams } = useSelector(mapState);

  useEffect(() => {
    async function getStreams() {
      const streams = await fetchStreams();
      dispatch(setStreams(streams));
      dispatch(loadStreams(true));
    }

    streams.length === 0 && getStreams();
  }, [dispatch, streams.length]);

  return (
    <StreamsContainer id="watch">
      {streams?.map(({ id, data }) => (
        <Stream
          key={id}
          id={id}
          name={data?.name}
          timestamp={data?.timestamp?.toDate()?.toDateString()}
          image={data?.image}
        />
      ))}
    </StreamsContainer>
  );
};

export default Streams;
