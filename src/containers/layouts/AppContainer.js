import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ActionCreators from '../../actions'
import App from '../../components/layouts/App'

const mapStateToProps = state => {
	return {
		sideBarIsVisible: state.sideBar.IsVisible,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		switchVisibleSideBarOff: () => dispatch(ActionCreators.switchVisibleSideBarOff()),
		switchVisibleSideBarOn: () => dispatch(ActionCreators.switchVisibleSideBarOn()),
		double: () => dispatch([ActionCreators.switchVisibleSideBarOff(), ActionCreators.switchVisibleSideBarOn()])
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
	)(App)