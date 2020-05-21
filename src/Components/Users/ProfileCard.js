import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import userActions from '../../Redux/Actions/userActions';
import ShowActions from '../../Redux/Actions/showActions';
import ProfileEdit from './ProfileEdit';

const ProfileCard = props => {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.currentUser);
  const user = props.username ? props : currentUser;
  const [modal, setModal] = useState(false);

  const handleFollow = () => {
    debugger;
    const { match } = props;
    const followeeId = match.params.id;
    dispatch(ShowActions.followUpdateToDB(followeeId));
  };

  const followButton = () => {
    if (user.followers) {
      const follower = user.followers.find(user => user.id === currentUser.id);
      return follower ? (
        <button className="profile-card-follow-button" onClick={handleFollow}>
          Unfollow
        </button>
      ) : (
        <button className="profile-card-follow-button" onClick={handleFollow}>
          Follow
        </button>
      );
    }
  };

  const editModal = () => {
    return modal ? <ProfileEdit modal={modal} setModal={setModal} /> : null;
  };

  const profileButtons = () => {
    const current = props.id === currentUser.id;
    const followee = currentUser.followees.find(f => f.id === props.id);

    if (current) {
      return (
        <div className="profile-card-buttons">
          <button
            onClick={() => setModal(!modal)}
            className="profile-card-follow-button"
          >
            Edit
          </button>
        </div>
      );
    } else if (followee) {
      return (
        <div className="profile-card-buttons">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          {followButton()}
        </div>
      );
    } else {
      return (
        <div className="profile-card-buttons">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          {followButton()}
        </div>
      );
    }
  };

  return (
    <div className="profile-card-container">
      {editModal()}
      <div className="profile-cover-photo"></div>
      <div className="profile-user-avatar"></div>
      {profileButtons()}
      <h2>{user.fullname}</h2>
      <p className="grey">@{user.username}</p>
      <p>Bio placeholder</p>
      <div className="profile-user-info">
        <p>Location Placeholder</p>
        <p>Birthday Placeholder</p>
        <p>Join Date Placeholder</p>
      </div>
      <div className="profile-card-follows">
        <span className="num">{user.followees.length}</span>
        <span className="grey">Following</span>
        <span className="num">{user.followers.length}</span>
        <span className="grey">Followers</span>
      </div>
      <p>Mutual follows placeholder</p>
    </div>
  );
};

export default ProfileCard;
