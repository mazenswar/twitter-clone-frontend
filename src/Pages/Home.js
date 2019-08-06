import React from "react";
import TweetComponents from "../Components/Tweets";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <TweetComponents.NewTweetForm />
        <TweetComponents.Timeline />
      </div>
    );
  }
}

export default Home;
