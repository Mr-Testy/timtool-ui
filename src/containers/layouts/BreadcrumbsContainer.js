import { connect } from 'react-redux'
import * as BreadcrumbActionCreators from '../../actions/breadcrumb_actions'
import Breadcrumbs from '../../components/layouts/Breadcrumbs'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => {
	return {
		pages: state.breadcrumb.pages,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		rollBackBreadcrumb: (destination) => dispatch(BreadcrumbActionCreators.rollBackBreadcrumb(destination)),
	}
}

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
	)(Breadcrumbs))