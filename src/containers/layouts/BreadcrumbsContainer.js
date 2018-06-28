import { connect } from 'react-redux'
import * as ActionCreators from '../../actions'
import Breadcrumbs from '../../components/layouts/Breadcrumbs'

const mapStateToProps = state => {
	return {
		nav: state.breadcrumb,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		rollBackNavBar: () => dispatch(ActionCreators.rollBackNavBar()),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
	)(Breadcrumbs)