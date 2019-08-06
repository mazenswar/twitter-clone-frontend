const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "NEW_USER":
    case "LOGIN_USER":
    case "PERSIST_USER":
    case "UPDATE_USER":
      return payload;
    case "LOGOUT_USER":
    case "DELETE_USER":
      return {};
    default:
      return state;
  }
};
