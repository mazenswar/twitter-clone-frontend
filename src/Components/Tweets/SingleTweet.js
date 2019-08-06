import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import TweetActions from "../../Redux/Actions/tweetActions";

const SingleTweet = props => {
  const handleDeleteTweet = () => {
    const { deleteTweetFromDB } = props;
    deleteTweetFromDB(props.id);
  };

  const deleteButton = () => {
    return props.currentUserId === props.user.id ? (
      <button onClick={handleDeleteTweet}>Delete Tweet</button>
    ) : null;
  };

  const likeButton = () => {
    const { likes, currentUserId } = props;
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
    const { deleteLikeFromDB, newLikeToDB, id } = props;
    e.target.className === "like-button"
      ? newLikeToDB(id)
      : deleteLikeFromDB(id);
    // newLikeToDB(id);
    // deleteLikeFromDB(id);
  };

  const retweetButton = () => {
    const { handleRetweetToDB } = props;
    return <button onClick={() => handleRetweetToDB(props.id)}>Retweet</button>;
  };

  // const handleRetweet = tweetId => {
  //   const config = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //       Authorization: `bearer ` + localStorage.token
  //     },
  //     body: JSON.stringify({ tweet_id: tweetId })
  //   };
  //   fetch("http://localhost:3000/retweets", config)
  //     .then(r => r.json())
  //     .then(tweet => {
  //       debugger;
  //     });
  // };

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

const mapDispatchToProps = {
  deleteTweetFromDB: TweetActions.deleteTweetFromDB,
  newLikeToDB: TweetActions.newLikeToDB,
  deleteLikeFromDB: TweetActions.deleteLikeFromDB,
  handleRetweetToDB: TweetActions.handleRetweetToDB
};

const mapStateToProps = state => ({
  currentUserId: state.currentUser.id
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleTweet);
