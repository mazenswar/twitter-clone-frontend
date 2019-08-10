import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import userActions from '../../Redux/Actions/userActions';

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

  console.log(editForm);
  return (
    <React.Fragment>
      <button onClick={() => props.handleEdit(editForm)}>Save Changes</button>
      <button onClick={handleDeleteUser}>Delete User</button>
      <div className="profile-container">
        <input
          type="text"
          name="first_name"
          value={editForm.first_name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="last_name"
          value={editForm.last_name}
          onChange={handleChange}
        />
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
    </React.Fragment>
  );
};

export default ProfileEdit;
