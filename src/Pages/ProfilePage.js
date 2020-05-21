import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import UserComponents from '../Components/Users';

import tweetActions from '../Redux/Actions/tweetActions';

const ProfilePage = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(tweetActions.fetchUserTweetsFromDB());
  }, [dispatch]);
  ////////////////////////////////

  return (
    <React.Fragment>
      <UserComponents.ProfileContent />
    </React.Fragment>
  );
};

export default ProfilePage;
