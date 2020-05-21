import React from 'react';
import retweetIcon from '../../Assets/icons/retweet-icon.js';
import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import TweetActions from '../../Redux/Actions/tweetActions';
import SingleTweet from './SingleTweet';

const Retweet = props => {
  const username = useSelector(state => state.currentUser.username);

  return (
    <div className="single-retweet">
      <div className="single-retweet-header">
        {retweetIcon}
        <p>
          {props.username === username
            ? 'You retweeted'
            : props.username + ' retweeted'}
        </p>
      </div>

      <SingleTweet del={false} {...props.tweet} />
    </div>
  );
};

export default Retweet;
