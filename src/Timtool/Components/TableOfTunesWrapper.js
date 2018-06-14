import React, { Component } from 'react';
// import { TUNES } from '../../store.js';
import Autofilter from './Autofilter';
import TableOfTunes from './TableOfTunes';
import _ from 'lodash';

const API = 'https://testy-dev.satsu.eu/timtoolApi/tunes/';

export default class TableOfTunesWrapper extends Component {
  state = {
    data: [],
    input: ''
  };

  componentDidMount() {
    fetch(API)
    .then(response => response.json())
    .then(data => this.setState({ data: data }));
  }

  onChangeFilter = (e) => {
    let modifiedData = _.filter(this.state.data, {'name': e.target.value });
    this.setState({
      data: modifiedData,
      input: e.target.value,
    });
  }

  render() {
    const { data, input } = this.state;

    return (
      <div>
      <Autofilter data={data} onChangeFilter={this.onChangeFilter} input={input}/>
      <TableOfTunes data={data}/>
      </div>
      );
  }
}
