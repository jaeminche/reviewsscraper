import { combineReducers } from "redux";

import postsReducer from "./posts";
import postReducer from "./post";
import commentsReducer from "./comments";
import companiesReducer from "./jobplanet";

const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
  post: postReducer,
  companies: companiesReducer
});

export default rootReducer;
