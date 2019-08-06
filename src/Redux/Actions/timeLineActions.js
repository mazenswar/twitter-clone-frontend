import { TIMELINE_URL } from "../../API_CONSTANTS";

// Actions
const getTimelineAction = timeline => ({
  type: "GET_TIMELINE",
  payload: timeline
});
// Fetch

const getTimelineFromDB = () => dispatch => {
  // REMOVE THIS
  fetch(TIMELINE_URL, {
    headers: { Authorization: `bearer ` + localStorage.token }
  })
    .then(r => r.json())
    .then(timelineArr => {
      dispatch(getTimelineAction(timelineArr));
    });
};

// Export

export default {
  getTimelineFromDB
};
