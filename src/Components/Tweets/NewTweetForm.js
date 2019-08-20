import React, { useState, Fragment, useRef } from 'react';
// import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import tweetActions from '../../Redux/Actions/tweetActions';

const NewTweetForm = () => {
  const divRef = useRef();
  const dispatch = useDispatch();
  const [len, setLen] = useState(0);

  const handleSubmit = e => {
    e.preventDefault();
    const content = divRef.current.innerText.toString();
    let tweet = { content: content };
    dispatch(tweetActions.newTweetToDB(tweet));
    divRef.current.innerHTML = '';
  };

  const checkLength = () => {
    return len <= 140 ? (
      <span style={{ color: 'green' }}>{len}</span>
    ) : (
      <Fragment>
        <p />
        <span style={{ color: 'red' }}>{140 - len}</span>
      </Fragment>
    );
  };

  const submitButton = () => {
    return len > 140 ? (
      <input type="submit" value="tweet" disabled />
    ) : (
      <input type="submit" value="tweet" />
    );
  };

  const handleKeypress = e => {
    setLen(len + 1);
    const input = e.target.innerText;
    const arr = input.split(' ').length > 1;
    const selection = document.getSelection().toString();

    if (e.keyCode === 8 && selection.length) {
      divRef.current.innerText = divRef.current.innerText
        .replace(selection, '')
        .trim();
    } else if (selection) {
      divRef.current.innerHTML = '';
    } else if (arr) {
      let str = ``;
      input.split(' ').map(ele => {
        return ele.startsWith('#')
          ? (str = str + ' ' + `<span style='color: blue'>${ele}</span>`)
          : (str = str + ' ' + ele);
      });
      e.target.innerHTML = `<span>${str}</span>`;
    } else if (input.includes('#')) {
      e.target.innerHTML = `<span style='color: blue'>${input}</span>`;
    } else {
      e.target.innerHTML = `<span>${input}</span>`;
    }

    let range = document.createRange();
    let sel = window.getSelection();
    range.setStart(divRef.current, divRef.current.children.length);
    range.collapse(true);
    sel.removeAllRanges();
    sel.addRange(range);
    divRef.current.focus();
  };

  // useEffect(() => {
  //   debugger;
  // });

  return (
    <form className="new-tweet-form" onSubmit={handleSubmit}>
      <div className="tweet-form-content-div">
        <div className="user-profile-img" />
      </div>
      <div
        ref={divRef}
        onKeyDown={handleKeypress}
        contentEditable={true}
        style={{ backgroundColor: 'red', height: '50px', width: '250px' }}
      />
      <div className="tweet-form-buttons-div">
        {checkLength()}
        {submitButton()}
      </div>
    </form>
  );
};

// dangerouslySetInnerHTML={{ __html: t }}
export default NewTweetForm;
