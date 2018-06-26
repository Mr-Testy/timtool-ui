import React, { Component } from 'react';
// import { TUNES } from '../../store.js';
import Autofilter from './Autofilter';
import TableOfTunes from './TableOfTunes';
import _ from 'lodash';

const API = 'https://testy-dev.satsu.eu/timtoolApi/tunes/';
const query = '?offset=10000';

export default class TableOfTunesWrapper extends Component {
  state = {
    data: [],
    filteredData: [],
    input: '',
    column: null,
    direction: null,
    isLoading: true,
  };

  componentDidMount() {
    fetch(API + query)
    .then(response => response.json())
    .then(data => this.setState({ data: data,
      filteredData: data,
      isLoading: false
    }));
  }

  onChangeFilter = (e) => {
    let modifiedData = _.filter(this.state.data, (tune) => {
      let bool = tune.name.toLowerCase().includes(e.target.value.toLowerCase());
      if (bool) return tune;
    });
    this.setState({
      filteredData: modifiedData,
      input: e.target.value,
    });
  }

  handleSort = clickedColumn => () => {
    const { column, direction, filteredData } = this.state;

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        filteredData: _.sortBy(filteredData, [clickedColumn]),
        direction: 'ascending'
      });

      return;
    }

    this.setState({
      filteredData: filteredData.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending'
    });
  };

  render() {
    const { filteredData, input, column, direction, isLoading } = this.state;

    return (
      <div>
      <Autofilter onChangeFilter={this.onChangeFilter} input={input}/>
      <TableOfTunes data={filteredData} column={column} direction={direction} handleSort={this.handleSort} isLoading={isLoading}/>
      </div>
      );
  }
}
