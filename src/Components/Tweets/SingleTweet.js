import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import TweetActions from '../../Redux/Actions/tweetActions';

const SingleTweet = props => {
  const currentUserId = useSelector(state => state.currentUser.id);
  const dispatch = useDispatch();

  const handleDeleteTweet = () => {
    dispatch(TweetActions.deleteTweetFromDB(props.id));
  };

  const deleteButton = () => {
    return currentUserId === props.user.id ? (
      <button onClick={handleDeleteTweet}>Delete Tweet</button>
    ) : null;
  };

  const likeButton = () => {
    const { likes } = props;
    const liked = likes.find(like => like.user_id === currentUserId);

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
        <span>
          {props.user.first_name} {props.user.last_name}
        </span>
        <Link to={`/users/${props.user.id}`} className="single-tweet-username">
          @{props.user.username}
        </Link>
        <span>{new Date(props.created_at).toDateString()}</span>
      </div>
      <span className="single-tweet-content">{props.content}</span>
      {deleteButton()}

      {likeButton()}
      {retweetButton()}
      <p>Likes: {props.likes.length}</p>
      <p>Retweets: {props.retweets.length}</p>
    </div>
  );
};

export default SingleTweet;
