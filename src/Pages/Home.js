import React from "react";
import { connect } from "react-redux";
import TweetComponents from "../Components/Tweets";

class Home extends React.Component {
  render() {
    console.log(this.props);

    return (
      <div>
        <h1>Home</h1>
        <TweetComponents.NewTweetForm />
        <TweetComponents.Timeline />
      </div>
    );
  }
}

const mapStateToProps = state => ({ thisIsTheState: state });

export default connect(mapStateToProps)(Home);
