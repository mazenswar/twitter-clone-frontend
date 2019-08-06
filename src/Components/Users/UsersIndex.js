import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class UsersIndex extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    fetch("http://localhost:3000/users")
      .then(r => r.json())
      .then(usersArr => {
        this.setState({ users: usersArr });
      });
  }

  renderUsers = () => {
    const { users } = this.state;
    return users.map(user => (
      <Link key={user.id} to={`/users/${user.id}`}>
        {user.username}
      </Link>
    ));
  };

  render() {
    return <div>{this.renderUsers()}</div>;
  }
}
