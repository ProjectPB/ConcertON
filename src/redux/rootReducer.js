import { combineReducers } from "redux";
import userReducer from "./User/user.reducer";
import loadingReducer from "./Loading/loading.reducer";
import streamsReducer from "./Streams/streams.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  loading: loadingReducer,
  streams: streamsReducer,
});

export default rootReducer;
