import { connect } from 'react-redux'
// import * as ActionCreators from '../../actions'
import Content from '../../components/layouts/Content'
import { withRouter } from 'react-router-dom'

// const mapStateToProps = state => {
// 	return {
// 		test: state
// 	}
// }

// const mapDispatchToProps = dispatch => {
// 	return {
// 	}
// }

export default withRouter(connect(
	null,
	null,
	)(Content))