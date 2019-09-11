import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import TweetActions from '../../Redux/Actions/tweetActions';
import { renderContent } from './helpers';
import retweetIcon from '../../Assets/icons/retweet-icon.js';

const SingleTweet = React.memo(props => {
  console.log('triggereddddddd');
  const currentUserId = useSelector(state =>
    state.currentUser ? state.currentUser.id : ''
  );
  const dispatch = useDispatch();

  const handleLike = e => {
    const { id } = props;
    return e.target.parentElement.className === 'like-button' ||
      e.target.className === 'like-button'
      ? dispatch(TweetActions.newLikeToDB(id))
      : dispatch(TweetActions.deleteLikeFromDB(id));
  };

  const handleDeleteTweet = () => {
    dispatch(TweetActions.deleteTweetFromDB(props.id));
  };

  const deleteButton = () => {
    return currentUserId === props.user_id && props.del !== false ? (
      <div onClick={handleDeleteTweet}>🗑</div>
    ) : null;
  };

  const likeButton = () => {
    const liked = props.likes.find(like => like.user_id === currentUserId);
    // debugger;
    return liked ? (
      <div className="unlike-button liked" onClick={handleLike}>
        <span>♥</span>
        <p>{`   ${props.likes.length}`}</p>
      </div>
    ) : (
      <div className="like-button" onClick={handleLike}>
        <span>♥</span> <p>{`   ${props.likes.length}`}</p>
      </div>
    );
  };

  const retweetButton = () => {
    const { id, retweets } = props;
    const retweeted = retweets.some(t => t.user_id === currentUserId);
    return retweeted ? (
      <div
        className="liked"
        onClick={() => dispatch(TweetActions.handleRetweetToDB(id))}
      >
        {retweetIcon}
        {`   ${retweets.length}`}
      </div>
    ) : (
      <div onClick={() => dispatch(TweetActions.handleRetweetToDB(id))}>
        {retweetIcon}
        {`   ${retweets.length}`}
      </div>
    );
  };
  ////////////////////////////

  const {
    id,
    fullname,
    user_id,
    username,
    content,
    hashtags,
    created_at,
    mentions
  } = props;
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
        {deleteButton()}
        {likeButton()}
        {retweetButton()}
      </div>
    </div>
  );
});

export default SingleTweet;
