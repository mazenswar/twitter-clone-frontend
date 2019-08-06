import React, { Component } from "react";
import userActions from "../Redux/Actions/userActions";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "../Stylesheets/Users/form.scss";

class LoginPage extends Component {
  state = {
    username: "",
    password: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    const { loginUserToDB, history } = this.props;
    loginUserToDB(this.state);
    history.push("/");
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { username, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Login Page</h1>
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
        <input type="submit" />
      </form>
    );
  }
}

const mapDispatchToProps = {
  loginUserToDB: userActions.loginUserToDB
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(LoginPage)
);
