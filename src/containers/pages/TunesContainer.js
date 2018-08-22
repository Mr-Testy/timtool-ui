import { connect } from 'react-redux'
// import * as ActionCreators from '../../actions'
import Tunes from '../../components/pages/Tunes'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => {
	return {
		tunes: state.tunes.filteredTunes,
		isFetching: state.tunes.isFetching,
		lastUpdated: state.tunes.lastUpdated,
	}
}

const mapDispatchToProps = dispatch => {
	return {
	}
}

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
	)(Tunes))