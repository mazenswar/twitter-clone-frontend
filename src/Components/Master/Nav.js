import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import userActions from "../../Redux/Actions/userActions";

const Nav = props => {
  const userLinks = () => (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/" onClick={props.logoutUser}>
        Logout
      </Link>
    </nav>
  );

  const visitorLinks = () => (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/login">Login</Link>
    </nav>
  );

  return props.username ? userLinks() : visitorLinks();
};

const mapDispatchToProps = {
  logoutUser: userActions.logoutUser
};
const mapStateToProps = state => ({ username: state.currentUser.username });
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
