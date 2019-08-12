import React from 'react';
import { useSelector } from 'react-redux';

const ProfileCard = props => {
  const currentUser = useSelector(state =>
    state.currentUser.data ? state.currentUser.data.attributes : ''
  );
  console.log(currentUser);

  return (
    <div className="profile-card-container">
      <h5>
        {currentUser.first_name} {currentUser.last_name}
      </h5>
      <p>@{currentUser.username}</p>
    </div>
  );
};

export default ProfileCard;
