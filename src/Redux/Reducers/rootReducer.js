import { combineReducers } from 'redux';

import usersReducer from './usersReducer';
import tweetsReducer from './tweetsReducer';
import showReducer from './showReducer';
import hashtagReducer from './hashtagReducer';
export default combineReducers({
  currentUser: usersReducer,
  tweets: tweetsReducer,
  showUser: showReducer,
  hashtag: hashtagReducer
});
