import { all, call } from "redux-saga/effects";

import streamsSagas from "./Streams/streams.sagas";
import userSagas from "./User/user.sagas";

export default function* rootSaga() {
  yield all([call(streamsSagas), call(userSagas)]);
}
