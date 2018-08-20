import { connect } from 'react-redux'
import * as ActionCreators from '../../actions'
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
		switchVisibleSideBarOn: () => dispatch(ActionCreators.switchVisibleSideBarOn()),
		changePage: (path, title, subTitle, icon) => {
			dispatch(ActionCreators.reInitBreadcrumb(path, title, subTitle, icon),
				ownProps.history.push(path))
		}
	}
}

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
	)(Header))