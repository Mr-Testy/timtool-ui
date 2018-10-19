import { connect } from 'react-redux'
import * as UserActionCreators from '../../actions/user_actions'
import ListOfTunesFilters from '../../components/elements/ListOfTunesFilters'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => {
	return {
		filters: state.user.filters,
		isFilterForFavouritedTunes: true
	}
}

const mapDispatchToProps = dispatch => {
	return {
		filterTunesByName: (name) => dispatch(UserActionCreators.filterFavouritedTunesByName(name)),
		filterTunesByKey: (key) => dispatch(UserActionCreators.filterFavouritedTunesByKey(key)),
		filterTunesByType: (type) => dispatch(UserActionCreators.filterFavouritedTunesByType(type)),
		reinitTuneFilters: () => dispatch(UserActionCreators.reinitFavouritedTuneFilters()),
		filterTunesByLearned: (learned) => dispatch(UserActionCreators.filterFavouritedTunesByLearned(learned)),
	}
}

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
	)(ListOfTunesFilters))