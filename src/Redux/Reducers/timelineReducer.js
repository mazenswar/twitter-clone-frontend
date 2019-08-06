const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_TIMELINE":
      return payload;
    case "ADD_TO_TIMELINE":
      return updateTimeline(state, payload, "add");
    case "REMOVE_FROM_TIMELINE":
      return updateTimeline(state, payload, "remove");
    case "UPDATE_TIMELINE":
      return updateTimeline(state, payload, "update");
    default:
      return state;
  }
};

// Helpers
const updateTimeline = (timeline, tweet, type) => {
  if (type === "remove") {
    // This will recieve only the id as a param
    return timeline.filter(tweetObj => tweetObj.id !== tweet);
  } else if (type === "update") {
    return timeline.map(tweetObj =>
      tweetObj.id === tweet.id ? tweet : tweetObj
    );
  }
  return [tweet, ...timeline];
};
