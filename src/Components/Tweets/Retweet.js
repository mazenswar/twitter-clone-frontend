import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
// import TweetActions from '../../Redux/Actions/tweetActions';
import SingleTweet from './SingleTweet';

const Retweet = props => {
  console.log(props);

  return (
    <div className="single-retweet">
      <h1>Retweet by: {props.username}</h1>
      <p>Original Tweeter: {props.tweet.username}</p>
      <p>Content: {props.tweet.content}</p>
      <SingleTweet {...props.tweet} />
      <h1>End</h1>
    </div>
  );
};

export default Retweet;
