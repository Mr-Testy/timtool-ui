import _ from 'lodash';
import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
// import { TUNES } from '../../store.js';

export default class TableOfTunes extends Component {
  state = {
    column: null,
    data: [],
    direction: null
  }

  handleSort = clickedColumn => () => {
    const { column, direction } = this.state;
    const data = this.state.data.length === 0 ? this.props.data : this.state.data; 

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]),
        direction: 'ascending'
      });

      return;
    }

    this.setState({
      data: data.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending'
    });
  };

  render() {
    const { column, direction } = this.state;
    const data = this.state.data.length === 0 ? this.props.data : this.state.data;

    return (
      <Table unstackable sortable striped selectable fixed compact>
      <Table.Header>
      <Table.Row>
      <Table.HeaderCell
      sorted={column === 'name' ? direction : null}
      onClick={this.handleSort('name')}
      >
      Name
      </Table.HeaderCell>
      <Table.HeaderCell
      sorted={column === 'type' ? direction : null}
      onClick={this.handleSort('type')}
      >
      Type
      </Table.HeaderCell>
      <Table.HeaderCell
      sorted={column === 'key' ? direction : null}
      onClick={this.handleSort('key')}
      >
      Key
      </Table.HeaderCell>
      <Table.HeaderCell
      sorted={column === 'versions' ? direction : null}
      onClick={this.handleSort('versions')}
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
