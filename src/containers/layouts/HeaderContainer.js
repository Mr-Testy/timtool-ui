import { connect } from 'react-redux'
import * as SidebarActionCreators from '../../actions/sidebar_actions'
import * as BreadcrumbActionCreators from '../../actions/breadcrumb_actions'
import * as UserActionCreators from '../../actions/user_actions'
import * as TuneActionCreators from '../../actions/tune_actions'
import Header from '../../components/layouts/Header'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => {
	return {
		sideBarIsVisible: state.sidebar.isVisible,
		breadcrumb: state.breadcrumb,
		isLogged: state.user.isLogged,
		username: state.user.username,
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		switchVisibleSideBarOn: () => dispatch(SidebarActionCreators.switchVisibleSideBarOn()),
		changePage: (path, title, subTitle, icon) => {
			dispatch(BreadcrumbActionCreators.reInitBreadcrumb(path, title, subTitle, icon),
				ownProps.history.push(path))
		},
		logout: () => {
			dispatch(UserActionCreators.logout())
			dispatch(BreadcrumbActionCreators.switchIsFirstPageVisited())
		},
		changePageAndFilter: (path, title, subTitle, icon, filter) => {
			dispatch(BreadcrumbActionCreators.reInitBreadcrumb(path, title, subTitle, icon),
			ownProps.history.push(path))
			dispatch(TuneActionCreators.filterTunesByName(filter))
		}
	}
}

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
	)(Header))