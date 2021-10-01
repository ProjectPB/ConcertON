import streamsTypes from "./streams.types";

export const fetchStreamsStart = () => ({
  type: streamsTypes.FETCH_STREAMS_START,
});

export const setStreams = (streams) => ({
  type: streamsTypes.SET_STREAMS,
  payload: streams,
});

export const fetchSlideshowStreamsStart = () => ({
  type: streamsTypes.FETCH_SLIDESHOW_STREAMS_START,
});

export const setSlideshowStreams = (streams) => ({
  type: streamsTypes.SET_SLIDESHOW_STREAMS,
  payload: streams,
});

export const fetchSponsorsStart = () => ({
  type: streamsTypes.FETCH_SPONSORS_START,
});

export const setSponsors = (sponsors) => ({
  type: streamsTypes.SET_SPONSORS,
  payload: sponsors,
});

export const fetchStreamData = (streamId) => ({
  type: streamsTypes.FETCH_STREAM_DATA_START,
  payload: streamId,
});

export const setStreamData = (data) => ({
  type: streamsTypes.SET_STREAM_DATA,
  payload: data,
});
