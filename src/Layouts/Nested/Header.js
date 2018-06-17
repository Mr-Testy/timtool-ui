import React, { Component } from 'react';
import {
  Input,
  Menu,
  Responsive,
  Button,
  Icon,
  Dropdown
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Header extends Component {
  state = { activeHeader: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeHeader: name });

  render() {
    const { activeHeader } = this.state;

    return (
      <Menu inverted borderless>
      <Menu.Item>
      <Button
      circular
      inverted
      content="Menu"
      icon="sidebar"
      labelPosition="left"
      onClick={this.props.changeVisibility}
      />
      </Menu.Item>
      <Menu.Item name="timtool" active={activeHeader === 'timtool'} header />
      <Menu.Menu position="right">
      <Responsive minWidth={560}>
      <Menu.Item>
      <Input
      icon={<Icon name="search" inverted circular link />}
      placeholder="Search..."
      />
      </Menu.Item>
      </Responsive>
      <Dropdown item text="username">
      <Dropdown.Menu>
      <Dropdown.Item
      as={Link}
      icon="user"
      content="My account"
      onClick={this.props.reinitPage}
      to="/myaccount"
      subheader="la c'est dans le header"
      />
      <Dropdown.Item
      as={Link}
      icon="heart"
      content="My favorites"
      onClick={this.props.reinitPage}
      to="/myfavorites"
      subheader="comme à la maison"
      />
      <Dropdown.Item
      as={Link}
      icon="handshake"
      content="My groups"
      onClick={this.props.reinitPage}
      to="/mygroups"
      subheader="un x ieme message"
      />
      <Dropdown.Item
      as={Link}
      icon="dashboard"
      content="My dashboard"
      onClick={this.props.reinitPage}
      to="/mydashboard"
      subheader="le dernier pour l'instant"
      />
      </Dropdown.Menu>
      </Dropdown>
      </Menu.Menu>
      </Menu>
      );
  }
}

Header.propTypes = {
  reinitPage: PropTypes.func.isRequired,
  changeVisibility: PropTypes.func.isRequired
};
