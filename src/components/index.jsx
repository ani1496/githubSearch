import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LandingPage from './LandingPage/index';
import DetailsPage from './DetailsPage/index';

const Container = () => {
  return (
    <Router>
        <Switch>
          <Route path="/details">
            <DetailsPage />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
    </Router>
  );
}

export default Container;