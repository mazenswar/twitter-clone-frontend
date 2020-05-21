import API from '../../API_CONSTANTS';

// Actions

const setUserAction = (user) => ({
  type: 'SET_USER',
  payload: user,
});

const clearUserAction = () => ({
  type: 'CLEAR_USER',
});

// Fetch calls

const newUserToDB = (user) => (dispatch) => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accepts: 'application/json',
    },
    body: JSON.stringify(user),
  };
  fetch(API.USERS_URL, config)
    .then((r) => r.json())
    .then((data) => {
      dispatch(setUserAction(data.user));
      localStorage.token = data.token;
    });
};

const loginUserToDB = (user) => (dispatch) => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accepts: 'application/json',
    },
    body: JSON.stringify(user),
  };
  fetch(API.LOGIN_URL, config)
    .then((r) => r.json())
    .then((data) => {
      dispatch(setUserAction(data.user));
      localStorage.token = data.token;
    });
};

const persistUserFromDB = () => (dispatch) => {
  const config = {
    headers: {
      Authorization: 'bearer ' + localStorage.token,
    },
  };
  fetch(API.PERSIST_URL, config)
    .then((r) => r.json())
    .then((user) => {
      dispatch(setUserAction(user));
    });
};

const updateUserToDB = (user) => (dispatch) => {
  const config = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(user),
  };
  return fetch(`${API.USERS_URL}/${user.id}`, config)
    .then((r) => r.json())
    .then((updatedUser) => {
      dispatch(setUserAction(updatedUser));
    });
};

const deleteUserFromDB = (id) => (dispatch) => {
  const config = {
    method: 'DELETE',
  };
  fetch(`${API.USERS_URL}/${id}`, config);
  localStorage.clear();
  dispatch(clearUserAction());
};

const logoutUser = () => (dispatch) => {
  localStorage.clear();
  dispatch(clearUserAction());
};

//// EXPORT

export default {
  newUserToDB,
  loginUserToDB,
  persistUserFromDB,
  updateUserToDB,
  deleteUserFromDB,
  logoutUser,
};
