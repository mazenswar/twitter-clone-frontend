import React from 'react';
import { useSelector } from 'react-redux';
import TweetComponents from '../Tweets';
import ProfileCard from './ProfileCard';
import '../../Stylesheets/Users/profile.scss';

const ProfileContent = props => {
  const userTweets = useSelector(state => state.tweets);

  const renderTweets = () => {
    if (userTweets.length) {
      // debugger;
      return userTweets.map(tweet =>
        tweet.rt ? (
          <TweetComponents.Retweet
            key={`rt-show-${tweet.user_id}-${tweet.id}`}
            {...tweet}
          />
        ) : (
          <TweetComponents.SingleTweet key={`profile-${tweet.id}`} {...tweet} />
        )
      );
    }
  };

  return (
    <React.Fragment>
      <button onClick={props.handleEdit}>Edit</button>
      <ProfileCard />
      <div>{renderTweets()}</div>
    </React.Fragment>
  );
};

export default ProfileContent;
