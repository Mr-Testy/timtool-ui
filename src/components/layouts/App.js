import React from 'react'
import { Sidebar, Segment, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import MainContainer from '../../containers/layouts/MainContainer'
import { Redirect } from 'react-router-dom';

class App extends React.Component {

  componentDidMount(){
    if (this.props.tunesAreStale) {
      this.props.fetchTunes(0,5000)
    }
  }

  componentDidUpdate(){
    if (this.props.isLogged && this.props.favouritedTunesAreStale) {
      this.props.fetchTunesFavoris(this.props.token)
    }
  if (this.props.breadcrumb.isFirstPageVisited === true && this.props.location.pathname !== "/") {
    this.props.changePage("/", "Home", "Bienvenue à la maison", "home")
  }
  }

  render () {
    const {
      sideBarIsVisible,
      breadcrumb,
      changePage,
      location,
    } = this.props
      return (
        <div>
        { (breadcrumb.isFirstPageVisited === true && location.pathname !== "/") &&
          <Redirect to="/"/>
        }
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
        onClick={() => changePage("/", "Home", "Bienvenue à la maison", "home")}
        icon="home"
        content="Home"
        to="/"
        />
        <Menu.Item
        as={Link}
        onClick={() => changePage("/tunes", "Tunes", "Tous les tunes de Timtool", "music")}
        icon="music"
        content="Tunes"
        to="/tunes"
        />
        <Menu.Item
        as={Link}
        onClick={() => changePage("/groups", "Groups", "Tous les groupes de Timtool", "users")}
        icon="users"
        content="Groups"
        to="/groups"
        />
        <Menu.Item
        as={Link}
        onClick={() => changePage("/comparator", "Comparator", "L'outil de comparateur de tunes", "random")}
        icon="random"
        content="Comparator"
        to="/comparator"
        />
        <Menu.Item
        as={Link}
        onClick={() => changePage("/generator", "Generator", "L'outil de générateur de sets et de listes de tunes", "settings")}
        icon="settings"
        content="Generator"
        to="/generator"
        />
        </Sidebar>
        <Sidebar.Pusher>
        <MainContainer />
        </Sidebar.Pusher>
        </Sidebar.Pushable>
        </div>
        )
    }
  }

  App.propTypes = {
    sideBarIsVisible: PropTypes.bool.isRequired,
    isLogged: PropTypes.bool.isRequired,
    tunesAreStale: PropTypes.bool.isRequired,
    location: PropTypes.object.isRequired,
    breadcrumb: PropTypes.object.isRequired,
    switchIsFirstPageVisited: PropTypes.func.isRequired,
    changePage: PropTypes.func.isRequired,
    token: PropTypes.string,
    fetchTunesFavoris: PropTypes.func.isRequired,
    favouritedTunesAreStale: PropTypes.bool.isRequired,
  }

  export default App