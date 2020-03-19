import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from '../src/pages/landing';
import PostDetailsPage from '../src/pages/postDetails';
import { NavbarSection } from '../src/components/molecules/navbarSection';

export const RouteNames = {
  landing: '/',
  postDetails: '/postDetails/:id'
};

export default function RouteComponent() {
  return (
    <React.Fragment>
      <Router>
        <NavbarSection />
        <Switch>
          <Route exact path={RouteNames.landing} component={HomePage} />
          <Route
            exact
            path={RouteNames.postDetails}
            component={PostDetailsPage}
          />
        </Switch>
      </Router>
    </React.Fragment>
  );
}
