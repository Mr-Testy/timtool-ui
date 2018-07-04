import { connect } from 'react-redux'
// import * as ActionCreators from '../../actions'
import Home from '../../components/pages/Home'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => {
	return {
		breadcrumb: state.breadcrumb,
	}
}

export default withRouter(connect(
	mapStateToProps,
	null
	)(Home))