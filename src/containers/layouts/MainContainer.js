import { connect } from 'react-redux'
import * as ActionCreators from '../../actions'
import Main from '../../components/layouts/Main'

const mapStateToProps = state => {
	return {
		sideBarIsVisible: state.sidebar.IsVisible,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		switchVisibleSideBarOff: () => dispatch(ActionCreators.switchVisibleSideBarOff()),
		switchVisibleSideBarOn: () => dispatch(ActionCreators.switchVisibleSideBarOn()),
		double: () => dispatch([ActionCreators.switchVisibleSideBarOn(), ActionCreators.switchVisibleSideBarOff()])
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
	)(Main)