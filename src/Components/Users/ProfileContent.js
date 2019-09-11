import React from 'react';
import { useSelector } from 'react-redux';
import TweetComponents from '../Tweets';
import ProfileCard from './ProfileCard';
import '../../Stylesheets/Users/profile.scss';

const ProfileContent = props => {
  const userTweets = useSelector(state => state.tweets);
  const userID = useSelector(state => state.currentUser.id);

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
      <ProfileCard id={userID} />
      <div>{renderTweets()}</div>
    </React.Fragment>
  );
};

export default ProfileContent;
