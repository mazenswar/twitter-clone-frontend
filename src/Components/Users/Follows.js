import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Follows = props => {
  const renderFollowers = () => {
    return props.followers.map(follower => (
      <Link to={`/users/${follower.id}`} key={follower.id}>
        {follower.username}
      </Link>
    ));
  };

  const renderFollowees = () => {
    return props.followees.map(followee => (
      <Link to={`/users/${followee.id}`} key={followee.id}>
        {followee.username}
      </Link>
    ));
  };

  return (
    <div>
      <div>
        <h2>Followers</h2>
        <ul>{renderFollowers()}</ul>
      </div>

      <div>
        <h2>Followees</h2>
        <ul>{renderFollowees()}</ul>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  followers: state.currentUser.followers,
  followees: state.currentUser.followees
});

export default connect(mapStateToProps)(Follows);
