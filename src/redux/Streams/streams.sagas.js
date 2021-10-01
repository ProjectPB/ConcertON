import { takeLatest, call, all, put } from "redux-saga/effects";
import {
  loadSlideshow,
  loadSponsors,
  loadStreams,
} from "../Loading/loading.actions";
import {
  setSlideshowStreams,
  setSponsors,
  setStreamData,
  setStreams,
} from "./streams.actions";
import {
  handleFetchSlideshowStreams,
  handleFetchSponsors,
  handleFetchStreamData,
  handleFetchStreams,
} from "./streams.helpers";
import streamsTypes from "./streams.types";

export function* fetchStreams() {
  try {
    const streams = yield handleFetchStreams();
    yield put(setStreams(streams));
    yield put(loadStreams());
  } catch (err) {
    // console.log(err);
  }
}

export function* onFetchStreamsStart() {
  yield takeLatest(streamsTypes.FETCH_STREAMS_START, fetchStreams);
}

export function* fetchSlideshowStreams() {
  try {
    const streams = yield handleFetchSlideshowStreams();
    yield put(setSlideshowStreams(streams));
    yield put(loadSlideshow());
  } catch (err) {
    // console.log(err)
  }
}

export function* onFetchSlideshowStreamsStart() {
  yield takeLatest(
    streamsTypes.FETCH_SLIDESHOW_STREAMS_START,
    fetchSlideshowStreams
  );
}

export function* fetchSponsors() {
  try {
    const sponsors = yield handleFetchSponsors();
    yield put(setSponsors(sponsors));
    yield put(loadSponsors());
  } catch (err) {
    // console.log(err);
  }
}

export function* onFetchSponsorsStart() {
  yield takeLatest(streamsTypes.FETCH_SPONSORS_START, fetchSponsors);
}

export function* fetchStreamData({ payload }) {
  try {
    const data = yield handleFetchStreamData(payload);
    yield put(setStreamData(data));
  } catch (err) {
    // console.log(err);
  }
}

export function* onFetchStreamDataStart() {
  yield takeLatest(streamsTypes.FETCH_STREAM_DATA_START, fetchStreamData);
}

export default function* streamsSagas() {
  yield all([
    call(onFetchStreamsStart),
    call(onFetchSlideshowStreamsStart),
    call(onFetchSponsorsStart),
    call(onFetchStreamDataStart),
  ]);
}
