import React, { Component } from "react";
import { connect } from "react-redux";
import userActions from "../Redux/Actions/userActions";
import "../Stylesheets/Users/form.scss";

class SignupPage extends Component {
  state = {
    first_name: "",
    last_name: "",
    username: "",
    password: "",
    email: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    const { newUserToDB, history } = this.props;
    newUserToDB(this.state);
    history.push("/");
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { first_name, last_name, username, password, email } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Signup Page</h1>
        <input
          type="text"
          name="first_name"
          value={first_name}
          onChange={this.handleChange}
          placeholder="First Name"
        />
        <input
          type="text"
          name="last_name"
          value={last_name}
          onChange={this.handleChange}
          placeholder="Last Name"
        />
        <input
          type="text"
          name="email"
          value={email}
          onChange={this.handleChange}
          placeholder="Email"
        />
        <input
          type="text"
          name="username"
          value={username}
          onChange={this.handleChange}
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={this.handleChange}
          placeholder="Password"
        />
        <input type="password" name="password" placeholder="Confirm Password" />
        <input type="submit" />
      </form>
    );
  }
}

const mapDispatchToProps = {
  newUserToDB: userActions.newUserToDB
};
export default connect(
  null,
  mapDispatchToProps
)(SignupPage);
