import React, { Component } from "react";
import { connect } from "react-redux";
import TweetComponents from "../Components/Tweets";
import ShowActions from "../Redux/Actions/showActions";
import TweetActions from "../Redux/Actions/tweetActions";

class ShowPage extends Component {
  componentDidMount() {
    const userId = this.props.match.params.id;
    const { getShowUserFromDB, fetchShowUserTweets } = this.props;
    getShowUserFromDB(userId);
    fetchShowUserTweets(userId);
  }

  handleFollow = () => {
    const { match, followUpdateToDB } = this.props;
    const followeeId = match.params.id;
    followUpdateToDB(followeeId);
  };

  followButton = () => {
    const { showUser, currentUser } = this.props;
    if (showUser.followers) {
      const follower = showUser.followers.find(
        user => user.id === currentUser.id
      );
      return follower ? (
        <button onClick={this.handleFollow}>Unfollow</button>
      ) : (
        <button onClick={this.handleFollow}>Follow</button>
      );
    }
  };

  renderTweets = () => {
    const { showUser, tweets } = this.props;
    if (showUser.tweets) {
      return tweets.map(tweet => {
        return (
          <TweetComponents.SingleTweet key={`show-${tweet.id}`} {...tweet} />
        );
      });
    }
  };

  render() {
    const { showUser } = this.props;
    return (
      <div>
        <h2>{showUser.username}</h2>
        {this.followButton()}
        <h2>Tweets</h2>
        {this.renderTweets()}
      </div>
    );
  }
}

const mapDispatchToProps = {
  getShowUserFromDB: ShowActions.getShowUserFromDB,
  followUpdateToDB: ShowActions.followUpdateToDB,
  fetchShowUserTweets: TweetActions.fetchShowUserTweets
};
const mapStateToProps = state => ({
  currentUser: state.currentUser,
  showUser: state.showUser,
  tweets: state.tweets
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowPage);
