import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import hashtagActions from '../Redux/Actions/hashtagActions';
import TweetComponents from '../Components/Tweets';
const HashtagShow = props => {
  const dispatch = useDispatch();
  const hashtag = useSelector(state => state.hashtag);
  useEffect(() => {
    const id = props.match.params.id;
    dispatch(hashtagActions.getHashtagFromDB(id));
  }, [props.match.params.id, dispatch]);

  const renderTweets = () => {
    if (hashtag.tweets) {
      return hashtag.tweets.map(tweet => (
        <TweetComponents.SingleTweet key={tweet.id} {...tweet} />
      ));
    }
  };

  return (
    <div>
      <h1>{hashtag.title}</h1>
      <h2>Tweets</h2>
      {renderTweets()}
    </div>
  );
};

export default HashtagShow;
