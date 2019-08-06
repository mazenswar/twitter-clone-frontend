import React, { Component } from "react";
import { connect } from "react-redux";
import tweetActions from "../../Redux/Actions/tweetActions";

class NewTweetForm extends Component {
  state = {
    content: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    const { newTweetToDB } = this.props;
    newTweetToDB(this.state);
    this.setState({ content: "" });
  };
  handleChange = e => this.setState({ content: e.target.value });
  render() {
    return (
      <form className="new-tweet-form" onSubmit={this.handleSubmit}>
        <div className="tweet-form-content-div">
          <div className="user-profile-img" />
          <textarea
            type="text"
            value={this.state.content}
            onChange={this.handleChange}
            placeholder="What's on your mind?"
          />
        </div>
        <div className="tweet-form-buttons-div">
          <input type="submit" value="tweet" />
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = {
  newTweetToDB: tweetActions.newTweetToDB
};

export default connect(
  null,
  mapDispatchToProps
)(NewTweetForm);
