import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Follows = props => {
  const followers = useSelector(state => state.currentUser.followers);
  const followees = useSelector(state => state.currentUser.followees);

  const renderFollowers = () => {
    return followers.map(follower => (
      <Link to={`/users/${follower.id}`} key={follower.id}>
        {follower.username}
      </Link>
    ));
  };

  const renderFollowees = () => {
    return followees.map(followee => (
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

export default Follows;
