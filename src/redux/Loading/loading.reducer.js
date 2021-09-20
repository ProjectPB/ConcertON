import loadingTypes from "./loading.types";

const INITIAL_STATE = {
  slideshowLoaded: false,
  sponsorsLoaded: false,
  streamsLoaded: false,
};

const loadingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case loadingTypes.LOAD_SLIDESHOW:
      return {
        ...state,
        slideshowLoaded: action.payload,
      };
    case loadingTypes.LOAD_SPONSORS:
      return {
        ...state,
        sponsorsLoaded: action.payload,
      };
    case loadingTypes.LOAD_STREAMS:
      return {
        ...state,
        streamsLoaded: action.payload,
      };
    default:
      return state;
  }
};

export default loadingReducer;
