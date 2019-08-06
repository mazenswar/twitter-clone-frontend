import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import MasterComponents from "./Components/Master";
import userActions from "./Redux/Actions/userActions";
import "./Stylesheets/master.scss";

class App extends React.Component {
  componentDidMount() {
    const { persistUserFromDB } = this.props;
    if (localStorage.token) {
      persistUserFromDB();
    }
  }
  render() {
    return (
      <Router>
        <MasterComponents.Nav />
        <div className="main-content">
          <MasterComponents.Routes />
        </div>
      </Router>
    );
  }
}
const mapDispatchToProps = {
  persistUserFromDB: userActions.persistUserFromDB
};
const mapStateToProps = state => state;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
