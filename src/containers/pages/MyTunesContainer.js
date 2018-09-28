import { connect } from 'react-redux'
// import * as ActionCreators from '../../actions'
import MyTunes from '../../components/pages/MyTunes'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => {
	return {
		tunes: state.user.filteredTunes,
		isFetching: state.user.isFetchingFavoritedTunes,
		lastUpdated: state.user.lastUpdatedFavoritedTunes,
	}
}

const mapDispatchToProps = dispatch => {
	return {
	}
}

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
	)(MyTunes))