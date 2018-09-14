import { connect } from 'react-redux'
import * as SidebarActionCreators from '../../actions/sidebar_actions'
import * as BreadcrumbActionCreators from '../../actions/breadcrumb_actions'
import * as TuneActionCreators from '../../actions/tune_actions'
import App from '../../components/layouts/App'
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state, ownProps) => {
	return {
		sideBarIsVisible: state.sidebar.isVisible,
		breadcrumb: state.breadcrumb,
		location: ownProps.location,
		tunesAreStale: state.tunes.areStale,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		switchIsFirstPageVisited: () => dispatch(BreadcrumbActionCreators.switchIsFirstPageVisited()),
		switchVisibleSideBarOff: () => dispatch(SidebarActionCreators.switchVisibleSideBarOff()),
		switchVisibleSideBarOn: () => dispatch(SidebarActionCreators.switchVisibleSideBarOn()),
		changePage: (path, title, subTitle, icon) => {
			dispatch(SidebarActionCreators.switchVisibleSideBarOff())
			dispatch(BreadcrumbActionCreators.reInitBreadcrumb(path, title, subTitle, icon))
		},
		fetchTunes: (min, max) => {
			dispatch(TuneActionCreators.requestTunes())
			fetch('https://testy-dev.satsu.eu/timtoolApi/tunes/?limit=' + min +';offset=' + max)
			.then(response => response.json())
			.then(json => dispatch(TuneActionCreators.receiveTunes(json)))
		},
	}
}

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
	)(App))