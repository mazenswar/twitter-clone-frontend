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
    // if (timelineTweets.length) {
    return timelineTweets.map(tweet => (
      <TweetComponents.SingleTweet key={`timeline-${tweet.id}`} {...tweet} />
    ));
    // }
  };

  return (
    <div>
      <h1>Hello from the timeline</h1>
      {renderTweets()}
    </div>
  );
};

export default Timeline;
