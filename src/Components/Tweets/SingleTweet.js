import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import TweetActions from '../../Redux/Actions/tweetActions';
import { renderContent } from './helpers';
import retweetIcon from '../../Assets/icons/retweet-icon.js';
import LikeButton from './SingleTweet2/LikeButton';

const SingleTweet = React.memo(
  ({
    id,
    fullname,
    user_id,
    username,
    content,
    hashtags,
    created_at,
    mentions,
    del,
    retweets,
    likes
  }) => {
    // console.log('triggereddddddd');
    const currentUserId = useSelector(state =>
      state.currentUser ? state.currentUser.id : ''
    );
    const dispatch = useDispatch();

    const handleLike = action => {
      return action === 'like'
        ? dispatch(TweetActions.newLikeToDB(id))
        : dispatch(TweetActions.deleteLikeFromDB(id));
    };

    const retweetButton = () => {
      const retweeted = retweets.some(t => t.user_id === currentUserId);
      return retweeted ? (
        <div
          className="liked"
          onClick={() => dispatch(TweetActions.deleteRetweetToDB(id))}
        >
          {retweetIcon}
          {`   ${retweets.length}`}
        </div>
      ) : (
        <div onClick={() => dispatch(TweetActions.createRetweetToDB(id))}>
          {retweetIcon}
          {`   ${retweets.length}`}
        </div>
      );
    };
    ////////////////////////////

    return (
      <div className="single-tweet">
        <div className="single-tweet-header">
          <div className="single-tweet-user-img" />
          <Link to={`/users/${user_id}`} className="single-tweet-fullname">
            {fullname}
          </Link>

          <Link to={`/users/${user_id}`} className="single-tweet-username">
            @{username}
          </Link>
          <span className="single-tweet-date">
            {new Date(created_at).toDateString()}
          </span>
        </div>
        <span className="single-tweet-content">
          {renderContent(content, hashtags, mentions)}
        </span>

        <div className="single-tweet-footer">
          <LikeButton
            likes={likes}
            userId={currentUserId}
            handleLike={handleLike}
          />
          {retweetButton()}
        </div>
      </div>
    );
  }
);

export default SingleTweet;
