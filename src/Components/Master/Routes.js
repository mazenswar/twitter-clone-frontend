import React from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import Pages from "../../Pages";

const Routes = props => {
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
      <Route path="/login" component={Pages.Login} />
      <Route path="/signup" component={Pages.Signup} />
      <Route component={Pages.Login} />
    </React.Fragment>
  );

  return <Switch>{props.username ? userRoutes() : visitorRoutes()}</Switch>;
};

const mapStateToProps = state => ({ username: state.currentUser.username });
export default connect(mapStateToProps)(Routes);
