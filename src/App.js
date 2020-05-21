import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import MasterComponents from './Components/Master';
import userActions from './Redux/Actions/userActions';
import './Stylesheets/master.scss';

const App = () => {
  const disptach = useDispatch();
  useEffect(() => {
    if (localStorage.token) {
      disptach(userActions.persistUserFromDB());
    }
  }, [disptach]);

  return (
    <Router>
      <MasterComponents.Nav />
      <div className="main-content">
        <MasterComponents.Routes />
      </div>
    </Router>
  );
};

export default App;
