import _ from 'lodash';
import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export default class TableOfTunes extends Component {
  render() {
    const { column, direction, data } = this.props;

    return (
      <Table unstackable sortable striped selectable fixed compact>
      <Table.Header>
      <Table.Row>
      <Table.HeaderCell
      sorted={column === 'name' ? direction : null}
      onClick={this.props.handleSort('name')}
      >
      Name
      </Table.HeaderCell>
      <Table.HeaderCell
      sorted={column === 'type' ? direction : null}
      onClick={this.props.handleSort('type')}
      >
      Type
      </Table.HeaderCell>
      <Table.HeaderCell
      sorted={column === 'key' ? direction : null}
      onClick={this.props.handleSort('key')}
      >
      Key
      </Table.HeaderCell>
      <Table.HeaderCell
      sorted={column === 'versions' ? direction : null}
      onClick={this.props.handleSort('versions')}
      >
      Versions
      </Table.HeaderCell>
      </Table.Row>
      </Table.Header>
      <Table.Body>
      {_.map(data, ({ key, type, name, slug, versions }) => (
        <Table.Row key={slug}>
        <Table.Cell>{name}</Table.Cell>
        <Table.Cell>{type}</Table.Cell>
        <Table.Cell>{key}</Table.Cell>
        <Table.Cell>{versions}</Table.Cell>
        </Table.Row>
        ))}
      </Table.Body>
      </Table>
      );
  }
}

TableOfTunes.propTypes = {
  column: PropTypes.string,
  direction: PropTypes.string,
  data: PropTypes.array.isRequired
};
