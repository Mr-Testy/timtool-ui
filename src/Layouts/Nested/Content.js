import React, { Component } from 'react';
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
} from '../../Timtool/Pages';
import PropTypes from 'prop-types';

export default class Content extends Component {
  state = {};

  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          component={props => (
            <Home changePage={this.props.changePage} {...props} />
          )}
        />
        <Route
          exact
          path="/alltunes"
          component={props => (
            <Tunes changePage={this.props.changePage} {...props} />
          )}
        />
        <Route
          exact
          path="/groups"
          component={props => (
            <Groups changePage={this.props.changePage} {...props} />
          )}
        />
        <Route
          exact
          path="/comparator"
          component={props => (
            <Comparator changePage={this.props.changePage} {...props} />
          )}
        />
        <Route
          exact
          path="/generator"
          component={props => (
            <Generator changePage={this.props.changePage} {...props} />
          )}
        />
        <Route
          exact
          path="/myaccount"
          component={props => (
            <MyAccount changePage={this.props.changePage} {...props} />
          )}
        />
        <Route
          exact
          path="/myfavorites"
          component={props => (
            <MyFavorites changePage={this.props.changePage} {...props} />
          )}
        />
        <Route
          exact
          path="/mygroups"
          component={props => (
            <MyGroups changePage={this.props.changePage} {...props} />
          )}
        />
        <Route
          exact
          path="/mydashboard"
          component={props => (
            <MyDashboard changePage={this.props.changePage} {...props} />
          )}
        />
      </div>
    );
  }
}

Content.propTypes = {
  changePage: PropTypes.func.isRequired
};
