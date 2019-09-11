import React from 'react';
import TweetComponents from '../Components/Tweets';

const Home = () => {
  return (
    <div>
      <h1 className="page-header">Home</h1>
      <TweetComponents.NewTweetForm />
      <TweetComponents.Timeline />
    </div>
  );
};

export default Home;
