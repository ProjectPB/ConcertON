import streamsTypes from "./streams.types";

export const setStreams = (streams) => ({
  type: streamsTypes.SET_STREAMS,
  payload: streams,
});

export const setSlideshowStreams = (streams) => ({
  type: streamsTypes.SET_SLIDESHOW_STREAMS,
  payload: streams,
});

export const setStreamData = (data) => ({
  type: streamsTypes.SET_STREAM_DATA,
  payload: data,
});
