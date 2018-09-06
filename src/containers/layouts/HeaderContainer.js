import { connect } from 'react-redux'
import * as SidebarActionCreators from '../../actions/sidebar_actions'
import * as BreadcrumbActionCreators from '../../actions/breadcrumb_actions'
import Header from '../../components/layouts/Header'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => {
	return {
		sideBarIsVisible: state.sidebar.isVisible,
		breadcrumb: state.breadcrumb
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		switchVisibleSideBarOn: () => dispatch(SidebarActionCreators.switchVisibleSideBarOn()),
		changePage: (path, title, subTitle, icon) => {
			dispatch(BreadcrumbActionCreators.reInitBreadcrumb(path, title, subTitle, icon),
				ownProps.history.push(path))
		}
	}
}

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
	)(Header))