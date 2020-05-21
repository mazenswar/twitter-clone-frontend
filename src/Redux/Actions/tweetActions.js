import API from '../../API_CONSTANTS';

// ACTIONS
const createRetweetAction = tweet => ({
  type: 'CREATE_RETWEET',
  payload: tweet
});

const deleteRetweetAction = tweetId => ({
  type: 'DELETE_RETWEET',
  payload: tweetId
});

const newTweetAction = tweet => ({
  type: 'CREATE_TWEET',
  payload: tweet
});

const deleteTweetAction = tweetId => ({
  type: 'DELETE_TWEET',
  payload: tweetId
});

const fetchUserTweetsAction = tweets => ({
  type: 'FETCH_CU_TWEETS',
  payload: tweets
});
const fetchViewUserTweetsAction = tweets => ({
  type: 'FETCH_SU_TWEETS',
  payload: tweets
});

const fetchTimelineTweetsAction = tweets => ({
  type: 'FETCH_TIMELINE_TWEETS',
  payload: tweets
});

const updateLikes = tweet => ({
  type: 'UPDATE_LIKES',
  payload: tweet
});

// FETCH
const deleteRetweetToDB = tweetId => dispatch => {
  const config = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `bearer ` + localStorage.token
    }
  };
  fetch(API.RETWEETS_URL + tweetId, config).then(res => {
    dispatch(deleteRetweetAction(tweetId));
  });
};

const createRetweetToDB = tweetId => dispatch => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `bearer ` + localStorage.token
    },
    body: JSON.stringify({ tweet_id: tweetId })
  };
  fetch(API.RETWEETS_URL, config)
    .then(r => r.json())
    .then(tweet => {
      dispatch(createRetweetAction(tweet));
    });
};

const fetchUserTweetsFromDB = () => dispatch => {
  fetch(API.USER_TWEETS_URL, {
    headers: { Authorization: 'bearer ' + localStorage.token }
  })
    .then(r => r.json())
    .then(tweetsArr => {
      dispatch(fetchUserTweetsAction(tweetsArr));
    });
};

const fetchShowUserTweets = id => dispatch => {
  fetch(API.SHOW_TWEETS_URL(id))
    .then(r => r.json())
    .then(showUserTweets => {
      dispatch(fetchViewUserTweetsAction(showUserTweets));
    });
};

const fetchTimelineTweetsFromDB = () => dispatch => {
  fetch(API.TIMELINE_URL, {
    headers: { Authorization: `bearer ` + localStorage.token }
  })
    .then(r => r.json())
    .then(timelineArr => {
      dispatch(fetchTimelineTweetsAction(timelineArr));
    });
};

const newTweetToDB = tweetObj => dispatch => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'bearer ' + localStorage.token
    },
    body: JSON.stringify(tweetObj)
  };

  fetch(API.TWEETS_URL, config)
    .then(r => r.json())
    .then(newTweet => {
      dispatch(newTweetAction(newTweet));
    });
};

const deleteTweetFromDB = tweetId => dispatch => {
  fetch(`${API.TWEETS_URL}/${tweetId}`, {
    method: 'DELETE'
  }).then(r => {
    dispatch(deleteTweetAction(tweetId));
  });
};

const newLikeToDB = tweetId => dispatch => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `bearer ` + localStorage.token
    },
    body: JSON.stringify({ tweet_id: tweetId })
  };
  fetch(API.LIKES_URL, config)
    .then(r => r.json())
    .then(updatedTweet => {
      if (!updatedTweet.errors) {
        dispatch(updateLikes(updatedTweet));
      }
    });
};

const deleteLikeFromDB = tweetId => dispatch => {
  const config = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `bearer ` + localStorage.token
    },
    body: JSON.stringify({ tweet_id: tweetId })
  };
  fetch(`${API.LIKES_URL}/${tweetId}`, config)
    .then(r => r.json())
    .then(updatedTweet => {
      if (!updatedTweet.errors) {
        dispatch(updateLikes(updatedTweet));
      }
    });
};

// EXPORT
export default {
  fetchUserTweetsFromDB,
  fetchShowUserTweets,
  fetchTimelineTweetsFromDB,
  newTweetToDB,
  deleteTweetFromDB,
  newLikeToDB,
  deleteLikeFromDB,
  deleteRetweetToDB,
  createRetweetToDB
};
