import React from 'react';
import HomeComponents from '../Components/Home';
import TweetComponents from '../Components/Tweets';

const Home = () => {
  return (
    <div>
      <h1 className="page-header">Home</h1>
      <TweetComponents.NewTweetForm />
      <HomeComponents.Timeline />
    </div>
  );
};

export default Home;
