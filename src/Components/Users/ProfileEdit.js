import React, { Component } from "react";
import { connect } from "react-redux";
import userActions from "../../Redux/Actions/userActions";

class ProfileEdit extends Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    username: ""
  };

  componentDidMount() {
    this.setState({ ...this.props.currentUser });
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleDeleteUser = () => {
    const { deleteUserFromDB } = this.props;
    deleteUserFromDB(this.state.id);
  };

  render() {
    const { handleEdit } = this.props;
    const { first_name, last_name, username, email } = this.state;
    return (
      <React.Fragment>
        <button onClick={() => handleEdit(this.state)}>Save Changes</button>
        <button onClick={this.handleDeleteUser}>Delete User</button>
        <div className="profile-container">
          <input
            type="text"
            name="first_name"
            value={first_name}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="last_name"
            value={last_name}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
        </div>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = {
  deleteUserFromDB: userActions.deleteUserFromDB
};
const mapStateToProps = state => ({ currentUser: { ...state.currentUser } });
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileEdit);
// export default ProfileEdit;
