import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import photosReducer from "./photosReducer";

const rootReducer = combineReducers({
  postsReducer,
  photosReducer
});

export default rootReducer;