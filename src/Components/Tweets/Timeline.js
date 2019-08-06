import React, { Component } from "react";
import { connect } from "react-redux";
import TweetsActions from "../../Redux/Actions/tweetActions";
import TweetComponents from ".";

class Timeline extends Component {
  componentDidMount() {
    this.getTweets();
  }

  async getTweets() {
    await localStorage.token;
    const { fetchTimelineTweetsFromDB } = this.props;
    fetchTimelineTweetsFromDB();
  }

  renderTweets = () => {
    const { tweets } = this.props;
    if (tweets.length) {
      return tweets.map(tweet => (
        <TweetComponents.SingleTweet key={`timeline-${tweet.id}`} {...tweet} />
      ));
    }
  };

  render() {
    return (
      <div>
        <h1>Hello from the timeline</h1>
        {this.renderTweets()}
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchTimelineTweetsFromDB: TweetsActions.fetchTimelineTweetsFromDB
};
const mapStateToProps = state => ({
  tweets: state.tweets
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timeline);
