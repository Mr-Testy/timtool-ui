import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react';

const aboutTimtool = (
  <Segment inverted size="tiny" attached="bottom">
  about
  </Segment>
  );

const contact = (
  <Segment inverted size="tiny" attached="bottom">
  contact
  <div>lol</div>
  <div>lol</div>
  <div>lol</div>
  <div>lol</div>
  <div>lol</div>
  <div>lol</div>
  <div>lol</div>
  <div>lol</div>
  <div>lol</div>
  <div>lol</div>
  </Segment>
  );

export default class Footer extends Component {
  state = { activeFooter: 'About Timtool' };

  handleItemClick = (e, { name }) => this.setState({ activeFooter: name });

  render() {
    const { activeFooter } = this.state;
    const footer = activeFooter === 'About Timtool' ? aboutTimtool : contact;

    return (
      <div>
      <Menu inverted pointing attached="top">
      <Menu.Item
      name="About Timtool"
      active={activeFooter === 'About Timtool'}
      onClick={this.handleItemClick}
      />
      <Menu.Item
      name="contact"
      active={activeFooter === 'contact'}
      onClick={this.handleItemClick}
      />
      </Menu>

      {footer}
      </div>
      );
  }
}
