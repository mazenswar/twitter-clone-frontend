import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UserComponents from '../Components/Users';
import userActions from '../Redux/Actions/userActions';
import tweetActions from '../Redux/Actions/tweetActions';

const ProfilePage = props => {
  const currentUser = useSelector(state => state.currentUser);
  const dispatch = useDispatch();
  // const [userTweets, setUserTweets] = useState([]);
  const [editMode, setEditMode] = useState(false);
  useEffect(() => {
    dispatch(tweetActions.fetchUserTweetsFromDB());
  }, [dispatch]);
  ////////////////////////////////
  const handleEdit = user => {
    if (editMode && user.username) {
      this.updateTweets(user);
    } else {
      setEditMode(true);
    }
  };

  const handleDelete = () => {
    dispatch(userActions.deleteUserFromDB(currentUser.id));
    props.history.push('/');
  };

  console.log(editMode);
  if (!editMode) {
    return (
      <React.Fragment>
        <button onClick={handleDelete}>Delete Account</button>
        <UserComponents.ProfileContent handleEdit={handleEdit} />
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <UserComponents.ProfileEdit handleEdit={handleEdit} />
      </React.Fragment>
    );
  }
};

export default ProfilePage;
