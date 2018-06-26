import _ from 'lodash';
import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react'

export default class TableOfTunes extends Component {
  render() {
    const { column, direction, data, handleSort, isLoading } = this.props;
    let body;

    if (isLoading) {
      body =  
      <Table.Row>
      <Table.Cell><Icon loading name='spinner' /> Tunes are loading...</Table.Cell>
      </Table.Row>
    } else {
      body =  
      _.map(data, ({ key, type, name, slug, versions }) => (
        <Table.Row key={slug}>
        <Table.Cell>{name}</Table.Cell>
        <Table.Cell>{type}</Table.Cell>
        <Table.Cell>{key}</Table.Cell>
        </Table.Row>
        ))}

      return (
        <Table unstackable sortable striped selectable fixed compact>
        <Table.Header>
        <Table.Row>
        <Table.HeaderCell
        sorted={column === 'name' ? direction : null}
        onClick={handleSort('name')}
        >
        Name
        </Table.HeaderCell>
        <Table.HeaderCell
        sorted={column === 'type' ? direction : null}
        onClick={handleSort('type')}
        >
        Type
        </Table.HeaderCell>
        <Table.HeaderCell
        sorted={column === 'key' ? direction : null}
        onClick={handleSort('key')}
        >
        Key
        </Table.HeaderCell>
        </Table.Row>
        </Table.Header>
        <Table.Body> 
        {body
        }
        </Table.Body>
        </Table>
        );
    }
  }

  TableOfTunes.propTypes = {
    column: PropTypes.string,
    direction: PropTypes.string,
    data: PropTypes.array.isRequired,
    handleSort: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired
  };
