import { connect } from 'react-redux'
import * as SidebarActionCreators from '../../actions/sidebar_actions'
import * as BreadcrumbActionCreators from '../../actions/breadcrumb_actions'
import * as TuneActionCreators from '../../actions/tune_actions'
import * as UserActionCreators from '../../actions/user_actions'
import App from '../../components/layouts/App'
import { withRouter } from 'react-router-dom'
import {
	BACKEND_URL,
	TUNES,
	FAVORIS,
} from '../../constants/CONFIG'

const mapStateToProps = (state, ownProps) => {
	return {
		sideBarIsVisible: state.sidebar.isVisible,
		breadcrumb: state.breadcrumb,
		location: ownProps.location,
		tunesAreStale: state.tunes.areStale,
		isLogged: state.user.isLogged,
		token: state.user.token
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
			fetch(BACKEND_URL+TUNES+'?limit=' + min +';offset=' + max)
			.then(response => response.json())
			.then(json => dispatch(TuneActionCreators.receiveTunes(json)))
		},
		fetchTunesFavoris: (token) => {
      		dispatch(UserActionCreators.requestFavoritedTunes())
			fetch(BACKEND_URL+FAVORIS,{
				headers: {
      				'Authorization': 'Token ' +token
    			}
    		})
			.then(response => response.json())
			.then(json => dispatch(UserActionCreators.receiveFavoritedTunes(json)))
		},
	}
}

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
	)(App))