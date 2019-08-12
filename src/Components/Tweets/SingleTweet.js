import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import TweetActions from '../../Redux/Actions/tweetActions';

const SingleTweet = props => {
  const currentUserId = useSelector(state =>
    state.currentUser.data ? state.currentUser.data.id : ''
  );

  const dispatch = useDispatch();

  const handleDeleteTweet = () => {
    dispatch(TweetActions.deleteTweetFromDB(props.id));
  };

  const deleteButton = () => {
    return currentUserId === props.user_id ? (
      <button onClick={handleDeleteTweet}>Delete Tweet</button>
    ) : null;
  };

  const likeButton = () => {
    const liked = props.attributes.likes.find(
      like => like.user_id === currentUserId
    );

    return liked ? (
      <button onClick={handleLike} className="unlike-button">
        Unlike
      </button>
    ) : (
      <button onClick={handleLike} className="like-button">
        Like
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
        <span>{props.attributes.fullname}</span>
        <Link
          to={`/users/${props.attributes.user_id}`}
          className="single-tweet-username"
        >
          @{props.attributes.username}
        </Link>
        <span>{new Date(props.attributes.created_at).toDateString()}</span>
      </div>
      <span className="single-tweet-content">{props.attributes.content}</span>
      {deleteButton()}

      {likeButton()}
      {retweetButton()}
      <p>Likes: {props.attributes.likes.length}</p>
      <p>Retweets: {props.attributes.retweets.length}</p>
    </div>
  );
};

export default SingleTweet;
