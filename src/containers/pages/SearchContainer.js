import { connect } from 'react-redux'
// import * as ActionCreators from '../../actions'
import Search from '../../components/pages/Search'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => {
	return {
	}
}

const mapDispatchToProps = dispatch => {
	return {
	}
}

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
	)(Search))