import { combineReducers } from "redux";

import usersReducer from "./usersReducer";
import tweetsReducer from "./tweetsReducer";
import showReducer from "./showReducer";
import timelineReducer from "./timelineReducer";

export default combineReducers({
  currentUser: usersReducer,
  tweets: tweetsReducer,
  showUser: showReducer,
  timeline: timelineReducer
});
