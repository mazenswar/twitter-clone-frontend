const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_NOTIFICATIONS':
      return payload;
    default:
      return state;
  }
};
