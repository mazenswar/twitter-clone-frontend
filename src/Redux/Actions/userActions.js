import { USERS_URL, LOGIN_URL, PERSIST_URL } from "../../API_CONSTANTS";

// Actions
const newUserAction = user => ({
  type: "NEW_USER",
  payload: user
});

const loginUserAction = user => ({
  type: "LOGIN_USER",
  payload: user
});

const persistUserAction = user => ({
  type: "PERSIST_USER",
  payload: user
});

const updateUserAction = user => ({
  type: "UPDATE_USER",
  payload: user
});

const logoutUserAction = () => ({
  type: "LOGOUT_USER"
});

const deleteUserAction = () => ({
  type: "DELETE_USER"
});

// Fetch calls

const newUserToDB = user => dispatch => {
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accepts: "application/json"
    },
    body: JSON.stringify(user)
  };
  fetch(USERS_URL, config)
    .then(r => r.json())
    .then(data => {
      dispatch(newUserAction(data.user));
      localStorage.token = data.token;
    });
};

const loginUserToDB = user => dispatch => {
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accepts: "application/json"
    },
    body: JSON.stringify(user)
  };
  fetch(LOGIN_URL, config)
    .then(r => r.json())
    .then(data => {
      dispatch(loginUserAction(data.user));
      localStorage.token = data.token;
    });
};

const persistUserFromDB = () => dispatch => {
  const config = {
    headers: {
      Authorization: "bearer " + localStorage.token
    }
  };
  fetch(PERSIST_URL, config)
    .then(r => r.json())
    .then(user => {
      dispatch(persistUserAction(user));
    });
};

const updateUserToDB = user => dispatch => {
  const config = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(user)
  };
  return fetch(`${USERS_URL}/${user.id}`, config)
    .then(r => r.json())
    .then(updatedUser => {
      dispatch(updateUserAction(updatedUser));
    });
};

const deleteUserFromDB = id => dispatch => {
  const config = {
    method: "DELETE"
  };
  fetch(`${USERS_URL}/${id}`, config);
  localStorage.clear();
  dispatch(deleteUserAction());
};

const logoutUser = () => dispatch => {
  localStorage.clear();
  dispatch(logoutUserAction());
};

//// EXPORT

export default {
  newUserToDB,
  loginUserToDB,
  persistUserFromDB,
  updateUserToDB,
  deleteUserFromDB,
  logoutUser
};
