import React from "react";
import { connect } from "react-redux";
import TweetComponents from "../Tweets";
import ProfileCard from "./ProfileCard";
import "../../Stylesheets/Users/profile.scss";

const ProfileContent = props => {
  const renderTweets = () => {
    return props.userTweets.map(tweet => (
      <TweetComponents.SingleTweet key={`profile-${tweet.id}`} {...tweet} />
    ));
  };

  return (
    <React.Fragment>
      <button onClick={props.handleEdit}>Edit</button>
      <ProfileCard />
      <div>{renderTweets()}</div>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  userTweets: state.tweets
});
export default connect(mapStateToProps)(ProfileContent);
