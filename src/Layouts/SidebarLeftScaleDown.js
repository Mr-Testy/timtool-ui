import React, { Component } from 'react';
import { Sidebar, Segment, Menu } from 'semantic-ui-react';
import Main from './Main.js';
import { Link } from 'react-router-dom';

class SidebarLeftScaleDown extends Component {
  state = {
    visible: false,
    nav: [['/', 'Home', 'home', 'c\'est le début quoi']]
  };

  toggleVisibility = () => {
    this.setState({ visible: !this.state.visible });
  };

  toggleVisibilityAndChangePage = (x, params) => {
    this.toggleVisibility();
    this.changePage(x, params);
  };

  toggleVisibilityAndReinitPage = (x, params) => {
    this.toggleVisibility();
    this.reinitPage(x, params);
  };

  changePage = (x, params) => {
    this.setState({ nav: [...this.state.nav, [params.to, params.content, params.icon, params.subheader]] });
  };

  reinitPage = (x, params) => {
    this.setState({ nav: [[params.to, params.content, params.icon, params.subheader]] });
  };

  rollBackNavBar = destination => {
    this.setState({ nav: this.state.nav.slice(0, destination + 1) });
  };

  render() {
    const { visible, nav } = this.state;
    return (
      <div>
      <Sidebar.Pushable as={Segment}>
      <Sidebar
      as={Menu}
      animation="scale down"
      width="thin"
      visible={visible}
      vertical
      inverted
      >
      <Menu.Item
      as={Link}
      onClick={this.toggleVisibilityAndReinitPage}
      icon="home"
      content="Home"
      to="/"
      subheader="looooool"
      />
      <Menu.Item
      as={Link}
      onClick={this.toggleVisibilityAndReinitPage}
      icon="music"
      content="All tunes"
      to="/alltunes"
      subheader="mais ouais"
      />
      <Menu.Item
      as={Link}
      onClick={this.toggleVisibilityAndReinitPage}
      icon="users"
      content="Groups"
      to="/groups"
      subheader="c'est sur que c'est ça"
      />
      <Menu.Item
      as={Link}
      onClick={this.toggleVisibilityAndReinitPage}
      icon="random"
      content="Comparator"
      to="/comparator"
      subheader="tu vas y arriver"
      />
      <Menu.Item
      as={Link}
      onClick={this.toggleVisibilityAndReinitPage}
      icon="settings"
      content="Generator"
      to="/generator"
      subheader="God bless the sin"
      />
      </Sidebar>
    {/* Contenu principal */}
    <Sidebar.Pusher>
    <Main
    changeVisibility={this.toggleVisibility}
    changePage={this.changePage}
    reinitPage={this.reinitPage}
    visible={visible}
    nav={nav}
    rollBackNavBar={this.rollBackNavBar}
    />
    </Sidebar.Pusher>
  {/* Fin du Contenu principal */}
  </Sidebar.Pushable>
  </div>
  );
  }
}

export default SidebarLeftScaleDown;
