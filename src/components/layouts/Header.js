import React from 'react';
import {
  Menu,
  Responsive,
  Button,
  Icon,
  Dropdown,
  Form
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const toggle = ( switchVisibleSideBarOn, sideBarIsVisible) =>
{
  if (sideBarIsVisible === false) {
    return switchVisibleSideBarOn
  } else {
    return null
  }
}

class Header extends React.Component {
  state = { search: ''}

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  render (){
    const { search } = this.state
    const {
      switchVisibleSideBarOn,
      sideBarIsVisible,
      changePage,
    } = this.props
    return (
      <Menu inverted borderless>
      <Menu.Item>
      <Button
      circular
      inverted
      content="Menu"
      icon="sidebar"
      labelPosition="left"
      onClick={toggle( switchVisibleSideBarOn, sideBarIsVisible)}
      />
      </Menu.Item>
      <Menu.Item name="timtool" header />
      <Menu.Menu position="right">
      <Responsive minWidth={560}>
      <Menu.Item>
      <Form onSubmit={() => changePage("/search/" + search, "Search", "Recherche de tunes contenant : " + search, "search")}>
      <Form.Input
      icon={<Icon name="search" inverted circular link onClick={() => changePage("/search/" + search, "Search", "Recherche de tunes contenant : " + search, "search")}/>}
      placeholder="Search..."
      name='search' 
      value={search} 
      onChange={this.handleChange}    
      />
      </Form>
      </Menu.Item>
      </Responsive>
      <Dropdown item text="username">
      <Dropdown.Menu>
      <Dropdown.Item
      as={Link}
      icon="user"
      content="My account"
      onClick={() => changePage("/myaccount", "My account", "Informations de mon compte", "user")}
      to="/myaccount"
      />
      <Dropdown.Item
      as={Link}
      icon="heart"
      content="My favorites"
      onClick={() => changePage("/myfavorites", "My favorites", "Mes tunes ajoutés en favori", "heart")}
      to="/myfavorites"
      />
      <Dropdown.Item
      as={Link}
      icon="handshake"
      content="My groups"
      onClick={() => changePage("/mygroups", "My groups", "Mes groupes", "handshake")}
      to="/mygroups"
      />
      <Dropdown.Item
      as={Link}
      icon="dashboard"
      content="My dashboard"
      onClick={() => changePage("/mydashboard", "My dashboard", "Le tableau de bord de mes tunes favoris et de mon activité", "dashboard")}
      to="/mydashboard"
      />
      </Dropdown.Menu>
      </Dropdown>
      </Menu.Menu>
      </Menu>
      )
  }
}

Header.propTypes = {
  sideBarIsVisible: PropTypes.bool.isRequired,
  switchVisibleSideBarOn: PropTypes.func.isRequired,
  changePage: PropTypes.func.isRequired,
};

export default Header