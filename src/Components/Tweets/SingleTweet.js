import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import TweetActions from '../../Redux/Actions/tweetActions';
import { renderContent } from './helpers';

const SingleTweet = props => {
  const currentUserId = useSelector(state =>
    state.currentUser ? state.currentUser.id : ''
  );
  const dispatch = useDispatch();

  const handleDeleteTweet = () => {
    dispatch(TweetActions.deleteTweetFromDB(props.id));
  };

  const deleteButton = () => {
    return currentUserId === props.user_id && props.del !== false ? (
      <button onClick={handleDeleteTweet}>Delete Tweet</button>
    ) : null;
  };

  const likeButton = () => {
    const liked = props.likes.find(like => like.user_id === currentUserId);

    return liked ? (
      <button onClick={handleLike} className="unlike-button">
        ♥
      </button>
    ) : (
      <button onClick={handleLike} className="like-button">
        ♥
      </button>
    );
  };

  const handleLike = e => {
    const { id } = props;
    e.target.className === 'like-button'
      ? dispatch(TweetActions.newLikeToDB(id))
      : dispatch(TweetActions.deleteLikeFromDB(id));
  };

  const retweetButton = () => {
    return (
      <button
        onClick={() => dispatch(TweetActions.handleRetweetToDB(props.id))}
      >
        Retweet
      </button>
    );
  };

  return (
    <div className="single-tweet">
      <div className="single-tweet-header">
        <span>{props.fullname}</span>
        <Link to={`/users/${props.user_id}`} className="single-tweet-username">
          @{props.username}
        </Link>
        <span>{new Date(props.created_at).toDateString()}</span>
      </div>
      <span className="single-tweet-content">
        {renderContent(props.content, props.hashtags)}
      </span>

      {deleteButton()}

      {likeButton()}
      {retweetButton()}
      <p>Likes: {props.likes.length}</p>
      <p>Retweets: {props.retweets.length}</p>
    </div>
  );
};

export default SingleTweet;
