import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ActionCreators from '../actions'
import App from '../components/App'

const mapStateToProps = state => {
	return {
		sideBarIsVisible: state.sideBar.IsVisible,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		actions: bindActionCreators(ActionCreators, dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
	)(App)