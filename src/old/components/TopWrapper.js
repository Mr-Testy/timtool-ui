import React, { Component } from 'react';
import { Sidebar, Segment, Menu } from 'semantic-ui-react';
import Main from '../Layouts/Main.js';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

const nav = [['/', 'Home']]
// class SidebarLeftScaleDown extends Component {
//   state = {
//     visible: false,
//     nav: [['/', 'Home']]
//   };

//   toggleVisibility = () => {
//     this.setState({ visible: !this.state.visible });
//   };

//   toggleVisibilityAndChangePage = (x, params) => {
//     this.toggleVisibility();
//     this.changePage(x, params);
//   };

//   toggleVisibilityAndReinitPage = (x, params) => {
//     this.toggleVisibility();
//     this.reinitPage(x, params);
//   };

//   changePage = (x, params) => {
//     this.setState({ nav: [...this.state.nav, [params.to, params.content]] });
//   };

//   reinitPage = (x, params) => {
//     this.setState({ nav: [[params.to, params.content]] });
//   };

//   rollBackNavBar = destination => {
//     this.setState({ nav: this.state.nav.slice(0, destination + 1) });
//   };

//   render() {
//     const { visible, nav } = this.state;
//     const { switchVisibleSideBarOn, switchVisibleSideBarOff } = this.props
//     return (

const SidebarLeftScaleDown = ({ sideBarIsVisible, actions }) => (
  <Sidebar.Pushable as={Segment}>
  <Sidebar
  as={Menu}
  animation="push"
  width="thin"
  visible={sideBarIsVisible}
  vertical
  inverted
  >
  <Menu.Item
  as={Link}
  onClick={actions.switchVisibleSideBarOff}
  icon="home"
  content="Home"
  to="/"
  />
  <Menu.Item
  as={Link}
  onClick={actions.switchVisibleSideBarOff}
  icon="music"
  content="All tunes"
  to="/alltunes"
  />
  <Menu.Item
  as={Link}
  onClick={actions.switchVisibleSideBarOff}
  icon="users"
  content="Groups"
  to="/groups"
  />
  <Menu.Item
  as={Link}
  onClick={actions.switchVisibleSideBarOff}
  icon="random"
  content="Comparator"
  to="/comparator"
  />
  <Menu.Item
  as={Link}
  onClick={actions.switchVisibleSideBarOff}
  icon="settings"
  content="Generator"
  to="/generator"
  />
  </Sidebar>
{/* Contenu principal */}
<Sidebar.Pusher>
<Main
changeVisibility={actions.switchVisibleSideBarOn}
// changePage={this.changePage}
// reinitPage={this.reinitPage}
// visible={sideBarIsVisible}
nav={nav}
// rollBackNavBar={this.rollBackNavBar}
/>
</Sidebar.Pusher>
{/* Fin du Contenu principal */}
</Sidebar.Pushable>
)

SidebarLeftScaleDown.propTypes = {
  sideBarIsVisible: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired
}

export default SidebarLeftScaleDown;
