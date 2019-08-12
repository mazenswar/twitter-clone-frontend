import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import userActions from '../../Redux/Actions/userActions';

const Nav = props => {
  const dispatch = useDispatch();
  const userID = useSelector(state =>
    state.currentUser.data ? state.currentUser.data.id : {}
  );

  const userLinks = () => (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/" onClick={() => dispatch(userActions.logoutUser())}>
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

  return userID ? userLinks() : visitorLinks();
};

export default Nav;
