import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ActionCreators from '../actions'
import Header from '../components/Header'

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
	)(Header)