import { combineReducers } from "redux";
import userReducer from "./User/user.reducer";
import loadingReducer from "./Loading/loading.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  loading: loadingReducer,
});

export default rootReducer;
