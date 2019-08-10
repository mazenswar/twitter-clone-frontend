import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import tweetActions from '../../Redux/Actions/tweetActions';

const NewTweetForm = () => {
  const [tweetForm, setTweetForm] = useState({ content: '' });
  const dispatch = useDispatch();

  const handleChange = e => setTweetForm({ content: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(tweetActions.newTweetToDB(tweetForm));
    setTweetForm({ content: '' });
  };

  return (
    <form className="new-tweet-form" onSubmit={handleSubmit}>
      <div className="tweet-form-content-div">
        <div className="user-profile-img" />
        <textarea
          type="text"
          value={tweetForm.content}
          onChange={handleChange}
          placeholder="What's on your mind?"
        />
      </div>
      <div className="tweet-form-buttons-div">
        <input type="submit" value="tweet" />
      </div>
    </form>
  );
};

export default NewTweetForm;
