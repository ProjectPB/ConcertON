import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Stream from "../Stream";
import { StreamsContainer } from "./Styles";
import { fetchStreamsStart } from "../../redux/Streams/streams.actions";

const mapState = ({ streams }) => ({
  streams: streams.streams,
});

const Streams = () => {
  const dispatch = useDispatch();
  const { streams } = useSelector(mapState);

  useEffect(() => {
    dispatch(fetchStreamsStart());
  }, [dispatch]);

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
