import React from 'react'
import { Sidebar, Segment, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import MainContainer from '../../containers/layouts/MainContainer'

const App = ({ sideBarIsVisible, switchVisibleSideBarOff, switchVisibleSideBarOn, double }) => (
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
  onClick={switchVisibleSideBarOff}
  icon="home"
  content="Home"
  to="/"
  />
  <Menu.Item
  as={Link}
  onClick={switchVisibleSideBarOff}
  icon="music"
  content="All tunes"
  to="/alltunes"
  />
  <Menu.Item
  as={Link}
  onClick={switchVisibleSideBarOff}
  icon="users"
  content="Groups"
  to="/groups"
  />
  <Menu.Item
  as={Link}
  onClick={switchVisibleSideBarOff}
  icon="random"
  content="Comparator"
  to="/comparator"
  />
  <Menu.Item
  as={Link}
  onClick={switchVisibleSideBarOff}
  icon="settings"
  content="Generator"
  to="/generator"
  />
  </Sidebar>
  <Sidebar.Pusher>
  <MainContainer />
  </Sidebar.Pusher>
  </Sidebar.Pushable>
  )

App.propTypes = {
  sideBarIsVisible: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired
}

export default App