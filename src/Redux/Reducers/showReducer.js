const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_USER_SHOW":
      return payload;
    case "NEW_FOLLOW":
      return payload;
    default:
      return state;
  }
};
