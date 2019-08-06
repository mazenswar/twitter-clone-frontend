import React from "react";
import { connect } from "react-redux";
import UserComponents from "../Components/Users";
import userActions from "../Redux/Actions/userActions";
import tweetActions from "../Redux/Actions/tweetActions";

class ProfilePage extends React.Component {
  state = {
    editMode: false
  };

  componentDidMount() {
    const { fetchUserTweetsFromDB } = this.props;
    fetchUserTweetsFromDB();
  }

  handleEdit = user => {
    const { editMode } = this.state;

    if (editMode && user.username) {
      this.updateTweets(user);
    } else {
      this.setState({ editMode: true });
    }
  };

  async updateTweets(user) {
    const { updateUserToDB, fetchUserTweetsFromDB } = this.props;
    await updateUserToDB(user);
    fetchUserTweetsFromDB();
    this.setState({ editMode: false });
  }

  handleDelete = () => {
    const { deleteUserFromDB, currentUser } = this.props;
    deleteUserFromDB(currentUser.id);
  };

  render() {
    const { editMode } = this.state;
    if (!editMode) {
      return (
        <React.Fragment>
          <button onClick={this.handleDelete}>Delete Account</button>
          <UserComponents.ProfileContent handleEdit={this.handleEdit} />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <UserComponents.ProfileEdit handleEdit={this.handleEdit} />
        </React.Fragment>
      );
    }
  }
}
const mapDispatchToProps = {
  updateUserToDB: userActions.updateUserToDB,
  deleteUserFromDB: userActions.deleteUserFromDB,
  fetchUserTweetsFromDB: tweetActions.fetchUserTweetsFromDB
};
const mapStateToProps = state => ({ currentUser: state.currentUser });
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage);
