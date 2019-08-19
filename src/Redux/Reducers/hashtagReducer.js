const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'GET_HASHTAG':
      return payload;
    default:
      return state;
  }
};
