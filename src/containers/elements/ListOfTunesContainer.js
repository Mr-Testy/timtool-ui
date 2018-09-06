import { connect } from 'react-redux'
import * as TuneActionCreators from '../../actions/tune_actions'
import ListOfTunes from '../../components/elements/ListOfTunes'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => {
	return {
		tunes: state.tunes.filteredTunes,
		activePage: state.tunes.activePage,
		tunesPerPage: state.tunes.tunesPerPage,
		selectedTune: state.tunes.selectedTune,
		isFetchingTune: state.tunes.isFetchingTune,
		lastUpdatedTune: state.tunes.lastUpdatedTune,
		requestedTune: state.tunes.requestedTune
	}
}

const mapDispatchToProps = dispatch => {
	return {
		changePageOfTunes: (activePage) => dispatch(TuneActionCreators.changePageOfTunes(activePage)),
		fetchTune: (slug) => {
			dispatch(TuneActionCreators.requestTune(slug))
			fetch('https://testy-dev.satsu.eu/timtoolApi/tune/'+slug)
			.then(response => response.json())
			.then(json => dispatch(TuneActionCreators.receiveTune(json)))
		}
	}
}

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
	)(ListOfTunes))