import { connect } from 'react-redux'
import * as SidebarActionCreators from '../../actions/sidebar_actions'
import Main from '../../components/layouts/Main'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => {
	return {
		sideBarIsVisible: state.sidebar.isVisible,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		switchVisibleSideBarOff: () => dispatch(SidebarActionCreators.switchVisibleSideBarOff()),
	}
}

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
	)(Main))