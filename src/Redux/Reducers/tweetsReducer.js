const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "FETCH_TIMELINE_TWEETS":
    case "FETCH_CU_TWEETS":
    case "FETCH_SU_TWEETS":
      return payload;
    case "CREATE_TWEET":
      return [payload, ...state];
    case "DELETE_TWEET":
      return removeTweet(state, payload);
    case "UPDATE_LIKES":
      return updateTweets(state, payload);
    case "RETWEET":
      return updateTweets(state, payload);
    default:
      return state;
  }
};

// DELETE TWEET HELPER

const removeTweet = (tweets, tweetId) => {
  return tweets.filter(tweet => tweet.id !== tweetId);
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
