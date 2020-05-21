import React from 'react';

export default function RetweetButton({ retweets, userId }) {
  const retweeted = retweets.some(t => t.user_id === userId);
  return retweeted ? (
    <div
      className="liked"
      onClick={() => dispatch(TweetActions.handleRetweetToDB(id))}
    >
      {retweetIcon}
      {`   ${retweets.length}`}
    </div>
  ) : (
    <div onClick={() => dispatch(TweetActions.handleRetweetToDB(id))}>
      {retweetIcon}
      {`   ${retweets.length}`}
    </div>
  );
}
