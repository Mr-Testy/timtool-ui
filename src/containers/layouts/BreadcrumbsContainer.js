import { connect } from 'react-redux'
import * as ActionCreators from '../../actions'
import Breadcrumbs from '../../components/layouts/Breadcrumbs'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => {
	return {
		pages: state.breadcrumb.pages,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		rollBackBreadcrumb: (destination) => dispatch(ActionCreators.rollBackBreadcrumb(destination)),
	}
}

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
	)(Breadcrumbs))