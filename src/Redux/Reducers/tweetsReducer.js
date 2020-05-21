const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'FETCH_TIMELINE_TWEETS':
    case 'FETCH_CU_TWEETS':
    case 'FETCH_SU_TWEETS':
      return payload;
    case 'CREATE_TWEET':
      return [payload, ...state];
    case 'DELETE_TWEET':
      return removeTweet(state, payload);
    case 'UPDATE_LIKES':
      return updateTweets(state, payload);
    case 'CREATE_RETWEET':
      return handleRetweet(state, payload);
    case 'DELETE_RETWEET':
      return removeTweet(state, payload);
    default:
      return state;
  }
};

// RETWEET HELPER

const handleRetweet = (tweets, obj) => {
  const newTweets = tweets.filter(tweet => {
    return !obj.rt && tweet.id !== obj.retweet_id;
  });
  return updateTweets(newTweets, obj.tweet);
};

// DELETE TWEET HELPER

const removeTweet = (tweets, tweetId) => {
  debugger;
  return tweets.filter(tweet => tweet.tweet.id !== tweetId);
};

const updateTweets = (tweets, updatedTweet) => {
  return tweets.map(tweet =>
    tweet.id === updatedTweet.id ? updatedTweet : tweet
  );
};

// NEW LIKE HELPER

// const updateArray = (arr, obj) =>
//   arr.map(element => (element.id === obj.id ? obj : element));

// const addOrRemoveLike = (state, tweetObj) => {
//   const timelineTweet = state.timeline.find(tweet => tweet.id === tweetObj.id);
//   const currentUserTweet = state.currentUserTweets.find(
//     tweet => tweet.id === tweetObj.id
//   );
//   const showUserTweet = state.showUserTweets.find(
//     tweet => tweet.id === tweetObj.id
//   );
//   if (timelineTweet) {
//     return updateArray(state.timeline, tweetObj);
//   } else if (showUserTweet) {
//     return updateArray(state.showUserTweets, tweetObj);
//   } else if (currentUserTweet) {
//     return updateArray(state.currentUserTweets, tweetObj);
//   }
//   return state;
// };
