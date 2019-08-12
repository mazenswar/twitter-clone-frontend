import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TweetsActions from '../../Redux/Actions/tweetActions';
import TweetComponents from '.';

const Timeline = () => {
  const dispatch = useDispatch();
  const timelineTweets = useSelector(state => state.tweets);

  useEffect(() => {
    dispatch(TweetsActions.fetchTimelineTweetsFromDB());
  }, [dispatch]);

  const renderTweets = () => {
    if (timelineTweets) {
      return timelineTweets.map(tweet =>
        tweet.attributes.rt ? (
          <TweetComponents.Retweet
            key={`rt-timline-${tweet.attributes.user_id}-${tweet.id}`}
            {...tweet}
          />
        ) : (
          <TweetComponents.SingleTweet
            key={`timline-${tweet.attributes.user_id}-${tweet.id}`}
            {...tweet}
          />
        )
      );
    }
  };

  return (
    <div>
      <h1>Hello from the timeline</h1>
      {renderTweets()}
    </div>
  );
};

export default Timeline;
