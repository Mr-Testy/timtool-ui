import { connect } from 'react-redux'
import * as ActionCreators from '../../actions'
import ListOfTunesFilters from '../../components/elements/ListOfTunesFilters'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => {
	return {
		filters: state.tunes.filters
	}
}

const mapDispatchToProps = dispatch => {
	return {
		filterTunesByName: (name) => dispatch(ActionCreators.filterTunesByName(name)),
		filterTunesByKey: (key) => dispatch(ActionCreators.filterTunesByKey(key)),
		filterTunesByType: (type) => dispatch(ActionCreators.filterTunesByType(type)),
		reinitTuneFilters: () => dispatch(ActionCreators.reinitTuneFilters()),
	}
}

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
	)(ListOfTunesFilters))