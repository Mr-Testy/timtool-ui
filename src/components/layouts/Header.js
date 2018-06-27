import React from 'react';
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

const toggle = ( switchVisibleSideBarOff, switchVisibleSideBarOn, sideBarIsVisible) =>
{
  if (sideBarIsVisible === false) {
    return switchVisibleSideBarOn
  } else {
    return null
  }
}

const Header = ({switchVisibleSideBarOff, switchVisibleSideBarOn, sideBarIsVisible, double}) => (
  <Menu inverted borderless>
  <Menu.Item>
  <Button
  circular
  inverted
  content="Menu"
  icon="sidebar"
  labelPosition="left"
  onClick={toggle( switchVisibleSideBarOff, switchVisibleSideBarOn, sideBarIsVisible)}
  />
  </Menu.Item>
  <Menu.Item name="timtool" header />
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
  onClick={double}
  to="/myaccount"
  subheader="la c'est dans le header"
  />
  <Dropdown.Item
  as={Link}
  icon="heart"
  content="My favorites"
  onClick={double}
  to="/myfavorites"
  subheader="comme à la maison"
  />
  <Dropdown.Item
  as={Link}
  icon="handshake"
  content="My groups"
  onClick={double}
  to="/mygroups"
  subheader="un x ieme message"
  />
  <Dropdown.Item
  as={Link}
  icon="dashboard"
  content="My dashboard"
  onClick={double}
  to="/mydashboard"
  subheader="le dernier pour l'instant"
  />
  </Dropdown.Menu>
  </Dropdown>
  </Menu.Menu>
  </Menu>
  )

Header.propTypes = {
  sideBarIsVisible: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired
};

export default Header