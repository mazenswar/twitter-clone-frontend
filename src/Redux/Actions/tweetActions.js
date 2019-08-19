import {
  TWEETS_URL,
  USER_TWEETS_URL,
  LIKES_URL,
  TIMELINE_URL,
  SHOW_TWEETS_URL
} from '../../API_CONSTANTS';

// ACTIONS
const handleRetweetAction = tweet => ({
  type: 'RETWEET',
  payload: tweet
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

const handleRetweetToDB = tweetId => dispatch => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `bearer ` + localStorage.token
    },
    body: JSON.stringify({ tweet_id: tweetId })
  };
  fetch('http://localhost:3000/retweets', config)
    .then(r => r.json())
    .then(tweet => {
      dispatch(handleRetweetAction(tweet));
    });
};

const fetchUserTweetsFromDB = () => dispatch => {
  fetch(USER_TWEETS_URL, {
    headers: { Authorization: 'bearer ' + localStorage.token }
  })
    .then(r => r.json())
    .then(tweetsArr => {
      dispatch(fetchUserTweetsAction(tweetsArr));
    });
};

const fetchShowUserTweets = id => dispatch => {
  fetch(SHOW_TWEETS_URL(id))
    .then(r => r.json())
    .then(showUserTweets => {
      dispatch(fetchViewUserTweetsAction(showUserTweets));
    });
};

const fetchTimelineTweetsFromDB = () => dispatch => {
  fetch(TIMELINE_URL, {
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

  fetch(TWEETS_URL, config)
    .then(r => r.json())
    .then(newTweet => {
      dispatch(newTweetAction(newTweet));
    });
};

const deleteTweetFromDB = tweetId => dispatch => {
  fetch(`${TWEETS_URL}/${tweetId}`, {
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
  fetch(LIKES_URL, config)
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
  fetch(`${LIKES_URL}/${tweetId}`, config)
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
  handleRetweetToDB
};
