import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import userActions from '../../Redux/Actions/userActions';
import tweetActions from '../../Redux/Actions/tweetActions';

const ProfileEdit = props => {
  const currentUser = useSelector(state => state.currentUser);
  const [editForm, setEditForm] = useState({ ...currentUser });
  const dispatch = useDispatch();
  //
  const handleChange = e =>
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  //
  const handleDeleteUser = () => {
    dispatch(userActions.deleteUserFromDB(editForm.id));
    props.history.push('/');
  };
  console.log(props);

  const handleEdit = async user => {
    await dispatch(userActions.updateUserToDB(user));
    await dispatch(tweetActions.fetchUserTweetsFromDB());
    props.setModal(!props.modal);
  };

  return (
    <React.Fragment>
      <div className="modal">
        <div className="edit-form">
          <button
            className="close-modal"
            onClick={() => props.setModal(!props.modal)}
          >
            X
          </button>
          <button onClick={() => handleEdit(editForm)}>Save Changes</button>
          <button onClick={handleDeleteUser}>Delete User</button>
          <input
            type="text"
            name="email"
            value={editForm.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="username"
            value={editForm.username}
            onChange={handleChange}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProfileEdit;
