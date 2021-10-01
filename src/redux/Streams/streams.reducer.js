import streamsTypes from "./streams.types";

const INITIAL_STATE = {
  streams: [],
  slideshowStreams: [],
  streamData: {},
  sponsors: [],
};

const streamsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case streamsTypes.SET_STREAMS:
      return {
        ...state,
        streams: action.payload,
      };
    case streamsTypes.SET_SLIDESHOW_STREAMS:
      return {
        ...state,
        slideshowStreams: action.payload,
      };
    case streamsTypes.SET_STREAM_DATA:
      return {
        ...state,
        streamData: action.payload,
      };
    case streamsTypes.SET_SPONSORS:
      return {
        ...state,
        sponsors: action.payload,
      };
    default:
      return state;
  }
};

export default streamsReducer;
