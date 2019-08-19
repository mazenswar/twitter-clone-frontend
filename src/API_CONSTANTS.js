export const BASE_URL = 'http://localhost:3000';
// User URLS
export const USERS_URL = BASE_URL + '/users';
export const LOGIN_URL = BASE_URL + '/login';
export const PERSIST_URL = BASE_URL + '/auth';

// Tweet URLS

export const TWEETS_URL = BASE_URL + '/tweets';
export const USER_TWEETS_URL = BASE_URL + '/userTweets';
export const SHOW_TWEETS_URL = id => `${BASE_URL}/users/${id}/showTweets`;

// Timeline

export const TIMELINE_URL = BASE_URL + '/timeline';

// Likes

export const LIKES_URL = BASE_URL + '/likes';

// Hashtag

export const HASHTAGS_URL = BASE_URL + '/hashtags';
