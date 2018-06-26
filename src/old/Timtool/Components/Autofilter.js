import React from 'react';
import { Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export default class Autofilter extends React.Component {

  render() {
    const {input, onChangeFilter} = this.props
    return (
      <Input
      icon='search'
      iconPosition='left'
      placeholder='Filter tunes...'
      value={input}
      onChange={onChangeFilter}
      />
      );
  }
}

Autofilter.propTypes = {
  input: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired
};