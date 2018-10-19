import React from 'react';
import { Route } from 'react-router-dom';
import {
  Groups,
  Comparator,
  Generator,
  MyAccount,
  MyGroups,
  MyDashboard,
} from '../pages';
import {
  HomeContainer,
  TunesContainer,
  MyTunesContainer
} from '../../containers/pages'

const Content = () => (
  <div>
  <Route
  exact
  path="/"
  component={HomeContainer}
  />
  <Route
  path="/tunes"
  component={TunesContainer}
  />
  <Route
  exact
  path="/groups"
  component={Groups}
  />
  <Route
  exact
  path="/comparator"
  component={Comparator}
  />
  <Route
  exact
  path="/generator"
  component={Generator}
  />
  <Route
  exact
  path="/myaccount"
  component={MyAccount}
  />
  <Route
  exact
  path="/mytunes"
  component={MyTunesContainer}
  />
  <Route
  exact
  path="/mygroups"
  component={MyGroups}
  />
  <Route
  exact
  path="/mydashboard"
  component={MyDashboard}
  />
  </div>
  )

// Content.propTypes = {
// };

export default Content