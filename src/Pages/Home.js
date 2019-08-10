import React from 'react';
import TweetComponents from '../Components/Tweets';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <TweetComponents.NewTweetForm />
      <TweetComponents.Timeline />
    </div>
  );
};

export default Home;
