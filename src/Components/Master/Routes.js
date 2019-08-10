import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Pages from '../../Pages';

const Routes = props => {
  const username = useSelector(state => state.currentUser.username);
  const userRoutes = () => (
    <React.Fragment>
      <Route path="/profile" component={Pages.Profile} />
      <Route path="/follows" component={Pages.Follows} />
      <Route exact path="/" component={Pages.Home} />
      <Route exact path="/users" component={Pages.UsersIndex} />
      <Route exact path="/users/:id" component={Pages.Show} />
    </React.Fragment>
  );

  const visitorRoutes = () => (
    <React.Fragment>
      <Route exact path="/login" component={Pages.Login} />
      <Route exact path="/signup" component={Pages.Signup} />
      <Route exact path="/" component={Pages.Login} />
    </React.Fragment>
  );

  return <Switch>{username ? userRoutes() : visitorRoutes()}</Switch>;
};

export default Routes;
