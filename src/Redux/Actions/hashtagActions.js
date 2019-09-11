import API from '../../API_CONSTANTS';

const setHashtag = hashtag => ({
  type: 'GET_HASHTAG',
  payload: hashtag
});

const getHashtagFromDB = id => dispatch => {
  fetch(`${API.HASHTAGS_URL}/${id}`)
    .then(r => r.json())
    .then(hashtag => {
      dispatch(setHashtag(hashtag));
    });
};

export default {
  getHashtagFromDB
};
