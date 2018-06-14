import React from 'react';

export default class Autofilter extends React.Component {

  render() {
    // const list = this.state.data
    // .filter(d => this.state.input === '' || d.includes(this.state.input))
    // .map((d, index) => <li key={index}>{d}</li>);
    const {input, onChangeFilter} = this.props
    return (
      <div>
      <input
      value={input}
      type="text"
      onChange={onChangeFilter}
      />
      </div>
      );
  }
}
