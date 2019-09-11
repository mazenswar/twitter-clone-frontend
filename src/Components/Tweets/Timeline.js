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
    // debugger;
    if (timelineTweets) {
      return timelineTweets.map(tweet =>
        tweet.rt ? (
          <TweetComponents.Retweet
            key={`rt-timeline-${tweet.user_id}-${tweet.id}`}
            {...tweet}
          />
        ) : (
          <TweetComponents.SingleTweet
            key={`timeline-${tweet.user_id}-${tweet.id}`}
            {...tweet}
          />
        )
      );
    }
  };

  return <div className="timeline-container">{renderTweets()}</div>;
};

export default Timeline;
