import { connect } from 'react-redux'
import * as TuneActionCreators from '../../actions/tune_actions'
import ListOfTunesFilters from '../../components/elements/ListOfTunesFilters'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => {
	return {
		filters: state.tunes.filters,
		isFilterForFavoritedTunes: false
	}
}

const mapDispatchToProps = dispatch => {
	return {
		filterTunesByName: (name) => dispatch(TuneActionCreators.filterTunesByName(name)),
		filterTunesByKey: (key) => dispatch(TuneActionCreators.filterTunesByKey(key)),
		filterTunesByType: (type) => dispatch(TuneActionCreators.filterTunesByType(type)),
		reinitTuneFilters: () => dispatch(TuneActionCreators.reinitTuneFilters()),
	}
}

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
	)(ListOfTunesFilters))