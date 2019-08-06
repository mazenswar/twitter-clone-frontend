import { USERS_URL } from "../../API_CONSTANTS";

// Actions

const showUserAction = user => ({
  type: "GET_USER_SHOW",
  payload: user
});

const newFollowAction = user => ({
  type: "NEW_FOLLOW",
  payload: user
});

// Fetch

const getShowUserFromDB = userId => dispatch => {
  fetch(`${USERS_URL}/${userId}`)
    .then(r => r.json())
    .then(userObj => {
      dispatch(showUserAction(userObj));
    });
};

const followUpdateToDB = followeeId => dispatch => {
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "bearer " + localStorage.token
    }
  };
  fetch(`http://localhost:3000/follow/${followeeId}`, config)
    .then(r => r.json())
    .then(updatedUser => {
      dispatch(newFollowAction(updatedUser));
    });
};

// Export
export default {
  getShowUserFromDB,
  followUpdateToDB
};
