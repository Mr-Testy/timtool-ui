import React from 'react';
import { Route } from 'react-router-dom';
import {
  Home,
  Tunes,
  Groups,
  Comparator,
  Generator,
  MyAccount,
  MyFavorites,
  MyGroups,
  MyDashboard
} from '../pages';

const Content = () => (
  <div>
  <Route
  exact
  path="/"
  component={props => (
    <Home {...props} />
    )}
  />
  <Route
  exact
  path="/alltunes"
  component={props => (
    <Tunes {...props} />
    )}
  />
  <Route
  exact
  path="/groups"
  component={props => (
    <Groups {...props} />
    )}
  />
  <Route
  exact
  path="/comparator"
  component={props => (
    <Comparator {...props} />
    )}
  />
  <Route
  exact
  path="/generator"
  component={props => (
    <Generator {...props} />
    )}
  />
  <Route
  exact
  path="/myaccount"
  component={props => (
    <MyAccount {...props} />
    )}
  />
  <Route
  exact
  path="/myfavorites"
  component={props => (
    <MyFavorites {...props} />
    )}
  />
  <Route
  exact
  path="/mygroups"
  component={props => (
    <MyGroups {...props} />
    )}
  />
  <Route
  exact
  path="/mydashboard"
  component={props => (
    <MyDashboard {...props} />
    )}
  />
  </div>
  )

// Content.propTypes = {
// };

export default Content