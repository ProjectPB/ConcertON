import loadingTypes from "./loading.types";

export const loadSlideshow = () => ({
  type: loadingTypes.LOAD_SLIDESHOW,
  payload: true,
});

export const loadStreams = () => ({
  type: loadingTypes.LOAD_STREAMS,
  payload: true,
});

export const loadSponsors = () => ({
  type: loadingTypes.LOAD_SPONSORS,
  payload: true,
});
