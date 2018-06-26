import React, { Component } from 'react';
import Header from './Nested/Header';
import Content from './Nested/Content';
import Footer from './Nested/Footer';
import NavBar from './Nested/NavBar';
import PageTitle from './Nested/PageTitle';
import { Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export default class Main extends Component {
  state = {};

  render() {
    // const toggle = !this.props.visible ? null : this.props.changeVisibility;
    const toggle = !this.props.visible ? this.props.changeVisibility : this.props.changeVisibility;
    return (
      <div onClick={toggle}>
      <Header
      changeVisibility={this.props.changeVisibility}
      changePage={this.props.changePage}
      reinitPage={this.props.reinitPage}
      />
      <NavBar
      nav={this.props.nav}
      rollBackNavBar={this.props.rollBackNavBar}
      />
      <Segment>
<<<<<<< HEAD
      <PageTitle pageTitle={this.props.nav.slice(-1)[0][1]} />
      <Content nav={this.props.nav} changePage={this.props.changePage} />
      </Segment>
      <Footer />
=======
      <PageTitle pageTitle={this.props.nav.slice(-1)[0][1]} icon={this.props.nav.slice(-1)[0][2]} subheader={this.props.nav.slice(-1)[0][3]}/>
      <Content nav={this.props.nav} changePage={this.props.changePage} />
      </Segment>
      <Footer/>
>>>>>>> 8666298bc29e380f82af0a6f3ab1a8eab538065a
      </div>
      );
  }
}

Main.propTypes = {
  visible: PropTypes.bool.isRequired,
  changeVisibility: PropTypes.func.isRequired
};
