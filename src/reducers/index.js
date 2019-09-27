import fontReducer from "./fontReducer";
import { combineReducers } from "redux";

export default combineReducers({
  isFontLoaded: fontReducer
});
