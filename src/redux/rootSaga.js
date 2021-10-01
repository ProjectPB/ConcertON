import { all, call } from "redux-saga/effects";

import streamsSagas from "./Streams/streams.sagas";

export default function* rootSaga() {
  yield all([call(streamsSagas)]);
}
