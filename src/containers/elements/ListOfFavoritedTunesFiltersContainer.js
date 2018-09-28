import { connect } from 'react-redux'
import * as UserActionCreators from '../../actions/user_actions'
import ListOfTunesFilters from '../../components/elements/ListOfTunesFilters'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => {
	return {
		filters: state.user.filters,
		isFilterForFavoritedTunes: true
	}
}

const mapDispatchToProps = dispatch => {
	return {
		filterTunesByName: (name) => dispatch(UserActionCreators.filterFavoritedTunesByName(name)),
		filterTunesByKey: (key) => dispatch(UserActionCreators.filterFavoritedTunesByKey(key)),
		filterTunesByType: (type) => dispatch(UserActionCreators.filterFavoritedTunesByType(type)),
		reinitTuneFilters: () => dispatch(UserActionCreators.reinitFavoritedTuneFilters()),
		filterTunesByLearned: (learned) => dispatch(UserActionCreators.filterFavoritedTunesByLearned(learned)),
	}
}

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
	)(ListOfTunesFilters))