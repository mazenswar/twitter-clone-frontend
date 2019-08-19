import React, { useState, Fragment } from 'react';
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

  const checkLength = () => {
    let length = tweetForm.content.length;
    return length <= 140 ? (
      <span style={{ color: 'green' }}>{tweetForm.content.length}</span>
    ) : (
      <Fragment>
        <p />
        <span style={{ color: 'red' }}>{140 - tweetForm.content.length}</span>
      </Fragment>
    );
  };

  const submitButton = () => {
    return tweetForm.content.length > 140 ? (
      <input type="submit" value="tweet" disabled />
    ) : (
      <input type="submit" value="tweet" />
    );
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
        {checkLength()}
        {submitButton()}
      </div>
    </form>
  );
};

export default NewTweetForm;
