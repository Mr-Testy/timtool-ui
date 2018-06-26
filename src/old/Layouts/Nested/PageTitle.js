import React from 'react';
import { Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const PageTitle = props => (
  <div>
    <Header as="h1">{props.pageTitle}</Header>
  </div>
);

export default PageTitle;

PageTitle.propTypes = {
  pageTitle: PropTypes.string.isRequired
};
