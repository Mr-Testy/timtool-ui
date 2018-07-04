import { connect } from 'react-redux'
import * as ActionCreators from '../../actions'
import Main from '../../components/layouts/Main'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => {
	return {
		sideBarIsVisible: state.sidebar.IsVisible,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		switchVisibleSideBarOff: () => dispatch(ActionCreators.switchVisibleSideBarOff()),
	}
}

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
	)(Main))